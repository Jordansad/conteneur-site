'use strict';

/* ══════════════════════════════════════════
   QUOTE SYSTEM
══════════════════════════════════════════ */
let quote = JSON.parse(localStorage.getItem('cs_quote') || '[]');

const quoteDrawer   = document.getElementById('quoteDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerItems   = document.getElementById('drawerItems');
const drawerForm    = document.getElementById('drawerForm');

function openDrawer() {
  renderDrawer();
  quoteDrawer.classList.add('open');
  drawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  quoteDrawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('drawerClose').addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);
document.getElementById('quoteBtn').addEventListener('click', openDrawer);
document.querySelectorAll('.open-quote-drawer').forEach(b => b.addEventListener('click', openDrawer));

function updateCount() {
  const n = quote.length;
  document.querySelectorAll('#quoteCount, .quote-count').forEach(el => el.textContent = n);
  localStorage.setItem('cs_quote', JSON.stringify(quote));
}

function renderDrawer() {
  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'fr';
  if (!quote.length) {
    const empty = { fr:'Votre devis est vide.<br>Ajoutez des conteneurs depuis le catalogue.', en:'Your quote is empty.<br>Add containers from the catalogue.', de:'Ihr Angebot ist leer.<br>Fügen Sie Container aus dem Katalog hinzu.' };
    drawerItems.innerHTML = `<p class="drawer__empty">${empty[lang]||empty.fr}</p>`;
    drawerForm.style.display = 'none';
    return;
  }
  drawerForm.style.display = '';
  const surDevis = { fr:'Sur devis', en:'On request', de:'Auf Anfrage' };
  const total = quote.filter(i => i.price > 0).reduce((s, i) => s + i.price, 0);
  drawerItems.innerHTML = quote.map((item, i) => `
    <div class="drawer-item">
      <span class="drawer-item__name">${item.name}</span>
      <span class="drawer-item__price">${item.price > 0 ? item.price.toLocaleString('fr-FR') + ' €' : surDevis[lang]}</span>
      <button class="drawer-item__remove" data-index="${i}">✕</button>
    </div>
  `).join('') + (total > 0 ? `<div class="drawer-total">Total indicatif : <strong>${total.toLocaleString('fr-FR')} € HT</strong></div>` : '');

  drawerItems.querySelectorAll('.drawer-item__remove').forEach(btn => {
    btn.addEventListener('click', () => {
      quote.splice(parseInt(btn.dataset.index), 1);
      updateCount();
      renderDrawer();
    });
  });
}

/* ══════════════════════════════════════════
   CATALOGUE
══════════════════════════════════════════ */
const BADGE_CSS = {
  dispo:   'product-card__badge--dispo',
  loc:     'product-card__badge--loc',
  special: 'product-card__badge--special',
  reserve: 'product-card__badge--reserve'
};

function renderCatalogue(containers) {
  const grid = document.getElementById('catalogueGrid');
  if (!grid) return;
  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'fr';
  const surDevis = { fr:'Sur devis', en:'On request', de:'Auf Anfrage' };
  const addLabel  = { fr:'+ Devis', en:'+ Quote', de:'+ Angebot' };

  if (!containers || !containers.length) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:3rem;color:#888">Aucun conteneur disponible.</p>';
    return;
  }

  grid.innerHTML = containers.map(c => {
    const lc        = c[lang] || c.fr || {};
    const name      = lc.name      || '';
    const badgeText = lc.badgeText || '';
    const priceUnit = lc.priceUnit || '';
    const tags      = lc.tags      || [];
    const specs     = lc.specs     || [];
    const badgeClass = BADGE_CSS[c.badge] || 'product-card__badge--dispo';

    const priceHtml = c.price > 0
      ? `<div><span class="price__amount">${c.price.toLocaleString('fr-FR')} €</span><span class="price__label">${priceUnit}</span></div>`
      : `<div><span class="price__amount price__amount--devis">${surDevis[lang]}</span><span class="price__label">${priceUnit}</span></div>`;

    const imgHtml = c.image
      ? `<img src="${c.image}" alt="${name}" loading="lazy" onerror="this.parentElement.classList.add('img-error');this.remove()">`
      : '';

    return `
      <div class="product-card" data-type="${c.type}" data-size="${c.size}" data-animate>
        <div class="product-card__img">
          <span class="product-card__badge ${badgeClass}">${badgeText}</span>
          ${imgHtml}
          <div class="product-card__icon-bg">${c.type==='location'?'🔑':c.type==='amenage'?'🏗️':'📦'}</div>
        </div>
        <div class="product-card__body">
          <div class="product-card__meta">${tags.map(tag=>`<span class="tag">${tag}</span>`).join('')}</div>
          <h3 class="product-card__title">${name}</h3>
          <div class="product-card__specs">${specs.map(s=>`<span>${s}</span>`).join('')}</div>
          <div class="product-card__footer">
            ${priceHtml}
            <button class="btn btn--primary btn--sm add-to-quote"
              data-id="${c.id}" data-name="${name}" data-price="${c.price}">${addLabel[lang]}</button>
          </div>
        </div>
      </div>`;
  }).join('');

  bindAddToQuote();
  initFilters();
  observeNew();
}

function bindAddToQuote() {
  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'fr';
  const addedLabel = { fr:'✓ Ajouté', en:'✓ Added', de:'✓ Hinzugefügt' };
  const addLabel   = { fr:'+ Devis', en:'+ Quote', de:'+ Angebot' };

  document.querySelectorAll('.add-to-quote').forEach(btn => {
    btn.addEventListener('click', () => {
      const id    = btn.dataset.id;
      const name  = btn.dataset.name;
      const price = parseInt(btn.dataset.price) || 0;
      if (quote.some(i => i.id === id)) { openDrawer(); return; }
      quote.push({ id, name, price });
      updateCount();
      btn.textContent = addedLabel[lang] || '✓ Ajouté';
      btn.style.background = '#059669';
      setTimeout(() => { btn.textContent = addLabel[lang] || '+ Devis'; btn.style.background = ''; }, 2000);
      openDrawer();
    });
  });
}

/* ══════════════════════════════════════════
   DATA LOADING — fonctionne en local ET en ligne
══════════════════════════════════════════ */
function getData() {
  /* 1. Preview depuis admin */
  const isPreview = new URLSearchParams(location.search).get('preview') === '1';
  const preview   = localStorage.getItem('cs_preview_data');
  if (isPreview && preview) {
    try { return Promise.resolve(JSON.parse(preview)); } catch(e) {}
  }
  /* 2. Fetch data.json (serveur HTTP / Vercel) */
  if (location.protocol !== 'file:') {
    return fetch('data.json?t=' + Date.now())
      .then(r => r.ok ? r.json() : Promise.reject())
      .catch(() => Promise.resolve(window.SITE_DATA || { containers:[], contact:{} }));
  }
  /* 3. Données intégrées (ouverture locale en file://) */
  return Promise.resolve(window.SITE_DATA || { containers:[], contact:{} });
}

getData().then(data => {
  window._catalogueData = data.containers || [];
  renderCatalogue(window._catalogueData);
  applyContact(data.contact);
});

/* ══════════════════════════════════════════
   CONTACT
══════════════════════════════════════════ */
function applyContact(c) {
  if (!c) return;
  if (c.phone) {
    document.querySelectorAll('.contact-phone').forEach(a => {
      a.href = 'tel:' + c.phone.replace(/\s/g,'');
      a.textContent = c.phone;
    });
  }
  if (c.email) {
    document.querySelectorAll('.contact-email').forEach(a => {
      a.href = 'mailto:' + c.email;
      a.textContent = c.email;
    });
  }
  if (c.address) document.querySelectorAll('.contact-address').forEach(el => el.textContent = c.address);
  if (c.hours)   document.querySelectorAll('.contact-hours').forEach(el => el.textContent = c.hours);
  if (c.whatsapp) {
    const wa = document.getElementById('whatsappBtn');
    if (wa) wa.href = 'https://wa.me/' + c.whatsapp;
  }
}

/* ══════════════════════════════════════════
   LANGUAGE CHANGE
══════════════════════════════════════════ */
document.addEventListener('langchange', () => {
  if (window._catalogueData) renderCatalogue(window._catalogueData);
  renderDrawer();
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-btn--active'));
  const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
  if (allBtn) allBtn.classList.add('filter-btn--active');
  document.querySelectorAll('.product-card').forEach(c => c.classList.remove('hidden'));
});

/* ══════════════════════════════════════════
   FILTERS
══════════════════════════════════════════ */
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.product-card').forEach(card => {
        card.classList.toggle('hidden', f !== 'all' && card.dataset.type !== f && card.dataset.size !== f);
      });
    });
  });
}

/* ══════════════════════════════════════════
   ANIMATIONS
══════════════════════════════════════════ */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.08 });

function observeNew() {
  document.querySelectorAll('[data-animate]:not(.io-ok)').forEach(el => {
    el.classList.add('io-ok');
    io.observe(el);
  });
}
observeNew();

/* ══════════════════════════════════════════
   HEADER / NAV
══════════════════════════════════════════ */
const header    = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 60), { passive: true });
hamburger.addEventListener('click', () => { nav.classList.toggle('open'); hamburger.classList.toggle('is-open'); });
nav.querySelectorAll('.nav__link').forEach(l => l.addEventListener('click', () => { nav.classList.remove('open'); hamburger.classList.remove('is-open'); }));

/* ══════════════════════════════════════════
   FORMS
══════════════════════════════════════════ */
function getContactSettings() {
  const c = (window.SITE_DATA || {}).contact || {};
  return {
    email:     c.quoteEmail || c.email || 'contact@conteneurservice.fr',
    whatsapp:  c.whatsapp   || '33000000000'
  };
}

function buildQuoteText(fd) {
  const surDevis = { fr:'Sur devis', en:'On request', de:'Auf Anfrage' };
  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'fr';
  const items = quote.map(i => `• ${i.name} — ${i.price > 0 ? i.price.toLocaleString('fr-FR') + ' €' : surDevis[lang]}`).join('\n');
  const total = quote.filter(i => i.price > 0).reduce((s,i) => s+i.price, 0);
  return {
    items,
    full: `Prénom : ${fd.get('prenom')} ${fd.get('nom')}\nEmail : ${fd.get('email')}\nTél : ${fd.get('tel')}\n\nConteneur(s) demandé(s) :\n${items}${total > 0 ? '\n\nTotal indicatif : ' + total.toLocaleString('fr-FR') + ' € HT' : ''}\n\nPrécisions : ${fd.get('message') || '–'}`
  };
}

function afterSend(form) {
  document.getElementById('quoteSuccess').classList.add('visible');
  form.reset();
  quote = [];
  updateCount();
  setTimeout(renderDrawer, 400);
}

const quoteForm = document.getElementById('quoteForm');

/* Envoi WhatsApp */
document.getElementById('sendWhatsapp').addEventListener('click', () => {
  if (!quoteForm.checkValidity()) { quoteForm.reportValidity(); return; }
  if (!quote.length) { alert('Ajoutez au moins un conteneur au devis.'); return; }
  const fd   = new FormData(quoteForm);
  const { full } = buildQuoteText(fd);
  const { whatsapp } = getContactSettings();
  window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(full)}`, '_blank');
  afterSend(quoteForm);
});

/* Envoi Email */
quoteForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!quote.length) { alert('Ajoutez au moins un conteneur au devis.'); return; }
  const fd   = new FormData(quoteForm);
  const { full } = buildQuoteText(fd);
  const { email } = getContactSettings();
  window.location.href = `mailto:${email}?subject=Demande de devis – Conteneur Service&body=${encodeURIComponent(full)}`;
  afterSend(quoteForm);
});

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const fd   = new FormData(e.target);
  const body = encodeURIComponent(`De: ${fd.get('prenom')} ${fd.get('nom')}\nEmail: ${fd.get('email')}\nTél: ${fd.get('tel') || '–'}\n\n${fd.get('message')}`);
  window.location.href = `mailto:contact@conteneurservice.fr?subject=Contact – Conteneur Service&body=${body}`;
  document.getElementById('formSuccess').classList.add('visible');
  e.target.reset();
});

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
updateCount();
renderDrawer();

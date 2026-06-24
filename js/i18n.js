'use strict';

const TRANSLATIONS = {
  fr: {
    nav_services:'Services', nav_catalogue:'Catalogue', nav_realisations:'Réalisations', nav_pourquoi:'Pourquoi nous', nav_faq:'FAQ', nav_contact:'Contact',
    quote_btn:'Mon devis',
    hero_eyebrow:'Vente & Location · Livraison France entière',
    hero_title_1:'Conteneurs maritimes', hero_title_2:'à votre mesure',
    hero_desc:'Stock permanent de plus de 500 conteneurs 10, 20 et 40 pieds. Standards, High Cube, Reefer et aménagés sur mesure. Livraison rapide partout en France.',
    hero_cta_stock:'Voir le stock →', hero_cta_quote:'Devis gratuit',
    hero_stat_1:'En stock', hero_stat_2:'Dépôts France', hero_stat_3:'Livraison',
    svc_eyebrow:'Nos prestations', svc_title:'Tout ce dont vous avez besoin',
    svc_1_title:'Vente', svc_1_desc:'Conteneurs neufs et occasions certifiés. 10, 20 et 40 pieds en Standard, High Cube et Open Top.', svc_1_link:'Voir le stock →',
    svc_2_title:'Location', svc_2_desc:'Formules flexibles de 1 mois à plusieurs années. Livraison sur site et récupération incluses.', svc_2_link:'Voir les tarifs →',
    svc_3_title:'Aménagement', svc_3_desc:'Transformation sur mesure : bureaux de chantier, ateliers, vestiaires, logements modulaires.', svc_3_link:'Nous contacter →',
    svc_4_title:'Transport', svc_4_desc:'Livraison et reprise par camion grue ou remorque spécialisée, partout en France métropolitaine.', svc_4_link:'Calculer →',
    cat_eyebrow:'Disponible immédiatement', cat_title:'Catalogue de conteneurs',
    filter_all:'Tout le stock', filter_vente:'Vente', filter_location:'Location', filter_20ft:'20 pieds', filter_40ft:'40 pieds', filter_amenage:'Aménagé',
    add_to_quote:'+ Devis', added_quote:'✓ Ajouté', sur_devis:'Sur devis',
    cta_title:'Un projet hors standard ?', cta_desc:'Reefer, open-top, flat-rack, aménagements sur mesure — on a toujours une solution adaptée.',
    cta_btn:'📋 Demander un devis gratuit',
    real_eyebrow:'Nos chantiers', real_title:'Quelques réalisations',
    real_1_tag:'Dépôt logistique', real_1_label:'Stock de conteneurs · Île-de-France',
    real_2_tag:'Bureau de chantier', real_2_label:'Base vie chantier BTP · Lyon',
    real_3_tag:'Transport maritime', real_3_label:'Exportation conteneurs · Le Havre',
    real_4_tag:'Stockage industriel', real_4_label:'Entrepôt modulaire · Bordeaux',
    why_eyebrow:'Nos engagements', why_title:'Pourquoi choisir Conteneur Service ?',
    why_1_title:'Stock permanent', why_1_desc:'Plus de 500 conteneurs disponibles immédiatement répartis dans nos 6 dépôts régionaux en France.',
    why_2_title:'Livraison 48h', why_2_desc:'Pose sur site par camion grue ou remorque spécialisée. Partout en France métropolitaine, délai garanti.',
    why_3_title:'Certifiés & garantis', why_3_desc:'Chaque conteneur est inspecté, certifié étanche et fourni avec rapport de contrôle. Garantie 12 mois.',
    why_4_title:'Devis sous 24h', why_4_desc:'Réponse garantie sous 24h ouvrées avec prix tout compris : produit, transport et manutention inclus.',
    faq_eyebrow:'Questions fréquentes', faq_title:'On répond à tout',
    faq_1_q:'Livrez-vous partout en France ?', faq_1_a:'Oui, nous livrons sur toute la France métropolitaine grâce à notre réseau de 6 dépôts régionaux (Nord, Île-de-France, Grand Est, Sud-Ouest, PACA, Bretagne). Les DOM-TOM sont possibles sur demande.',
    faq_2_q:'Quel est le délai de livraison moyen ?', faq_2_a:'En général 48 à 72h après confirmation de commande et règlement. Livraison express possible dans certaines zones.',
    faq_3_q:'Proposez-vous la location longue durée ?', faq_3_a:'Oui, de 1 mois à plusieurs années avec des tarifs dégressifs selon la durée.',
    faq_4_q:'Les conteneurs sont-ils étanches ?', faq_4_a:'Tous nos conteneurs sont inspectés et certifiés étanches avant livraison. Rapport d\'inspection disponible sur demande.',
    faq_5_q:'Puis-je visiter un dépôt avant d\'acheter ?', faq_5_a:'Absolument, sur rendez-vous dans nos 6 dépôts. Contactez-nous pour organiser votre visite.',
    faq_6_q:'Quels modes de paiement acceptez-vous ?', faq_6_a:'Virement bancaire, chèque de banque et règlement comptant. Facilités de paiement envisageables pour les professionnels sur dossier.',
    contact_eyebrow:'On vous répond sous 24h', contact_title:'Contactez-nous',
    contact_phone_lbl:'Téléphone', contact_email_lbl:'Email', contact_address_lbl:'Siège social', contact_hours_lbl:'Horaires',
    form_prenom:'Prénom *', form_nom:'Nom *', form_email:'Email *', form_tel:'Téléphone', form_tel_req:'Téléphone *',
    form_message:'Message *', form_message_ph:'Décrivez votre besoin (type, taille, quantité, lieu de livraison...)',
    form_submit_contact:'Envoyer le message →', form_ok_contact:'✅ Message envoyé ! Nous vous répondons sous 24h.',
    form_precisions:'Précisions', form_precisions_ph:'Lieu de livraison, dates souhaitées, questions...',
    form_submit_quote:'Envoyer le devis →', form_ok_quote:'✅ Devis envoyé ! Nous vous contactons sous 24h.',
    send_whatsapp:'Envoyer sur WhatsApp', send_email:'Envoyer par Email',
    drawer_title:'📋 Mon devis', drawer_empty:'Votre devis est vide.\nAjoutez des conteneurs depuis le catalogue.',
    drawer_form_title:'Vos coordonnées',
    footer_desc:'Spécialiste vente et location de conteneurs maritimes en France. Stock permanent, livraison rapide, devis gratuit.',
    footer_svc:'Services', footer_cat:'Catalogue', footer_contact:'Contact',
    footer_legal:'Mentions légales', footer_cgv:'CGV',
    footer_copy:'© 2026 Conteneur Service · Tous droits réservés ·'
  },
  en: {
    nav_services:'Services', nav_catalogue:'Catalogue', nav_realisations:'Projects', nav_pourquoi:'Why us', nav_faq:'FAQ', nav_contact:'Contact',
    quote_btn:'My quote',
    hero_eyebrow:'Sales & Rental · Delivery across France',
    hero_title_1:'Shipping containers', hero_title_2:'tailored to you',
    hero_desc:'Permanent stock of over 500 containers — 10, 20 and 40 feet. Standard, High Cube, Reefer and custom-built. Fast delivery across France.',
    hero_cta_stock:'Browse stock →', hero_cta_quote:'Free quote',
    hero_stat_1:'In stock', hero_stat_2:'French depots', hero_stat_3:'Delivery',
    svc_eyebrow:'Our services', svc_title:'Everything you need',
    svc_1_title:'Sales', svc_1_desc:'New and certified second-hand containers. 10, 20 and 40 feet in Standard, High Cube and Open Top.', svc_1_link:'Browse stock →',
    svc_2_title:'Rental', svc_2_desc:'Flexible terms from 1 month to several years. On-site delivery and pickup included.', svc_2_link:'See pricing →',
    svc_3_title:'Conversion', svc_3_desc:'Custom conversion: site offices, workshops, changing rooms, modular housing.', svc_3_link:'Contact us →',
    svc_4_title:'Transport', svc_4_desc:'Delivery and collection by crane truck or specialist trailer, anywhere in mainland France.', svc_4_link:'Calculate →',
    cat_eyebrow:'Available now', cat_title:'Container catalogue',
    filter_all:'All stock', filter_vente:'For sale', filter_location:'Rental', filter_20ft:'20 feet', filter_40ft:'40 feet', filter_amenage:'Converted',
    add_to_quote:'+ Quote', added_quote:'✓ Added', sur_devis:'On request',
    cta_title:'Non-standard project?', cta_desc:'Reefer, open-top, flat-rack, bespoke conversions — we always have a solution.',
    cta_btn:'📋 Request a free quote',
    real_eyebrow:'Our projects', real_title:'Recent projects',
    real_1_tag:'Logistics depot', real_1_label:'Container stock · Île-de-France',
    real_2_tag:'Site office', real_2_label:'Construction site base · Lyon',
    real_3_tag:'Maritime transport', real_3_label:'Container export · Le Havre',
    real_4_tag:'Industrial storage', real_4_label:'Modular warehouse · Bordeaux',
    why_eyebrow:'Our commitments', why_title:'Why choose Conteneur Service?',
    why_1_title:'Permanent stock', why_1_desc:'Over 500 containers immediately available across our 6 regional depots in France.',
    why_2_title:'48h delivery', why_2_desc:'On-site placement by crane truck or specialist trailer. Anywhere in mainland France, guaranteed.',
    why_3_title:'Certified & guaranteed', why_3_desc:'Every container is inspected, certified watertight and comes with an inspection report. 12-month guarantee.',
    why_4_title:'Quote within 24h', why_4_desc:'Guaranteed response within 24 business hours with all-inclusive pricing: product, transport and handling.',
    faq_eyebrow:'Frequently asked questions', faq_title:'We answer everything',
    faq_1_q:'Do you deliver across France?', faq_1_a:'Yes, we deliver across mainland France thanks to our network of 6 regional depots. Overseas territories available on request.',
    faq_2_q:'What is the average delivery time?', faq_2_a:'Generally 48 to 72 hours after order confirmation. Express delivery possible in some areas.',
    faq_3_q:'Do you offer long-term rental?', faq_3_a:'Yes, from 1 month to several years with tiered rates based on duration.',
    faq_4_q:'Are the containers watertight?', faq_4_a:'All our containers are inspected and certified watertight before delivery. Inspection report available on request.',
    faq_5_q:'Can I visit a depot before buying?', faq_5_a:'Absolutely, by appointment at our 6 depots. Contact us to arrange a visit.',
    faq_6_q:'What payment methods do you accept?', faq_6_a:'Bank transfer, bank cheque and cash on delivery. Payment facilities available for businesses on application.',
    contact_eyebrow:'We reply within 24h', contact_title:'Contact us',
    contact_phone_lbl:'Phone', contact_email_lbl:'Email', contact_address_lbl:'Head office', contact_hours_lbl:'Opening hours',
    form_prenom:'First name *', form_nom:'Last name *', form_email:'Email *', form_tel:'Phone', form_tel_req:'Phone *',
    form_message:'Message *', form_message_ph:'Describe your need (type, size, quantity, delivery location...)',
    form_submit_contact:'Send message →', form_ok_contact:'✅ Message sent! We\'ll reply within 24h.',
    form_precisions:'Details', form_precisions_ph:'Delivery location, preferred dates, questions...',
    form_submit_quote:'Send quote request →', form_ok_quote:'✅ Quote sent! We\'ll contact you within 24h.',
    send_whatsapp:'Send via WhatsApp', send_email:'Send by Email',
    drawer_title:'📋 My quote', drawer_empty:'Your quote is empty.\nAdd containers from the catalogue.',
    drawer_form_title:'Your details',
    footer_desc:'Specialist in shipping container sales and rental in France. Permanent stock, fast delivery, free quotes.',
    footer_svc:'Services', footer_cat:'Catalogue', footer_contact:'Contact',
    footer_legal:'Legal notice', footer_cgv:'T&Cs',
    footer_copy:'© 2026 Conteneur Service · All rights reserved ·'
  },
  de: {
    nav_services:'Leistungen', nav_catalogue:'Katalog', nav_realisations:'Projekte', nav_pourquoi:'Warum wir', nav_faq:'FAQ', nav_contact:'Kontakt',
    quote_btn:'Mein Angebot',
    hero_eyebrow:'Verkauf & Miete · Lieferung in ganz Frankreich',
    hero_title_1:'Seecontainer', hero_title_2:'nach Ihrem Maß',
    hero_desc:'Permanenter Bestand von über 500 Containern — 10, 20 und 40 Fuß. Standard, High Cube, Reefer und Sonderausbau. Schnelle Lieferung in ganz Frankreich.',
    hero_cta_stock:'Zum Lager →', hero_cta_quote:'Kostenloses Angebot',
    hero_stat_1:'Auf Lager', hero_stat_2:'Standorte FR', hero_stat_3:'Lieferung',
    svc_eyebrow:'Unsere Leistungen', svc_title:'Alles was Sie brauchen',
    svc_1_title:'Verkauf', svc_1_desc:'Neue und zertifizierte gebrauchte Container. 10, 20 und 40 Fuß in Standard, High Cube und Open Top.', svc_1_link:'Zum Lager →',
    svc_2_title:'Vermietung', svc_2_desc:'Flexible Mietverträge ab 1 Monat. Lieferung und Rückholung inklusive.', svc_2_link:'Preise ansehen →',
    svc_3_title:'Umbau', svc_3_desc:'Maßgefertigter Umbau: Baubüros, Werkstätten, Umkleideräume, modulares Wohnen.', svc_3_link:'Kontakt →',
    svc_4_title:'Transport', svc_4_desc:'Lieferung und Abholung per Kranwagen oder Spezialanhänger, überall in Frankreich.', svc_4_link:'Berechnen →',
    cat_eyebrow:'Sofort verfügbar', cat_title:'Container-Katalog',
    filter_all:'Alle', filter_vente:'Kauf', filter_location:'Miete', filter_20ft:'20 Fuß', filter_40ft:'40 Fuß', filter_amenage:'Ausgebaut',
    add_to_quote:'+ Angebot', added_quote:'✓ Hinzugefügt', sur_devis:'Auf Anfrage',
    cta_title:'Sonderprojekt?', cta_desc:'Reefer, Open-Top, Flat-Rack, Sonderumbauten — wir haben immer eine Lösung.',
    cta_btn:'📋 Kostenloses Angebot anfordern',
    real_eyebrow:'Unsere Projekte', real_title:'Ausgewählte Referenzen',
    real_1_tag:'Logistikdepot', real_1_label:'Container-Lager · Île-de-France',
    real_2_tag:'Baubüro', real_2_label:'Baustellen-Basis · Lyon',
    real_3_tag:'Seetransport', real_3_label:'Container-Export · Le Havre',
    real_4_tag:'Industrielager', real_4_label:'Modullager · Bordeaux',
    why_eyebrow:'Unsere Versprechen', why_title:'Warum Conteneur Service?',
    why_1_title:'Permanenter Bestand', why_1_desc:'Über 500 Container sofort verfügbar in unseren 6 regionalen Depots in Frankreich.',
    why_2_title:'48h-Lieferung', why_2_desc:'Aufstellung per Kranwagen oder Spezialanhänger. Überall in Frankreich, garantierte Frist.',
    why_3_title:'Zertifiziert & garantiert', why_3_desc:'Jeder Container wird geprüft, als wasserdicht zertifiziert und mit Inspektionsbericht geliefert. 12 Monate Garantie.',
    why_4_title:'Angebot in 24h', why_4_desc:'Garantierte Antwort innerhalb von 24 Wertstunden mit Komplettpreis: Produkt, Transport und Handhabung.',
    faq_eyebrow:'Häufige Fragen', faq_title:'Wir beantworten alles',
    faq_1_q:'Liefern Sie überall in Frankreich?', faq_1_a:'Ja, wir liefern in ganz Frankreich dank unserem Netz von 6 regionalen Depots. Überseegebiete auf Anfrage möglich.',
    faq_2_q:'Wie lang ist die durchschnittliche Lieferzeit?', faq_2_a:'Im Allgemeinen 48 bis 72 Stunden nach Auftragsbestätigung. Expresslieferung in bestimmten Gebieten möglich.',
    faq_3_q:'Bieten Sie Langzeitmiete an?', faq_3_a:'Ja, von 1 Monat bis mehrere Jahre mit gestaffelten Tarifen je nach Mietdauer.',
    faq_4_q:'Sind die Container wasserdicht?', faq_4_a:'Alle unsere Container werden vor der Lieferung geprüft und als wasserdicht zertifiziert. Inspektionsbericht auf Anfrage.',
    faq_5_q:'Kann ich ein Depot vor dem Kauf besichtigen?', faq_5_a:'Absolut, nach Terminvereinbarung in unseren 6 Depots. Kontaktieren Sie uns, um einen Besuch zu vereinbaren.',
    faq_6_q:'Welche Zahlungsmethoden akzeptieren Sie?', faq_6_a:'Banküberweisung, Bankscheck und Barzahlung bei Lieferung. Zahlungserleichterungen für Geschäftskunden auf Anfrage.',
    contact_eyebrow:'Wir antworten innerhalb von 24h', contact_title:'Kontaktieren Sie uns',
    contact_phone_lbl:'Telefon', contact_email_lbl:'E-Mail', contact_address_lbl:'Firmensitz', contact_hours_lbl:'Öffnungszeiten',
    form_prenom:'Vorname *', form_nom:'Nachname *', form_email:'E-Mail *', form_tel:'Telefon', form_tel_req:'Telefon *',
    form_message:'Nachricht *', form_message_ph:'Beschreiben Sie Ihren Bedarf (Typ, Größe, Menge, Lieferort...)',
    form_submit_contact:'Nachricht senden →', form_ok_contact:'✅ Nachricht gesendet! Wir antworten innerhalb von 24h.',
    form_precisions:'Hinweise', form_precisions_ph:'Lieferort, gewünschte Termine, Fragen...',
    form_submit_quote:'Angebot absenden →', form_ok_quote:'✅ Angebot gesendet! Wir melden uns innerhalb von 24h.',
    send_whatsapp:'Per WhatsApp senden', send_email:'Per E-Mail senden',
    drawer_title:'📋 Mein Angebot', drawer_empty:'Ihr Angebot ist leer.\nFügen Sie Container aus dem Katalog hinzu.',
    drawer_form_title:'Ihre Kontaktdaten',
    footer_desc:'Spezialist für Verkauf und Vermietung von Seecontainern in Frankreich. Permanenter Bestand, schnelle Lieferung.',
    footer_svc:'Leistungen', footer_cat:'Katalog', footer_contact:'Kontakt',
    footer_legal:'Impressum', footer_cgv:'AGB',
    footer_copy:'© 2026 Conteneur Service · Alle Rechte vorbehalten ·'
  }
};

let currentLang = localStorage.getItem('cs_lang') || 'fr';

function t(key) { return TRANSLATIONS[currentLang][key] || TRANSLATIONS.fr[key] || key; }

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('cs_lang', lang);
  applyTranslations();
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  document.documentElement.lang = lang;
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
});

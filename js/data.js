/* Données du catalogue — modifiables depuis admin.html */
window.SITE_DATA = {
  containers: [
    {
      id: 'c20s', type: 'vente', size: '20ft', badge: 'dispo', price: 1850,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      fr: { name: "Conteneur 20' Standard", badgeText: 'Disponible', priceUnit: 'HT · port compris', tags: ['20 pieds','Standard','Occasion'], specs: ['📐 5,90 × 2,35 × 2,39 m intérieur','⚖️ Tare 2 200 kg · Charge 28 t','📦 Volume 33,2 m³'] },
      en: { name: "20' Standard Container", badgeText: 'Available', priceUnit: 'excl. VAT · shipping incl.', tags: ['20 feet','Standard','Second-hand'], specs: ['📐 5.90 × 2.35 × 2.39 m interior','⚖️ Tare 2,200 kg · Load 28 t','📦 Volume 33.2 m³'] },
      de: { name: "20' Standard-Container", badgeText: 'Verfügbar', priceUnit: 'zzgl. MwSt. · inkl. Lieferung', tags: ['20 Fuß','Standard','Gebraucht'], specs: ['📐 5,90 × 2,35 × 2,39 m innen','⚖️ Tara 2.200 kg · Last 28 t','📦 Volumen 33,2 m³'] }
    },
    {
      id: 'c40hc', type: 'vente', size: '40ft', badge: 'dispo', price: 4200,
      image: 'https://images.unsplash.com/photo-1519003300449-424ad0405076?w=800&q=80',
      fr: { name: "Conteneur 40' High Cube", badgeText: 'Disponible', priceUnit: 'HT · port compris', tags: ['40 pieds','High Cube','Neuf'], specs: ['📐 12,03 × 2,35 × 2,70 m intérieur','⚖️ Tare 3 900 kg · Charge 26,5 t','📦 Volume 76,3 m³'] },
      en: { name: "40' High Cube Container", badgeText: 'Available', priceUnit: 'excl. VAT · shipping incl.', tags: ['40 feet','High Cube','New'], specs: ['📐 12.03 × 2.35 × 2.70 m interior','⚖️ Tare 3,900 kg · Load 26.5 t','📦 Volume 76.3 m³'] },
      de: { name: "40' High-Cube-Container", badgeText: 'Verfügbar', priceUnit: 'zzgl. MwSt. · inkl. Lieferung', tags: ['40 Fuß','High Cube','Neu'], specs: ['📐 12,03 × 2,35 × 2,70 m innen','⚖️ Tara 3.900 kg · Last 26,5 t','📦 Volumen 76,3 m³'] }
    },
    {
      id: 'l20s', type: 'location', size: '20ft', badge: 'loc', price: 89,
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80',
      fr: { name: "Location 20' Standard", badgeText: 'Location', priceUnit: 'HT / mois · livraison incluse', tags: ['20 pieds','Location','Dès 1 mois'], specs: ['📐 5,90 × 2,35 × 2,39 m intérieur','🚚 Livraison + reprise incluses','📅 Durée flexible'] },
      en: { name: "20' Standard Rental", badgeText: 'Rental', priceUnit: 'excl. VAT / month · delivery incl.', tags: ['20 feet','Rental','From 1 month'], specs: ['📐 5.90 × 2.35 × 2.39 m interior','🚚 Delivery + pickup included','📅 Flexible duration'] },
      de: { name: "20' Standard mieten", badgeText: 'Miete', priceUnit: 'zzgl. MwSt. / Monat · Lieferung inkl.', tags: ['20 Fuß','Miete','Ab 1 Monat'], specs: ['📐 5,90 × 2,35 × 2,39 m innen','🚚 Lieferung + Rückholung inkl.','📅 Flexible Laufzeit'] }
    },
    {
      id: 'c40s', type: 'vente', size: '40ft', badge: 'dispo', price: 3100,
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80',
      fr: { name: "Conteneur 40' Standard", badgeText: 'Disponible', priceUnit: 'HT · port compris', tags: ['40 pieds','Standard','Occasion'], specs: ['📐 12,03 × 2,35 × 2,39 m intérieur','⚖️ Tare 3 750 kg · Charge 26,7 t','📦 Volume 67,5 m³'] },
      en: { name: "40' Standard Container", badgeText: 'Available', priceUnit: 'excl. VAT · shipping incl.', tags: ['40 feet','Standard','Second-hand'], specs: ['📐 12.03 × 2.35 × 2.39 m interior','⚖️ Tare 3,750 kg · Load 26.7 t','📦 Volume 67.5 m³'] },
      de: { name: "40' Standard-Container", badgeText: 'Verfügbar', priceUnit: 'zzgl. MwSt. · inkl. Lieferung', tags: ['40 Fuß','Standard','Gebraucht'], specs: ['📐 12,03 × 2,35 × 2,39 m innen','⚖️ Tara 3.750 kg · Last 26,7 t','📦 Volumen 67,5 m³'] }
    },
    {
      id: 'l40hc', type: 'location', size: '40ft', badge: 'loc', price: 149,
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80',
      fr: { name: "Location 40' High Cube", badgeText: 'Location', priceUnit: 'HT / mois · livraison incluse', tags: ['40 pieds','High Cube','Location'], specs: ['📐 12,03 × 2,35 × 2,70 m intérieur','🚚 Livraison + reprise incluses','📅 Durée flexible'] },
      en: { name: "40' High Cube Rental", badgeText: 'Rental', priceUnit: 'excl. VAT / month · delivery incl.', tags: ['40 feet','High Cube','Rental'], specs: ['📐 12.03 × 2.35 × 2.70 m interior','🚚 Delivery + pickup included','📅 Flexible duration'] },
      de: { name: "40' High Cube mieten", badgeText: 'Miete', priceUnit: 'zzgl. MwSt. / Monat · Lieferung inkl.', tags: ['40 Fuß','High Cube','Miete'], specs: ['📐 12,03 × 2,35 × 2,70 m innen','🚚 Lieferung + Rückholung inkl.','📅 Flexible Laufzeit'] }
    },
    {
      id: 'c20hc', type: 'vente', size: '20ft', badge: 'dispo', price: 2400,
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
      fr: { name: "Conteneur 20' High Cube", badgeText: 'Disponible', priceUnit: 'HT · port compris', tags: ['20 pieds','High Cube','Neuf'], specs: ['📐 5,90 × 2,35 × 2,70 m intérieur','⚖️ Tare 2 400 kg · Charge 27,6 t','📦 Volume 37,3 m³'] },
      en: { name: "20' High Cube Container", badgeText: 'Available', priceUnit: 'excl. VAT · shipping incl.', tags: ['20 feet','High Cube','New'], specs: ['📐 5.90 × 2.35 × 2.70 m interior','⚖️ Tare 2,400 kg · Load 27.6 t','📦 Volume 37.3 m³'] },
      de: { name: "20' High-Cube-Container", badgeText: 'Verfügbar', priceUnit: 'zzgl. MwSt. · inkl. Lieferung', tags: ['20 Fuß','High Cube','Neu'], specs: ['📐 5,90 × 2,35 × 2,70 m innen','⚖️ Tara 2.400 kg · Last 27,6 t','📦 Volumen 37,3 m³'] }
    },
    {
      id: 'b20', type: 'amenage', size: '20ft', badge: 'special', price: 0,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      fr: { name: "Bureau de chantier 20'", badgeText: 'Sur mesure', priceUnit: 'Selon équipements', tags: ['20 pieds','Aménagé','Bureau'], specs: ['💡 Électricité + éclairage LED','❄️ Climatisation réversible','🚿 Sanitaires en option'] },
      en: { name: "20' Site Office", badgeText: 'Custom', priceUnit: 'Depending on equipment', tags: ['20 feet','Converted','Office'], specs: ['💡 Electricity + LED lighting','❄️ Reversible air conditioning','🚿 Sanitary facilities optional'] },
      de: { name: "20' Baubüro", badgeText: 'Maßgefertigt', priceUnit: 'Je nach Ausstattung', tags: ['20 Fuß','Ausgebaut','Büro'], specs: ['💡 Strom + LED-Beleuchtung','❄️ Umkehrbare Klimaanlage','🚿 Sanitäranlagen optional'] }
    },
    {
      id: 'b40', type: 'amenage', size: '40ft', badge: 'special', price: 0,
      image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&q=80',
      fr: { name: "Atelier / Vestiaire 40'", badgeText: 'Sur mesure', priceUnit: 'Selon équipements', tags: ['40 pieds','Aménagé','Atelier'], specs: ['🔌 Tableau électrique complet','🚿 Douches + vestiaires','🪟 Fenêtres & isolation thermique'] },
      en: { name: "40' Workshop / Changing Room", badgeText: 'Custom', priceUnit: 'Depending on equipment', tags: ['40 feet','Converted','Workshop'], specs: ['🔌 Full electrical panel','🚿 Showers + changing rooms','🪟 Windows & thermal insulation'] },
      de: { name: "40' Werkstatt / Umkleide", badgeText: 'Maßgefertigt', priceUnit: 'Je nach Ausstattung', tags: ['40 Fuß','Ausgebaut','Werkstatt'], specs: ['🔌 Kompletter Schaltkasten','🚿 Duschen + Umkleidekabinen','🪟 Fenster & Wärmedämmung'] }
    }
  ],
  contact: {
    phone: '+33 0 00 00 00 00',
    email: 'contact@conteneurservice.fr',
    address: 'Paris, Île-de-France',
    hours: 'Lun – Ven · 8h à 18h',
    whatsapp: '33000000000',
    quoteEmail: 'contact@conteneurservice.fr'
  }
};

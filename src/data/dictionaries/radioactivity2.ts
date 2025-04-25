const radioactivity2 = {
  infos: {
    label:
      "pour un calcul plus précis de votre exposition annuelle aux rayonements ionisants, utilisez le simulateur de l'<a href='https://expop.irsn.fr' target='_blank'>IRSN</a>.",
    divisor: 999999999,
    pluralize: false,
  },
  msv: {
    label: "mSv",
    divisor: 1,
  },
  sv: {
    label: "Sv",
    divisor: 1000,
  },
  rem: {
    label: "rem",
    divisor: 10,
  },
  mrem: {
    label: "mrem",
    divisor: 0.01,
  },
  banana: {
    label: "banane par jour",
    divisor: (6.2 / 1000000000) * 365 * 19.2 * 1000,
    not_unit: true,
  },
  cabbage: {
    label: "kg de chou par mois",
    divisor: (6.2 / 1000000000) * 150 * 12 * 1000,
    pluralize: false,
    not_unit: true,
  },
  white_bread: {
    label: "litres de vin par semaine",
    divisor: (6.2 / 1000000000) * 35 * 12 * 1000,
    pluralize: false,
    not_unit: true,
  },
  fish: {
    label: "kg de poisson par mois",
    divisor: (1.2 / 1000000) * 12 * 1000,
    pluralize: false,
    not_unit: true,
  },
  thea: {
    label: "kg de thé par an",
    divisor: (6.2 / 1000000000) * 740 * 1000,
    pluralize: false,
    not_unit: true,
  },
  mountain_1500: {
    label: "année en montagne à 1500m",
    divisor: 0.8,
    not_unit: true,
  },
  paris_newyork_AR: {
    info: 'selon les données de l\'<a href="https://www.irsn.fr/savoir-comprendre/sante/compagnies-aeriennes-fini-calcul-doses" target="_blank">IRSN</a>.',
    label: "vol Paris - New-York AR",
    divisor: 0.124,
    not_unit: true,
  },
  paris_tokyo_AR: {
    info: 'selon les données de l\'<a href="https://www.irsn.fr/savoir-comprendre/sante/compagnies-aeriennes-fini-calcul-doses" target="_blank">IRSN</a>.',
    label: "vol Paris - Tokyo AR",
    divisor: 0.196,
    not_unit: true,
  },
  annual_worker_max_dose: {
    info: 'selon les données de l\'<a href="https://www.irsn.fr/savoir-comprendre/sante/modalites-surveillance-lexposition-travailleurs" target="_blank">IRSN</a>.',
    label: "dose max dans le nucléaire",
    divisor: 20,
    not_unit: true,
  },
  month__astronaut: {
    label: "astronaute dans l'ISS par mois",
    divisor: 25,
    not_unit: true,
    pluralize: false,
  },
  lungs__radiography: {
    info: 'selon les données de l\'<a href="https://afcn.fgov.be/fr/dossiers/applications-medicales/comparaison-des-doses-de-rayonnements" target="_blank">AFCN</a>.',
    label: "radiographie pulmonaire",
    divisor: 0.06,
    not_unit: true,
  },
  mammography: {
    info: 'selon les données de l\'<a href="https://afcn.fgov.be/fr/dossiers/applications-medicales/comparaison-des-doses-de-rayonnements" target="_blank">AFCN</a>.',
    label: "mammographie",
    divisor: 0.3,
    not_unit: true,
  },
  lungs_ct_scan: {
    info: 'selon les données de l\'<a href="https://afcn.fgov.be/fr/dossiers/applications-medicales/comparaison-des-doses-de-rayonnements" target="_blank">AFCN</a>.',
    label: "scanner pulmonaire",
    divisor: 3,
    not_unit: true,
  },
  abdomen_ct_scan: {
    info: 'selon les données de l\'<a href="https://expop.irsn.fr/" target="_blank">IRSN</a>.',
    label: "scanner abdomino-pelvien",
    divisor: 9.5,
    not_unit: true,
  },
  PET_scan: {
    info: 'selon les données de l\'<a href="https://afcn.fgov.be/fr/dossiers/applications-medicales/comparaison-des-doses-de-rayonnements" target="_blank">AFCN</a>.',
    label: "PET Scan",
    divisor: 4.5,
    not_unit: true,
    pluralize: false,
  },
  dental_panoramic: {
    info: 'selon les données de l\'<a href="https://afcn.fgov.be/fr/dossiers/applications-medicales/comparaison-des-doses-de-rayonnements" target="_blank">AFCN</a>.',
    label: "panoramique dentaire",
    divisor: 0.01,
    not_unit: true,
    pluralize_all: true,
  },
}

export default radioactivity2

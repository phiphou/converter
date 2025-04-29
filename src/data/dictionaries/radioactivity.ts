const radioactivity = {
  infos: {
    label:
      "pour un calcul plus précis de votre exposition annuelle aux rayonements ionisants, utilisez le simulateur de l'<a href='https://expop.irsn.fr' target='_blank'>IRSN</a>.",
    divisor: 999999999,
    pluralize: false,
  },
  bq: {
    label: "Bequerel",
    divisor: 1,
    pluralize: true,
  },
  cu: {
    label: "Curie",
    divisor: 37000000000,
    pluralize: true,
  },
  sea_water: {
    info: 'selon les données du <a href=" https://www.cea.fr/comprendre/Pages/radioactivite/essentiel-sur-grandeur-unites-radioactivite.aspx" target="_blank">CEA</a>.',
    label: "litre d'eau de mer",
    divisor: 10,
    pluralize: false,
    not_unit: true,
  },
  banana: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Dose_%C3%A9quivalente_en_banane" target="_blank">Wikipedia</a>.',
    label: "une banane",
    divisor: 19.5,
    pluralize: true,
    not_unit: true,
  },
  salad: {
    info: 'selon les données de l\'<a href="https://expo-radioactivite.irsn.fr/thematiques/la-radioactivite-cest-quoi/la-radioactivite-dans-les-aliments/" target="_blank">IRSN/a>.',
    label: "kg de salade",
    divisor: 90,
    pluralize: true,
    not_unit: true,
  },
  chicken: {
    info: 'selon les données de l\'<a href="https://expo-radioactivite.irsn.fr/thematiques/la-radioactivite-cest-quoi/la-radioactivite-dans-les-aliments/" target="_blank">IRSN/a>.',
    label: "kg de viande de poulet",
    divisor: 100,
    pluralize: true,
    not_unit: true,
  },
  potatoes: {
    info: 'selon les données du <a href="https://www.cea.fr/comprendre/Pages/radioactivite/essentiel-sur-grandeur-unites-radioactivite.aspx" target="_blank">CEA</a>.',
    label: "kg de pommes de terres",
    divisor: 150,
    not_unit: true,
    pluralize: true,
  },
  white_bread: {
    info: 'selon les données de <a href="https://laradioactivite.com/articles/au-quotidien/alimentation" target="_blank">laradioactivite.com</a>.',
    label: "kg de pain blanc",
    divisor: 546,
    not_unit: true,
    pluralize: true,
  },
  thea: {
    info: 'selon les données de <a href="https://laradioactivite.com/articles/au-quotidien/alimentation" target="_blank">laradioactivite.com</a>.',
    label: "kg de feuilles de thé",
    divisor: 740,
    not_unit: true,
    pluralize: true,
  },
}

export default radioactivity

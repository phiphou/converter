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
    pluralize: false,
  },
  cu: {
    label: "Curie",
    divisor: 37000000000,
    pluralize: false,
  },
  banana: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Dose_%C3%A9quivalente_en_banane" target="_blank">Wikipedia</a>.',
    label: "banane",
    divisor: 19.5,
    not_unit: true,
  },
  potatoes: {
    label: "kg de pommes de terres",
    divisor: 170,
    pluralize: false,
    not_unit: true,
  },
  white_bread: {
    label: "kg de pain blanc",
    divisor: 546,
    pluralize: false,
    not_unit: true,
  },
  thea: {
    label: "kg de thé",
    divisor: 740,
    pluralize: false,
    not_unit: true,
  },
}

export default radioactivity

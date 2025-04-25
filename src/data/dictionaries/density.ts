const density = {
  infos: {
    label:
      "données de densité de <a href='https://fr.wikipedia.org/wiki/Masse_volumique#Tables_des_masses_volumiques_de_diverses_substances' target='_blank' >Wikipedia</a>, à 20 °C et sous pression atmosphérique normale (1013hPa).",
    divisor: 999999999,
    pluralize: false,
  },
  materials: {
    water: {label: "eau", divisor: 1, quote: "d'"},
    concrete: {label: "béton", divisor: 1 / 2.2, quote: "de"},
    diamond: {label: "diamant", divisor: 1 / 3.517, quote: "de"},
    granit: {label: "granite", divisor: 1 / 2.7, quote: "de"},
    marble: {label: "marbre", divisor: 1 / 2.7, quote: "de"},
    glass: {label: "verre", divisor: 1 / 2.53, quote: "de"},
    steel: {label: "acier", divisor: 1 / 7.6, quote: "d'"},
    aluminium: {label: "aluminium", divisor: 1 / 2.7, quote: "d'"},
    silver: {label: "argent", divisor: 1 / 10.5, quote: "d'"},
    copper: {label: "cuivre", divisor: 1 / 8.96, quote: "de"},
    iron: {label: "fer", divisor: 1 / 7.86, quote: "de"},
    iridium: {label: "iridium", divisor: 1 / 22.56, quote: "d'"},
    gold: {label: "or", divisor: 1 / 19.32, quote: "d'"},
    mercure: {label: "mercure", divisor: 1 / 13.545, quote: "de"},
    nickel: {label: "nickel", divisor: 1 / 8.9, quote: "de"},
    platinium: {label: "platine", divisor: 1 / 21.45, quote: "de"},
    lead: {label: "plomb", divisor: 1 / 11.35, quote: "de"},
    titanium: {label: "titane", divisor: 1 / 4.5, quote: "de"},
    tungsten: {label: "tungstène", divisor: 1 / 19.3, quote: "de"},
    uranium: {label: "uranium", divisor: 1 / 19.1, quote: "d'"},
    liquid_hydrogen: {label: "hydrogène liquide", divisor: 1 / 0.07, quote: "d'"},
    oil: {label: "essence", divisor: 1 / 0.075, quote: "d'"},
    vegetal_oil: {label: "huile végétale", divisor: 1 / 0.092, quote: "d'"},
    balsa: {label: "balsa", divisor: 1 / 0.14, quote: "de"},
    liege: {label: "liège", divisor: 1 / 0.24, quote: "de"},
    fir_tree: {label: "sapin", divisor: 1 / 0.45, quote: "de"},
    acajou: {label: "acajou", divisor: 1 / 0.7, quote: "d'"},
    hêtre: {label: "hêtre", divisor: 1 / 0.8, quote: "de"},
    ébène: {label: "ébène", divisor: 1 / 1.15, quote: "d'"},
  },
  mg: {
    label: "milligramme",
    divisor: 0.001,
  },
  g: {
    label: "gramme",
    divisor: 1,
  },
  kg: {
    label: "kilogramme",
    divisor: 1000,
  },
  t: {
    label: "tonne",
    divisor: 1000000,
  },
  mm3: {
    label: "mm³",
    divisor: 0.001,
    pluralize: true,
  },
  cm3: {
    label: "cm³",
    divisor: 1,
    pluralize: true,
  },
  dcm3: {
    label: "dm³",
    divisor: 1000,
    pluralize: true,
  },
  m3: {
    label: "m³",
    divisor: 1000000,
    pluralize: true,
  },
}

export default density

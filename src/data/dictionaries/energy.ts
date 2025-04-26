const energy = {
  j: {
    label: "joule",
    divisor: 1,
    pluralize: false,
  },
  kj: {
    label: "kilojoule",
    divisor: 1000,
    pluralize: false,
  },
  Mj: {
    label: "mégajoule",
    divisor: 1000 * 1000,
    pluralize: false,
  },
  Gj: {
    label: "gigajoule",
    divisor: 1000 * 1000 * 1000,
    pluralize: false,
  },
  cal: {
    label: "calorie",
    divisor: 1 / 0.2388458966275,
    pluralize: false,
  },
  kcal: {
    label: "kilocalorie",
    divisor: 1000 * (1 / 0.2388458966275),
    pluralize: false,
  },
  Wh: {
    label: "Watt-heure",
    divisor: 3600,
  },
  kWh: {
    label: "kiloWatt-heure",
    divisor: 3600 * 1000,
  },
  MWh: {
    label: "megaWatt-heure",
    divisor: 3600 * 1000 * 1000,
  },
  GWh: {
    label: "gigaWatt-heure",
    divisor: 3600 * 1000 * 1000 * 1000,
  },
  kgOE: {
    label: "kg équivalent pétrole (kOE)",
    divisor: 41868000,
    pluralize: true,
  },
  TOE: {
    label: "tonne équivalent pétrole (TOE)",
    divisor: 41868000000,
  },
  BOE: {
    label: "baril équivalent pétrole (BOE)",
    divisor: 5861520000,
  },
  kgSKE: {
    label: "kg équivalent charbon (kg SKE)",
    divisor: 29307600,
    pluralize: true,
  },
  tSKE: {
    label: "tonne équivalent charbon (t SKE)",
    divisor: 29307600000,
    pluralize: false,
  },
  eV: {
    label: "électron-volt (eV)",
    divisor: 1.602176487000004e-19,
  },
  keV: {
    label: "kilo-électron-volt (keV)",
    divisor: 1.602176487000004e-16,
  },
  MeV: {
    label: "mega-électron-volt (MeV)",
    divisor: 1.602176487000004e-13,
  },
  GeV: {
    label: "giga-électron-volt (GeV)",
    divisor: 1.602176487000004e-10,
  },
  TeV: {
    label: "tera-électron-volt (TeV)",
    divisor: 1.602176487000004e-7,
  },
  gT: {
    label: "gramme de TNT",
    divisor: 41840,
    pluralize: true,
  },
  kgT: {
    label: "kg de TNT",
    divisor: 4184000,
    pluralize: true,
  },
  T: {
    label: "tonne de TNT (T)",
    divisor: 4184000000,
    pluralize: false,
  },
  kT: {
    label: "kilo-tonne de TNT (kT)",
    divisor: 4184000000000,
    pluralize: false,
  },
  MT: {
    label: "mega-tonne de TNT (MT)",
    divisor: 4184000000000000,
    pluralize: false,
  },
  Hiroshima: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/%C3%89quivalent_en_TNT#Exemples" target="_blank">Wikipedia</a>.',
    label: "bombe A Hiroshima",
    divisor: 4184000000000 * 15,
    pluralize: false,
    not_unit: true,
  },
  Nagasaki: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/%C3%89quivalent_en_TNT#Exemples" target="_blank">Wikipedia</a>.',
    label: "bombe A Nagasaki",
    divisor: 4184000000000 * 22,
    pluralize: false,
    not_unit: true,
  },
  Tsar_Bomba: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/%C3%89quivalent_en_TNT#Exemples" target="_blank">Wikipedia</a>.',
    label: "bombe H Tsar Bomba",
    divisor: 4184000000000000 * 50,
    pluralize: false,
    not_unit: true,
  },
  bullet_22lr: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Ordres_de_grandeur_d%27%C3%A9nergie" target="_blank">Wikipedia</a>.',
    label: "balle .22 Long Rifle",
    divisor: 142,
    pluralize: false,
    not_unit: true,
  },
  LR06: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Ordres_de_grandeur_d%27%C3%A9nergie" target="_blank">Wikipedia</a>.',
    label: "pile LR06-AA",
    divisor: 8640,
    pluralize: false,
    not_unit: true,
  },
  bullet_50BMG: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/12,7_%C3%97_99_mm_OTAN" target="_blank">Wikipedia</a>.',
    label: "balle .50 BMG",
    divisor: 19000,
    pluralize: false,
    not_unit: true,
  },
  potatoes_300g: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Ordres_de_grandeur_d%27%C3%A9nergie" target="_blank">Wikipedia</a>.',
    label: "300g de pomme de terre",
    divisor: 1000000,
    not_unit: true,
  },
  oil_liter: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Essence_(hydrocarbure)" target="_blank">Wikipedia</a>.',
    label: "litre d'essence",
    divisor: 33.6 * 1000000,
    pluralize: false,
    not_unit: true,
  },
  sun_1s: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Ordres_de_grandeur_d%27%C3%A9nergie" target="_blank">Wikipedia</a>.',
    label: "Soleil en une seconde",
    divisor: 3.827e26,
    not_unit: true,
  },
}

export default energy

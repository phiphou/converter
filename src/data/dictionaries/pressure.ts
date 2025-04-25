const pressure = {
  mPa: {
    label: "milliPascal",
    divisor: 0.001,
    pluralize: false,
  },
  Pa: {
    label: "Pascal",
    divisor: 1,
    pluralize: false,
  },
  hPa: {
    label: "hectoPascal",
    divisor: 100,
    pluralize: false,
  },
  kPa: {
    label: "kiloPascal",
    divisor: 1000,
    pluralize: false,
  },
  mbar: {
    info: 'seuil de la douleur auditive (<a href="https://www.laphysique.net/phf/hydrostpr_f.htm" target="_blank">source</a>).',
    label: "millibar",
    divisor: 100,
    pluralize: false,
  },
  bar: {
    label: "bar",
    divisor: 100000,
    pluralize: false,
  },
  kgcm2: {
    label: "kg/cm²",
    divisor: 98066.5,
  },
  atm: {
    label: "atmosphère normale",
    divisor: 101325,
  },
  mmHg: {
    label: "millimètre de mercure",
    divisor: (1 / 760) * 101325,
  },
  lbfin2: {
    label: "livre-force par pouce carré",
    divisor: 6894.76,
    pluralize: false,
  },
  mmH2O: {
    label: "milimètre d'eau",
    divisor: 9.80638,
  },
  Nm2: {
    label: "newton par mètre carré",
    divisor: 1,
    pluralize: false,
  },
  Torr: {
    label: "Torr",
    divisor: (1 / 760) * 101325,
    pluralize: false,
  },
  hundred_meters_underwater: {
    info: 'pression à 100m sous l\'eau (<a href="https://www.laphysique.net/phf/hydrostpr_f.htm" target="_blank">source</a>).',
    label: "100m sous l'eau",
    divisor: 1000000,
    pluralize: false,
  },
  earth: {
    info: 'pression à l\'intérieur au de la Terre (<a href="https://fr.wikipedia.org/wiki/Ordres_de_grandeur_de_pression" target="_blank">source</a>).',
    label: "centre de la Terre",
    divisor: 380000000000,
    pluralize: false,
  },
  sun: {
    info: 'pression à l\'intérieur du noyeau du Soleil (<a href="https://fr.wikipedia.org/wiki/Ordres_de_grandeur_de_pression" target="_blank">source</a>).',
    label: "cœur du Soleil",
    divisor: 35000000000000000,
    pluralize: false,
  },
}

export default pressure

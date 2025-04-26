const power = {
  W: {
    label: "W",
    divisor: 1,
    pluralize: true,
  },
  kW: {
    label: "kW",
    divisor: 1000,
    pluralize: true,
  },
  MW: {
    label: "MW",
    divisor: 1000000,
    pluralize: true,
  },
  ch: {
    label: "cheval vapeur (ch)",
    plural: "chevaux",
    divisor: 735.49875,
  },
  hp: {
    label: "cheval vapeur US (hp)",
    plural: "chevaux",
    divisor: 745.66272,
  },
  bike: {
    info: 'selon les données de <a href="https://www.velo101.com/entrainements/programmes-et-techniques/puissance-quelle-est-la-bonne-moyenne-de-watts-en-tant-que-cycliste/" target="_blank">velo101.com</a>.',
    label: "cycliste pro pendant 1 heure",
    divisor: 392,
    not_unit: true,
  },
  AMG_A35: {
    label: "Mercedes-AMG A 35",
    info: 'selon les données du <a href=https://www.mercedes-benz.fr/passengercars/models/saloon/a-class/amg.html#technical-data" target="_blank">constructeur</a>.',
    divisor: 225062.6175,
    pluralize: true,
    not_unit: true,
  },
  chiron: {
    info: 'selon les données du <a href= https://newsroom.cdn.bugatti-media.com/6673ecbdbde16a1e54953018/original" target="_blank">constructeur</a>.',
    label: "Bugatti Chiron Super Sport 300+",
    divisor: 1177000,
    pluralize: true,
    not_unit: true,
  },
  GE90: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/General_Electric_GE90" target="_blank">Wikipedia</a>.',
    label: "turboréacteur GE90",
    divisor: 83.198 * 1000000,
    not_unit: true,
  },
}

export default power

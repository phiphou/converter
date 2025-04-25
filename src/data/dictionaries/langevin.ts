const langevin = {
  infos: {
    label:
      "plus d'infos sur le paradoxe de Langevin sur <a href='https://https://fr.wikipedia.org/wiki/Paradoxe_des_jumeaux' target='_blank' >Wikipedia</a>.",
    divisor: 999999999,
    pluralize: false,
  },
  noSwitch: true,
  materials: {
    plane: {label: "vitesse avion de ligne", divisor: 1 / 1.00000000000035, quote: "à"},
    p1: {label: "1% vitesse lumière", divisor: 1 / 1.000050004, quote: "à"},
    p5: {label: "5% vitesse lumière", divisor: 1 / 1.001252349, quote: "à"},
    p10: {label: "10% vitesse lumière", divisor: 1 / 1.005037815, quote: "à"},
    p20: {label: "20% vitesse lumière", divisor: 1 / 1.020620726, quote: "à"},
    p25: {label: "25% vitesse lumière", divisor: 1 / 1.032795559, quote: "à"},
    p50: {label: "50% vitesse lumière", divisor: 1 / 1.511857892, quote: "à"},
    p75: {label: "75% vitesse lumière", divisor: 1 / 1.511857892, quote: "à"},
    p80: {label: "80% vitesse lumière", divisor: 1 / 1.666666667, quote: "à"},
    p90: {label: "90% vitesse lumière", divisor: 1 / 2.294157339, quote: "à"},
    p95: {label: "95% vitesse lumière", divisor: 1 / 3.202563076, quote: "à"},
    p99: {label: "99% vitesse lumière", divisor: 1 / 7.08881205, quote: "à"},
    p99_9: {label: "99.9% vitesse lumière", divisor: 1 / 22.36627204, quote: "à"},
    p99_99: {label: "99.99% vitesse lumière", divisor: 1 / 70.71244595, quote: "à"},
    p99_999: {label: "99.999% vitesse lumière", divisor: 1 / 223.6073568, quote: "à"},
  },
  jours: {
    label: "jour sur terre",
    divisor: 1,
  },
  jours2: {
    label: "jour dans le vaisseau",
    divisor: 1,
  },
  mois: {
    label: "mois sur terre",
    divisor: 30.4375,
    pluralize: false,
  },
  mois2: {
    label: "mois dans le vaisseau",
    divisor: 30.4375,
  },
  années: {
    label: "année sur terre",
    divisor: 365.25,
  },
  années2: {
    label: "année dans le vaisseau",
    divisor: 365.25,
  },
}

export default langevin

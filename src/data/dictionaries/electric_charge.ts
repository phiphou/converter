const electric_charge = {
  infos: {
    label:
      "d'après les données de <a href='https://fr.wikipedia.org/wiki/Charge_%C3%A9lectrique#Unit%C3%A9s' target='_blank'>Wikipedia</a>.",
    divisor: 999999999,
    pluralize: false,
  },
  uC: {
    label: "microCoulomb",
    divisor: 1 / 3600000000,
    pluralize: false,
  },
  mC: {
    label: "milliCoulomb",
    divisor: 1 / 3600000,
    pluralize: false,
  },
  C: {
    label: "Coulomb",
    divisor: 1 / 3600,
    pluralize: false,
  },
  uAh: {
    label: "microAmpère-heure",
    divisor: 0.000001,
    pluralize: false,
  },
  mAh: {
    label: "milliAmpère-heure²",
    divisor: 0.001,
    pluralize: false,
  },
  Ah: {
    label: "Ampère-heure",
    divisor: 1,
    pluralize: false,
  },
  Fd: {
    label: "Faraday",
    pluralize: false,
    divisor: 1 / 0.037311367755258,
  },
  e: {
    label: "charge élémentaire",
    divisor: 1 / 2.2469434729634e22,
  },
}

export default electric_charge

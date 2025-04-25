const flow = {
  m3s: {
    label: "m³/s",
    divisor: 1,
  },
  m3min: {
    label: "m³/min",
    divisor: 1 / 60,
  },
  m3h: {
    label: "m³/h",
    divisor: 1 / (60 * 60),
  },
  m3j: {
    label: "m³/j",
    divisor: 1 / (60 * 60 * 24),
  },
  m3y: {
    label: "m³/an",
    divisor: 1 / (60 * 60 * 24 * 365.25),
  },
  ls: {
    label: "l/s",
    divisor: 0.001,
  },
  lmin: {
    label: "l/min",
    divisor: 0.001 / 60,
  },
  lh: {
    label: "l/h",
    divisor: 0.001 / (60 * 60),
  },
  lj: {
    label: "l/j",
    divisor: 0.001 / (60 * 60 * 24),
  },
  ly: {
    label: "l/an",
    divisor: 0.001 / (60 * 60 * 24 * 365.25),
  },
  gpd: {
    label: "gallon par jour",
    divisor: 0.003785 / (60 * 60 * 24),
  },
  leak: {
    label: "fuite 15 gouttes par minute",
    divisor: 4.5 / 1000 / 86400,
  },
  shower: {
    label: "douche",
    divisor: 20 / 60 / 1000,
  },
  fire_hose: {
    info: "débit maximal pour un diamètre de 100mm, selon les données de <a href='https://fr.wikipedia.org/wiki/Lance_%C3%A0_incendie' target='blank'>Wikipedia</a>.",
    label: "lance à incendie",
    divisor: 1 / 60,
  },
  seine: {
    info: "débit moyen à Paris, selon les données de <a href='https://fr.wikipedia.org/wiki/Seine' target='blank'>Wikipedia</a>.",
    label: "Seine",
    divisor: 328,
    pluralize: true,
  },
  danau: {
    info: "débit moyen, selon les données de <a href='https://fr.wikipedia.org/wiki/Liste_des_cours_d%27eau_selon_le_d%C3%A9bit' target='blank'>Wikipedia</a>.",
    label: "Danube",
    divisor: 6452,
    pluralize: true,
  },
  amazon: {
    info: "débit moyen, selon les données de <a href='https://fr.wikipedia.org/wiki/Liste_des_cours_d%27eau_selon_le_d%C3%A9bit' target='blank'>Wikipedia</a>.",
    label: "Amazone",
    divisor: 220800,
    pluralize: true,
  },
}

export default flow

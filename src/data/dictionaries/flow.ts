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
    info: "pour une goutte métrique classique de 0.05ml.",
    label: "fuite 15 gouttes par minute",
    divisor: 1.08 / 1000 / 86400,
    not_unit: true,
  },
  shower: {
    info: "débit moyen, selon les données de <a href='https://www.manomano.fr/conseil/comment-choisir-son-pommeau-de-douche-2945' target='blank'>Manomano</a>.",
    label: "douche",
    divisor: 15 / 60 / 1000,
    not_unit: true,
  },
  fire_hose: {
    info: "débit maximal pour un diamètre de 100mm, selon les données de <a href='https://fr.wikipedia.org/wiki/Lance_%C3%A0_incendie' target='blank'>Wikipedia</a>.",
    label: "lance à incendie",
    divisor: 1 / 60,
    not_unit: true,
  },
  seine: {
    info: "débit moyen à Paris, selon les données de <a href='https://fr.wikipedia.org/wiki/Seine' target='blank'>Wikipedia</a>.",
    label: "Seine",
    divisor: 328,
    pluralize: true,
    not_unit: true,
  },
  danau: {
    info: "débit moyen, selon les données de <a href='https://fr.wikipedia.org/wiki/Liste_des_cours_d%27eau_selon_le_d%C3%A9bit' target='blank'>Wikipedia</a>.",
    label: "Danube",
    divisor: 6452,
    pluralize: true,
    not_unit: true,
  },
  amazon: {
    info: "débit moyen, selon les données de <a href='https://fr.wikipedia.org/wiki/Liste_des_cours_d%27eau_selon_le_d%C3%A9bit' target='blank'>Wikipedia</a>.",
    label: "Amazone",
    divisor: 220800,
    pluralize: true,
    not_unit: true,
  },
}

export default flow

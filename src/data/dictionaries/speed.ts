const speed = {
  ms: {
    label: "m/s",
    divisor: 1 / (1 / 3600) / 1000,
    pluralize: false,
  },
  kms: {
    label: "km/s",
    divisor: 1 / (1 / 3600),
    pluralize: false,
  },
  mh: {
    label: "m/h",
    divisor: 0.001,
    pluralize: false,
  },
  kmh: {
    label: "km/h",
    divisor: 1,
    pluralize: false,
  },
  mih: {
    label: "mile par heure",
    divisor: 1.609344,
  },
  fs: {
    label: "pied par seconde",
    divisor: 0.0003048 / (1 / 3600),
  },
  ys: {
    label: "yard par seconde",
    divisor: 0.0009144 / (1 / 3600),
  },
  yh: {
    label: "yard par heure",
    divisor: 0.0009144,
  },
  nk: {
    label: "noeud",
    info: "les noeuds, aussi appelés noeuds nautiques, sont utilisés aussi bien dans le domaine maritime qu'aéronautique.",
    divisor: 1.852,
  },
  usain_bolt: {
    info: "vitesse maximale d'Usain Bolt lors de son record du 100m le 16/08/2009 à Berlin (<a href='https://www.leparisien.fr/sports/usain-bolt-l-homme-qui-court-jusqu-a-44-72-km-h-17-08-2009-609024.php' target='blank'>source</a>)",
    label: "Usain Bolt",
    divisor: 44.72,
    pluralize: false,
    not_unit: true,
  },
  autoroute_max: {
    info: "vitesse maximale, selon les données de <a href='https://fr.wikipedia.org/wiki/R%C3%A9glementation_de_la_vitesse_sur_route_en_France' target='_blank'>Wikipedia</a>.",
    label: "vitesse max autoroute",
    divisor: 130,
    pluralize: false,
    not_unit: true,
  },
  record_tgv: {
    label: "record TGV",
    info: "vitesse maximale atteinte lors d'un essai le 03/04/2007 (<a href='https://fr.wikipedia.org/wiki/Records_du_monde_de_vitesse_sur_rail_en_France' target='blank'>source</a>)",
    divisor: 574.8,
    pluralize: false,
    not_unit: true,
  },
  rafale: {
    label: "avion Rafale",
    info: "vitesse maximale, selon les données de <a href='https://fr.wikipedia.org/wiki/Dassault_Rafale' target='_blank'>Wikipedia</a>.",
    divisor: 1912,
    pluralize: false,
    not_unit: true,
  },
  sound: {
    info: "dans les conditions normales de température et de pression, soit 20°C 1013.25 hPa, selon les données de <a href='https://fr.wikipedia.org/wiki/Vitesse_du_son#Exemples' target='_blank'>Wikipedia</a>.",
    label: "vitesse du son",
    divisor: 1236.6,
    pluralize: false,
    not_unit: true,
  },
  BMG50: {
    label: "balle .50 BMG",
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/12,7_%C3%97_99_mm_OTAN" target="_blank">Wikipedia</a>.',
    divisor: 3348,
    pluralize: false,
    not_unit: true,
  },
  earth_rotation: {
    info: "vitesse de rotation à l'équateur, selon les données de <a href='https://fr.wikipedia.org/wiki/Rotation_de_la_Terre' target='_blank'>Wikipedia</a>.",
    label: "rotation de la Terre",
    divisor: 1674.36,
    pluralize: false,
    not_unit: true,
  },
  earth_revolution: {
    info: "vitesse moyenne, selon les données de <a href='https://fr.wikipedia.org/wiki/Orbite_de_la_Terre' target='_blank'>Wikipedia</a>.",
    label: "révolution de la Terre",
    divisor: 107208,
    pluralize: false,
    not_unit: true,
  },
  parker_solar_probe: {
    info: "vitesse maximale atteinte lors de l'approche la plus courte, d'après la <a href='https://blogs.nasa.gov/parkersolarprobe/2025/03/25/nasas-parker-solar-probe-completes-23rd-close-approach-to-sun/' target='blank'>NASA</a>)",
    label: "sonde Parker Solar",
    divisor: 692000,
    pluralize: false,
    not_unit: true,
  },
  light: {
    info: "vitesse de la lumière dans le vide",
    label: "vitesse de la lumière",
    divisor: 1079252848.8,
    pluralize: false,
    not_unit: true,
  },
}

export default speed

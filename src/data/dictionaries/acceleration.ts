const acceleration = {
  infos: {
    label:
      "accélération de surface pour les planètes selon les données de <a href='https://fr.wikipedia.org/wiki/Gravit%C3%A9_de_surface' target='_blank'>Wikipedia</a>.",
    divisor: 999999999,
    pluralize: false,
  },
  ms2: {
    label: "m/s²",
    divisor: 1,
  },
  mmin2: {
    label: "m/min²",
    divisor: 1 / 3600,
  },
  mh2: {
    label: "m/h²",
    divisor: 1 / 12960000,
  },
  kms2: {
    label: "km/s²",
    divisor: 1000,
  },
  kmmin2: {
    label: "km/min²",
    divisor: 1 / 3.6,
  },
  kmh2: {
    label: "km/h²",
    divisor: 1 / 12960,
  },
  g_earth: {
    label: "Terre (g)",
    divisor: 9.81,
  },
  g_moon: {
    label: "Lune (g)",
    divisor: 1.63,
  },
  g_sun: {
    label: "Soleil (g)",
    divisor: 273.95,
  },
  g_mercury: {
    label: "Mercure (g)",
    divisor: 3.701,
  },
  g_venus: {
    label: "Vénus (g)",
    divisor: 8.87,
  },
  g_mars: {
    label: "Mars (g)",
    divisor: 3.711,
  },
  g_jupiter: {
    label: "Jupiter (g)",
    divisor: 24.796,
  },
  g_saturn: {
    label: "Saturne (g)",
    divisor: 10.44,
  },
  g_uranus: {
    label: "Uranus (g)",
    divisor: 8.87,
  },
  g_neptun: {
    label: "Neptune (g)",
    divisor: 11.15,
  },
}

export default acceleration

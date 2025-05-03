const astronomy = {
  custom: true,
  infos: {
    label:
      "selon les données de Wikipedia (<a href='https://fr.wikipedia.org/wiki/Syst%C3%A8me_solaire' target='_blank'>planètes</a> et <a href='https://fr.wikipedia.org/wiki/Liste_d%27%C3%A9toiles_par_taille_d%C3%A9croissante' target='_blank'>étoiles</a>)",
  },
  planets: {
    sun: {
      label: "Soleil",
      diameter: 1392684,
      distance: 0,
    },
    mercury: {
      label: "Mercure",
      diameter: 4879.4,
      distance: 57909050,
    },
    venus: {
      label: "Vénus",
      diameter: 12103.6,
      distance: 108209500,
    },
    earth: {
      label: "Terre",
      diameter: 12756.274,
      distance: 149597870.7,
    },
    mars: {
      label: "Mars",
      diameter: 6792.4,
      distance: 227944000,
    },
    jupiter: {
      label: "Jupiter",
      diameter: 142984,
      distance: 778340000,
    },
    saturn: {
      label: "Saturne",
      diameter: 120536,
      distance: 1426700000,
    },
    uranus: {
      label: "Uranus",
      diameter: 51118,
      distance: 2870700000,
    },
    neptun: {
      label: "Neptune",
      diameter: 49528,
      distance: 4498400000,
    },
    pluto: {
      label: "Pluton",
      diameter: 2376.6,
      distance: 5900898440.583108,
    },
    proxima: {
      label: "Proxima du Centaure",
      diameter: 107280,
      distance: 299792.458 * 86400 * 365 * 4.244,
    },
    // Sirius: {
    //   label: "Sirius",
    //   diameter: 1.7144 * (1392684 / 2),
    //   distance: 299792.458 * 86400 * 365 * 8.601,
    // },
    Aldebaran: {
      label: "Aldébaran",
      diameter: 45.1 * (1392684 / 2),
      distance: 299792.458 * 86400 * 365 * 66.6,
    },
    Betelgeuse: {
      label: "Bételgeuse",
      diameter: 1077.5 * (1392684 / 2),
      distance: 299792.458 * 86400 * 365 * 643,
    },
    // Rigel: {
    //   label: "Rigel",
    //   diameter: 78.9 * (1392684 / 2),
    //   distance: 299792.458 * 86400 * 365 * 863,
    // },
    UY_Scuti: {
      label: "UY Scuti",
      diameter: 1708 * (1392684 / 2),
      distance: 299792.458 * 86400 * 365 * 5871,
    },
    Stephenson_2_18: {
      label: "Stephenson 2-18",
      diameter: 2150 * (1392684 / 2),
      distance: 299792.458 * 86400 * 365 * 18700,
    },
  },
}

export default astronomy

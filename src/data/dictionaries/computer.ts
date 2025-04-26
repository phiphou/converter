const computer = {
  infos: {
    label:
      "Bien qu'il existe des <a href='https://fr.wikipedia.org/wiki/Pr%C3%A9fixe_binaire' target='_blank'>préfixes binaires</a>, spécialement conçus pour l'informatique, ceux-ci ne sont presque pas utilisés, c'est pourquoi les préfixes montrés ici sont les préfixes usuels (industrie, informaticiens, presse spécialisée, etc.).<br><br>Notez aussi que lorsqu'un fabricant indique 1To, par exemple pour un disque dur, cela signifie en réalité que le disque a une capacité de 1000 milliards d'octet, et non pas 1099.51 milliards d'octet. Pour cette raison, l'ordinateur sur lequel il est installé indiquera une capacité de 931Go, et non pas 1To.",

    divisor: 999999999,
    pluralize: false,
  },
  bit: {
    label: "bit",
    divisor: 1,
  },
  octet: {
    label: "octet",
    divisor: 8,
  },
  byte: {
    label: "byte",
    divisor: 8,
  },
  kb: {
    label: "kilo-bit",
    divisor: 1 * 1024,
  },
  ko: {
    label: "kilo-octet",
    divisor: 8 * 1024,
  },
  kB: {
    label: "kilo-byte",
    divisor: 8 * 1024,
  },
  Mb: {
    label: "mega-bit",
    divisor: 1 * 1024 * 1024,
  },
  Mo: {
    info: "avec un mega-octet (1Mo), on peut par exemple stocker un document texte (sans image) de près de 7000 pages A4 ou bien une photo de 1 MegaPixel dans une bonne qualité (avec compression).",
    label: "mega-octet",
    divisor: 8 * 1024 * 1024,
  },
  MB: {
    info: "avec un mega-byte (1MB), on peut par exemple stocker un document texte (sans image) de près de 7000 pages A4 ou bien une photo de 1 MegaPixel dans une bonne qualité (avec compression).",
    label: "mega-byte",
    divisor: 8 * 1024 * 1024,
  },
  Gb: {
    label: "giga-bit",
    divisor: 1 * 1024 * 1024 * 1024,
  },
  Go: {
    label: "giga-octet",
    divisor: 8 * 1024 * 1024 * 1024,
  },
  GB: {
    label: "giga-byte",
    divisor: 8 * 1024 * 1024 * 1024,
  },
  Tb: {
    label: "tera-bit",
    divisor: 1 * 1024 * 1024 * 1024 * 1024,
  },
  To: {
    label: "tera-octet",
    divisor: 8 * 1024 * 1024 * 1024 * 1024,
  },
  TB: {
    label: "tera-byte",
    divisor: 8 * 1024 * 1024 * 1024 * 1024,
  },
  Pb: {
    label: "peta-bit",
    divisor: 1 * 1024 * 1024 * 1024 * 1024 * 1024,
  },
  Po: {
    label: "peta-octet",
    divisor: 8 * 1024 * 1024 * 1024 * 1024 * 1024,
  },
  PB: {
    label: "peta-byte",
    divisor: 8 * 1024 * 1024 * 1024 * 1024 * 1024,
  },
  Eb: {
    label: "exa-bit",
    divisor: 1 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
  },
  Eo: {
    label: "exa-octet",
    divisor: 8 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
  },
  EB: {
    label: "exa-byte",
    divisor: 8 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
  },
  Zb: {
    label: "zeta-bit",
    divisor: 1 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
  },
  Zo: {
    label: "zeta-octet",
    divisor: 8 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
  },
  ZB: {
    label: "zeta-byte",
    divisor: 8 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
  },
  war_peace: {
    info: "le livre au format ePub (pour liseuses)",
    label: "Guerre et Paix",
    divisor: 1557 * 8 * 1024,
    pluralize: false,
    not_unit: true,
  },
  mp3_minute: {
    info: "avec un encodage en 128kb/s",
    label: "minute de musique en MP3",
    divisor: 960 * 8 * 1024,
    pluralize: false,
    not_unit: true,
  },
  jpg_12Mpx: {
    info: "moyenne sur 100 photos variées en JPEG sur un Samsung Galaxy S23.",
    label: "photo de 12MPx en JPEG ",
    divisor: 3.53 * 8 * 1024 * 1024,
    pluralize: false,
    not_unit: true,
  },
  heic_12Mpx: {
    info: "moyenne sur 100 photos variées en HEIC sur un Samsung Galaxy S23.",
    label: "photo de 12MPx en HEIC",
    divisor: 1.9 * 8 * 1024 * 1024,
    pluralize: false,
    not_unit: true,
  },
  wikipedia_fr: {
    label: "Wikipedia en français sans image",
    divisor: 17.33 * 8 * 1024 * 1024 * 1024,
    not_unit: true,
  },
  wikipedia_fr_images: {
    label: "Wikipedia en français avec images",
    divisor: 36.97 * 8 * 1024 * 1024 * 1024,
    not_unit: true,
  },
  h265_4k_10Mbs: {
    label: "heure de vidéo 4k H265 10Mb/s",
    divisor: 4.5 * 8 * 1024 * 1024 * 1024,
    not_unit: true,
  },
  s23_4k_488Mbs: {
    info: "test réalisés sur un Samsung Galaxy S23.",
    label: "heure de vidéo 4k H265 60fps",
    divisor: 27.4219 * 8 * 1024 * 1024 * 1024,
    not_unit: true,
  },
  prores_422_hq_4k_1768Mbs: {
    label: "heure de vidéo 4k ProRes 60fps 422 HQ",
    divisor: 798 * 8 * 1024 * 1024 * 1024,
    not_unit: true,
  },
}

export default computer

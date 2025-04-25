const consumption = {
  wh: {
    label: "Wh",
    divisor: 1,
    pluralize: true,
  },
  kwh: {
    label: "kWh",
    divisor: 1000,
    pluralize: true,
  },
  mug: {
    info: "avec une bouilloire électrique de 1200W",
    label: "Mug d'eau bouillante",
    divisor: 40,
  },
  m3: {
    label: "heure de vidéo sur un MacBook Air m4",
    divisor: 3.59,
  },
  s25: {
    label: "recharge Samsung Galaxy S25",
    divisor: 25,
    not_unit: true,
  },
  micro_wave: {
    info: "avec un four de 900W.",
    label: "trois minutes d'un micro-ondes",
    divisor: 45,
    pluralize: false,
    not_unit: true,
  },
  dishwasher: {
    label: "cycle de lave-vaisselle.",
    divisor: 1150,
    not_unit: true,
  },
  washing_machine: {
    label: "cycle de lave-linge classe B.",
    divisor: 520,
    not_unit: true,
  },
  bifsteak: {
    info: "avec un four de 2500W, hors préchaufage.",
    label: "Roti de 1kg 30min au four à 220°",
    divisor: 850,
    pluralize: false,
    not_unit: true,
  },
}

export default consumption

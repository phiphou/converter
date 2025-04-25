const CO2 = {
  infos: {
    label:
      "d'après les données de <a href='https://www.electricitymaps.com/' target='_blank' >Electricity Maps</a>, calculées pour la France.",
    divisor: 999999999,
    pluralize: false,
  },
  of: {label: "avec ", divisor: 0},
  materials: {
    coal: {label: "charbon", divisor: 0.983, quote: "du"},
    gas: {label: "gaz", divisor: 0.512, quote: "du"},
    oil: {label: "fioul", divisor: 0.901, quote: "du"},
    nuclear: {label: "nucléaire", divisor: 0.005, quote: "du"},
    wind: {label: "éolien", divisor: 0.013, quote: "de l'"},
    solar: {label: "solaire", divisor: 0.03, quote: "du"},
    hydro: {label: "hydro-électricité", divisor: 0.011, quote: "de l'"},
    geothermy: {label: "géothermie", divisor: 0.038, quote: "de la"},
    biomass: {label: "biomasse", divisor: 0.23, quote: "de la"},
  },
  mWh: {
    label: "mWh",
    divisor: 0.001,
    pluralize: true,
  },
  Wh: {
    label: "Wh",
    divisor: 1,
    pluralize: true,
  },
  kWh: {
    label: "kWh",
    divisor: 1000,
    pluralize: true,
  },
  MWh: {
    label: "MWh",
    divisor: 1000000,
  },
  g: {
    label: "gramme de CO2",
    divisor: 1,
  },
  kg: {
    label: "kilogramme de CO2",
    divisor: 1000,
  },
  t: {
    label: "tonne de CO2",
    divisor: 1000000,
  },
}

export default CO2

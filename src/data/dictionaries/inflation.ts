import inflation_converter from "../../converters/inflation_converter"

const inflation = {
  custom: "inflation",
  infos: {
    label: "données de l'<a href='https://www.insee.fr/fr/statistiques/serie/010605954' target='_blank'>INSEE</a>.",
  },
  base: {
    label: "base",
    converter: inflation_converter,
    pluralize: true,
  },
}

export default inflation

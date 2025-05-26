import inflation_converter from "../../converters/inflation_converter"

const inflation = {
  custom: "inflation",
  infos: {
    label:
      "données de l'<a href='https://www.insee.fr/fr/statistiques/serie/010605954' target='_blank'>INSEE</a> pour le Franc et l'Euro, et de <a href='https://www.usinflationcalculator.com/' target='_blank'>usinflationcalculator.com</a> pour le dollar.",
  },
  base: {
    label: "base",
    converter: inflation_converter,
    pluralize: true,
  },
}

export default inflation

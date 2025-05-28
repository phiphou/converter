import inflation_converter from "../../converters/inflation_converter"

const inflation = {
  custom: "inflation",
  infos: {
    label:
      "données de l'<a href='https://www.insee.fr/fr/statistiques/serie/010605954' target='_blank'>INSEE</a> pour le Franc et l'Euro, et de <a href='https://www.usinflationcalculator.com/' target='_blank'>usinflationcalculator.com</a> pour le dollar.<br><br>Pour les conversions entre dollar et euro (ou Franc ou ancien Franc) (et inversement), le taux de change est pris en compte (taux moyen sur l'année).<br><br>Pour ces conversions, l'inflation est calculée sur la monnaie de départ, et le taux de change est appliqué à la monnaie de destination.",
  },
  base: {
    label: "base",
    converter: inflation_converter,
    pluralize: true,
  },
}

export default inflation

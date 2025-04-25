const volume = {
  microliter: {
    label: "microlitre",
    divisor: 0.000000001,
  },
  milliliter: {
    label: "millilitre",
    divisor: 0.000001,
  },
  centiliter: {
    label: "centilitre",
    divisor: 0.00001,
  },
  deciliter: {
    label: "décilitre",
    divisor: 0.0001,
  },
  liter: {
    label: "litre",
    divisor: 0.001,
  },
  cubic_meter: {
    label: "mètre cube",
    divisor: 1,
  },
  wine_bottle: {
    info: 'volume moyen selon <a href="https://fr.wikipedia.org/wiki/Bouteille_de_vin" target="_blank">Wikipedia</a>.',
    label: "bouteille de vin",
    divisor: 0.00075,
  },
  gallon: {
    label: "gallon",
    divisor: 0.003785,
    pluralize: false,
  },
  bathtub: {
    info: 'volume moyen selon <a href="https://isi-sanitaire.fr/blog/astuces_conseils_tutos/litres-eau-pour-remplir-une-baignoire/" target="_blank">isi-sanitaire</a>.',
    label: "baignoire",
    divisor: 0.155,
    not_unit: true,
  },
  shower: {
    info: 'volume moyen selon <a href="https://ekwateur.fr/blog/ma-consommation-d-energie/consommation-douche/" target="_blank">ekwateur</a>.',
    label: "douche de 5 minutes",
    divisor: 0.12,
    not_unit: true,
  },
  shower2: {
    info: 'volume moyen selon <a href="https://ekwateur.fr/blog/ma-consommation-d-energie/consommation-douche/" target="_blank">ekwateur</a>.',
    label: "douche de 10 minutes",
    divisor: 0.2,
    not_unit: true,
  },
  oil_barrel: {
    info: 'volume selon <a href="https://fr.wikipedia.org/wiki/Baril" target="_blank">Wikipedia</a>.',
    label: "baril de pétrole",
    divisor: 0.158987294928,
  },
  berlingo: {
    info: 'volume utile selon le <a href="https://www.citroen.fr/vehicules/utility/Nouveau-Berlingo-Van.html" target="_blank">constructeur</a>.',
    label: "Citroën Berlingo Van M",
    divisor: 3.3,
    pluralize: false,
    not_unit: true,
  },
  olympic_swimming_pool: {
    info: "pour une piscine de 50x25x2m",
    label: "piscine olympique",
    divisor: 2500,
    pluralize_all: true,
    not_unit: true,
  },
  kheops_pyramid: {
    info: 'volume selon <a href="https://fr.wikipedia.org/wiki/Pyramide_de_Kh%C3%A9ops" target="_blank">Wikipedia</a>.',
    label: "pyramide de Kheops",
    divisor: 2592341,
    not_unit: true,
  },
  anecy_lake: {
    info: 'volume selon <a href="https://fr.wikipedia.org/wiki/Lac_d%27Annecy" target="_blank">Wikipedia</a>.',
    label: "lac d'Annecy",
    divisor: 1124500000,
    pluralize: false,
    not_unit: true,
  },
  leman_lake: {
    info: 'volume selon <a href="https://fr.wikipedia.org/wiki/L%C3%A9man" target="_blank">Wikipedia</a>.',
    label: "lac Léman",
    divisor: 89000000000,
    pluralize: false,
    not_unit: true,
  },
  france_water: {
    info: 'volume selon <a href="https://fr.wikipedia.org/wiki/Eau_en_France" target="_blank">Wikipedia</a>.',
    label: "Pluie par an en France",
    divisor: 512000000000,
    pluralize: false,
    not_unit: true,
  },
  mediterranean_sea: {
    info: 'volume selon <a href="https://fr.wikipedia.org/wiki/Mer_M%C3%A9diterran%C3%A9e" target="_blank">Wikipedia</a>.',
    label: "Mer Méditerranée",
    divisor: 3765000000000000,
    pluralize: false,
    not_unit: true,
  },
}

export default volume

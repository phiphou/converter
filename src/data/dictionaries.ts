import {temp_converter} from "../converters/temp_converter"
import {hms_formater} from "../formaters/hms_formater"
import {ymd_formater} from "../formaters/ymd_formater"

export const dictionaries = {
  volume: {
    microliter: {
      label: "microlitre",
      divisor: 0.000000001,
      pluralize: true,
    },
    mililiter: {
      label: "mililitre",
      divisor: 0.000001,
      pluralize: true,
    },
    centiliter: {
      label: "centilitre",
      divisor: 0.00001,
      pluralize: true,
    },
    deciliter: {
      label: "décilitre",
      divisor: 0.0001,
      pluralize: true,
    },
    liter: {
      label: "litre",
      divisor: 0.001,
      pluralize: true,
    },
    cubic_meter: {
      label: "mètre cube",
      divisor: 1,
      pluralize: true,
    },
    vine_bottle: {
      label: "bouteille de vin",
      divisor: 0.00075,
      pluralize: true,
    },
    gallon: {
      label: "gallon",
      divisor: 0.003785,
      pluralize: false,
    },
    bathtub: {
      info: 'volume moyen selon <a href="https://isi-sanitaire.fr/blog/astuces_conseils_tutos/litres-eau-pour-remplir-une-baignoire/" target="_blank">isi-sanitaire</a>',
      label: "baignoire",
      divisor: 0.155,
      pluralize: true,
    },
    shower: {
      info: 'volume moyen selon <a href="https://ekwateur.fr/blog/ma-consommation-d-energie/consommation-douche/" target="_blank">ekwateur</a>',
      label: "douche de 5 minutes",
      divisor: 0.12,
      pluralize: true,
    },
    shower2: {
      info: 'volume moyen selon <a href="https://ekwateur.fr/blog/ma-consommation-d-energie/consommation-douche/" target="_blank">ekwateur</a>',
      label: "douche de 10 minutes",
      divisor: 0.2,
      pluralize: true,
    },
    oil_barrel: {
      label: "baril de pétrole",
      divisor: 0.159,
      pluralize: true,
    },
    berlingo: {
      info: 'volume utile selon le <a href="https://www.citroen.fr/vehicules/utility/Nouveau-Berlingo-Van.html" target="_blank">constructeur</a>',
      label: "Citroën Berlingo Van M",
      divisor: 3.3,
      pluralize: false,
    },
    olympic_swimming_pool: {
      info: "pour une piscine de 50x25x2m",
      label: "piscine olympique",
      divisor: 2500,
      pluralize_all: true,
    },
    kheops_pyramid: {
      label: "pyramide de Kheops",
      divisor: 2592341,
      pluralize: true,
    },
    anecy_lake: {
      label: "lac d'Annecy",
      divisor: 1124000000,
      pluralize: false,
    },
    leman_lake: {
      label: "lac Léman",
      divisor: 89000000000,
      pluralize: false,
    },
    france_water: {
      label: "Pluie par an en France",
      divisor: 510000000000,
      pluralize: false,
    },
    mediterranean_sea: {
      label: "Mer Méditerranée",
      divisor: 3765000000000000,
      pluralize: false,
    },
  },
  masse: {
    microgram: {
      label: "microgramme",
      divisor: 0.000000000001,
      pluralize: true,
    },
    miligram: {
      label: "miligramme",
      divisor: 0.000000001,
      pluralize: true,
    },
    gram: {
      label: "gramme",
      divisor: 0.000001,
      pluralize: true,
    },
    kilogram: {
      label: "kilogramme",
      divisor: 0.001,
      pluralize: true,
    },
    tons: {
      label: "tonne",
      divisor: 1,
      pluralize: true,
    },
    oz: {
      label: "once anglo-saxone",
      divisor: 0.00002835,
      pluralize: true,
    },
    ozt: {
      label: "once troy",
      divisor: 0.0000311034768,
      pluralize: true,
    },
    lb: {
      label: "livre",
      divisor: 0.00045359237,
      pluralize: true,
    },
    one_euro_cent: {
      label: "pièce de 1 centime d'euro",
      divisor: 0.0000023,
      pluralize: true,
    },
    two_euro_cent: {
      label: "pièce de 2 centimes d'euro",
      divisor: 0.00000306,
      pluralize: true,
    },
    five_euro_cent: {
      label: "pièce de 5 centimes d'euro",
      divisor: 0.00000392,
      pluralize: true,
    },
    ten_euro_cent: {
      label: "pièce de 10 centimes d'euro",
      divisor: 0.0000041,
      pluralize: true,
    },
    twenty_euro_cent: {
      label: "pièce de 20 centimes d'euro",
      divisor: 0.00000574,
      pluralize: true,
    },
    fifty_euro_cent: {
      label: "pièce de 50 centimes d'euro",
      divisor: 0.0000078,
      pluralize: true,
    },
    one_euro: {
      label: "pièce de un euro",
      divisor: 0.0000075,
      pluralize: true,
    },
    two_euro: {
      label: "pièce de deux euros",
      divisor: 0.0000085,
      pluralize: true,
    },
    rice_grain: {
      label: "grain de riz",
      divisor: 0.0000003014,
      pluralize: true,
    },
    ping_pong_ball: {
      info: "moyenne des limites réglementaires",
      label: "balle de ping-pong",
      divisor: 0.0000027,
      pluralize: true,
    },
    tennis_ball: {
      info: "moyenne des limites réglementaires",
      label: "balle de tennis",
      divisor: 0.0000577,
      pluralize: true,
    },
    volley_ball: {
      info: "moyenne des limites réglementaires",
      label: "ballon de volleyball",
      divisor: 0.00027,
      pluralize: true,
    },
    hand_ball: {
      info: "moyenne des limites réglementaires",
      label: "ballon de handball",
      divisor: 0.00045,
      pluralize: true,
    },
    foot_ball: {
      info: "moyenne des limites réglementaires",
      label: "ballon de foot",
      divisor: 0.00043,
      pluralize: true,
    },
    basket_ball: {
      info: "moyenne des limites réglementaires",
      label: "ballon de basket",
      divisor: 0.00065,
      pluralize: true,
    },
    petanque_ball: {
      info: "moyenne des limites réglementaires",
      label: "boule de pétanque",
      divisor: 0.0008,
      pluralize: true,
    },
    oak_stere: {
      info: "pour un bois de chauffage sec (20% d'humidité)",
      label: "stère de chêne",
      divisor: 0.44,
      pluralize: true,
    },
    twingo: {
      info: 'masse à vide, selon les données de <a href="https://fr.wikipedia.org/wiki/Renault_Twingo_III" target="_blank">Wikipédia</a>',
      label: "Renault Twingo 3",
      divisor: 0.864,
      pluralize: false,
    },
    tesla_s: {
      info: 'masse à vide, selon les données du <a href="https://www.tesla.com/fr_fr/models" target="_blank">constructeur</a>',
      label: "Tesla model S",
      divisor: 2.068,
      pluralize: false,
    },
    grizzli_bear: {
      label: "ours Grizzli",
      divisor: 0.27,
      pluralize: false,
    },
    polar_bear: {
      label: "ours polaire",
      divisor: 0.45,
      pluralize: false,
    },
    male_white_shark: {
      label: "requin blanc femelle",
      divisor: 1.325,
      pluralize: true,
    },
    male_hippopotamus: {
      info: 'poids moyen d\'un hippopotame mâle selon les données de <a href="https://fr.wikipedia.org/wiki/Hippopotamus_amphibius" target="_blank">Wikipédia</a>',
      label: "hippopotame",
      divisor: 1.5,
      pluralize: true,
    },
    african_elephant: {
      label: "éléphant d'Afrique mâle",
      divisor: 6,
      pluralize: true,
    },
    titanic: {
      label: "Titanic",
      divisor: 52310,
      pluralize: false,
    },
    USS_Gerald_Ford: {
      label: "USS Gerald R. Ford",
      divisor: 112000,
      pluralize: false,
    },
    a380: {
      info: "masse à vide",
      label: "Airbus A380",
      divisor: 276.8,
      pluralize: false,
    },
    leclerc_tank: {
      info: "masse à vide",
      label: "char Leclerc",
      divisor: 56,
      pluralize: true,
    },
    eiffel_tower: {
      info: "avec fondations",
      label: "Tour Eiffel",
      divisor: 10100,
      pluralize: false,
    },
    triumph_arch: {
      label: "Arc de triomphe",
      divisor: 50000,
      pluralize: false,
    },
    gizeh_pyramid: {
      label: "pyramide de Gizeh",
      divisor: 5750000,
      pluralize: true,
    },
  },
  surface: {
    mm2: {
      label: "milimètre carré",
      divisor: 0.00000001,
      pluralize_all: true,
    },
    cm2: {
      label: "centimètre carré",
      divisor: 0.000001,
      pluralize_all: true,
    },
    sqft: {
      label: "pied carré",
      divisor: 0.0009290304,
      pluralize_all: true,
    },
    m2: {
      label: "mètre carré",
      divisor: 0.01,
      pluralize_all: true,
    },
    a: {
      label: "are",
      divisor: 1,
      pluralize: true,
    },
    ha: {
      label: "hectare",
      divisor: 100,
      pluralize: true,
    },
    acre: {
      label: "acre",
      divisor: 40.4686,
      pluralize: true,
    },
    km2: {
      label: "kilomètre carré",
      divisor: 10000,
      pluralize_all: true,
    },
    a5: {
      label: "feuille A5",
      divisor: 0.00003108,
      pluralize: true,
    },
    a4: {
      label: "feuille A4",
      divisor: 0.0006237,
      pluralize: true,
    },
    a3: {
      label: "feuille A3",
      divisor: 0.0012474,
      pluralize: true,
    },
    ping_pong_table: {
      info: 'surface officielle, selon les <a href="https://documents.ittf.sport/sites/default/files/public/2021-04/2020ITTFHandbook.pdf" target="_blank">règles de l\'ITTF</a> (en anglais, page 34 du document)',
      label: "table de ping-pong",
      divisor: 0.041785,
      pluralize: true,
    },
    tennis_field: {
      label: "terrain de tennis",
      divisor: 2.607569,
      pluralize: true,
    },
    basket_field: {
      label: "terrain de basket",
      divisor: 4.36626,
      pluralize: true,
    },
    handball_field: {
      label: "terrain de handball",
      divisor: 8,
      pluralize: true,
    },
    rugby_field: {
      label: "terrain de rugby",
      divisor: 67.275,
      pluralize: true,
    },
    football_field: {
      label: "terrain de football",
      divisor: 71.4,
      pluralize: true,
    },
    wind_turbine: {
      info: "emprise totale pour une éolienne terrestre de 2MW",
      label: "éolienne",
      divisor: 20,
      pluralize: false,
    },
    notre_dame_de_paris: {
      info: 'superficie totale du site, selon les données de <a href="https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame_de_Paris" target="_blank">Wikipédia</a>',
      label: "Notre-Dame de Paris",
      divisor: 55,
      pluralize: false,
    },
    republic_place: {
      info: 'superficie totale du site, selon les données de <a href="https://fr.wikipedia.org/wiki/Place_de_la_R%C3%A9publique_(Paris)" target="_blank">Wikipédia</a>',
      label: "Place de la République (Paris)",
      divisor: 336.77,
      pluralize: false,
    },
    kheops_pyramid: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Pyramide_de_Kh%C3%A9ops" target="_blank">Wikipédia</a>',
      label: "pyramide de Khéops",
      divisor: 530.3809,
      pluralize: false,
    },
    versailles: {
      info: 'superficie totale du site, selon les données de <a href="https://fr.wikipedia.org/wiki/Parc_de_Versailles" target="_blank">Wikipédia</a>',
      label: "Château de Versailles",
      divisor: 107000,
      pluralize: false,
    },
    paris: {
      label: "Paris",
      divisor: 1054000,
      pluralize: false,
    },
    idf: {
      info: 'superficie totale, selon les données de <a href="https://fr.wikipedia.org/wiki/%C3%8Ele-de-France" target="_blank">Wikipédia</a>',
      label: "Région ïle-de-France",
      divisor: 120110000,
      pluralize: false,
    },
    france: {
      label: "France métropolitaine",
      divisor: 5516950000,
      pluralize: false,
    },
    africa: {
      info: 'superficie totale du continent, selon les données de <a href="https://fr.wikipedia.org/wiki/Afrique" target="_blank">Wikipédia</a>',
      label: "continent africain",
      divisor: 304158730000,
      pluralize: false,
    },
    earth_lands: {
      info: 'superficie totale des terres émergées de la planète, selon les données de <a href="https://fr.wikipedia.org/wiki/Terre_%C3%A9merg%C3%A9e" target="_blank">Wikipédia</a>',
      label: "terres émergées sur Terre",
      divisor: 1480000000000,
      pluralize: false,
    },
  },
  longueur: {
    nanom: {
      label: "nanomètre",
      divisor: 0.000000000001,
      pluralize: true,
    },
    micron: {
      label: "micromètre",
      divisor: 0.000000001,
      pluralize: true,
    },
    mm: {
      label: "milimètre",
      divisor: 0.000001,
      pluralize: true,
    },
    cm: {
      label: "centimètre",
      divisor: 0.00001,
      pluralize: true,
    },
    inch: {
      label: "pouce",
      divisor: 0.0000254,
      pluralize: true,
    },
    dm: {
      label: "décimètre",
      divisor: 0.0001,
      pluralize: true,
    },
    foot: {
      label: "pied",
      divisor: 0.0003048,
      pluralize: true,
    },
    footardt: {
      label: "yard",
      divisor: 0.0009144,
      pluralize: true,
    },
    m: {
      label: "mètre",
      divisor: 0.001,
      pluralize: true,
    },
    km: {
      label: "kilomètre",
      divisor: 1,
      pluralize: true,
    },
    mile: {
      label: "mile",
      divisor: 1.609344,
      pluralize: true,
    },
    nm: {
      label: "mile nautique",
      divisor: 1.852,
      pluralize_all: true,
    },
    au: {
      label: "unité astronomique",
      divisor: 149597870.7,
      pluralize_all: true,
    },
    pc: {
      label: "parsec",
      divisor: 30856775810000,
      pluralize: true,
    },
    ly: {
      label: "année lumière",
      divisor: 9453939595488,
      pluralize: true,
    },
    red_cell: {
      info: 'diamètre moyen selon les données de <a href="https://fr.wikipedia.org/wiki/%C3%89rythrocyte" target="_blank">Wikipédia</a>',
      label: "globule rouge",
      divisor: 0.0000000072,
      pluralize_all: true,
    },
    white_cell: {
      info: 'diamètre moyenne selon les données de <a href="https://fr.wikipedia.org/wiki/Leucocyte" target="_blank">Wikipédia</a>',
      label: "globule blanc",
      divisor: 0.000000012,
      pluralize_all: true,
    },
    fine_sand: {
      label: "grain de sable fin (diamètre)",
      divisor: 0.000000188,
      pluralize: true,
    },
    london_bus: {
      info: 'taille des nouveaux Wrightbus New Routemaster en service depuis 2012, selon les données de <a href="https://fr.wikipedia.org/wiki/Wrightbus_New_Routemaster" target="_blank">Wikipédia</a>',
      label: "bus londonien",
      divisor: 0.01123,
      pluralize: false,
    },
    eiffel_tower: {
      info: 'hauteur totale, avec l\'antenne, selon les données de <a href="https://fr.wikipedia.org/wiki/Tour_Eiffel" target="_blank">Wikipédia</a>',
      label: "tour Eiffel",
      divisor: 0.33,
      pluralize: true,
    },
    stadium: {
      label: "piste olympique",
      divisor: 0.4,
      pluralize: true,
    },
    bastille_republic: {
      info: 'trajet à pieds, selon les données de <a href="https://maps.app.goo.gl/3wmcZh84Ph3g4MbG8" target="_blank">Google Maps</a>',
      label: "Bastille - République",
      divisor: 1.63,
      pluralize: false,
    },
    nation_republic: {
      info: 'trajet à pieds, selon les données de <a href="https://maps.app.goo.gl/ecKyGVoB4MeR13g78" target="_blank">Google Maps</a>',
      label: "Nation - République",
      divisor: 3.03,
      pluralize: false,
    },
    marathon: {
      label: "marathon",
      divisor: 42.195,
      pluralize: true,
    },
    paris_marseille: {
      info: 'trajet le plus court par la route, selon les données de <a href="https://maps.app.goo.gl/Ei4d2gyrXUojyBYM7" target="_blank">Google Maps</a>',
      label: "Paris - Marseille",
      divisor: 800,
      pluralize: false,
    },
    perpignan_dunkerque: {
      info: 'trajet le plus court par la route, selon les données de <a href="https://maps.app.goo.gl/xno6P4iJf4fRDxoa7" target="_blank">Google Maps</a>',
      label: "Perpignan - Dunkerque",
      divisor: 1138,
      pluralize: false,
    },
    paris_nyc: {
      info: 'trajet le plus court à vol d\'oiseau, selon les données de <a href="https://fr.distance.to/Paris,%C3%8Ele-de-France,FRA/New-York,NY,USA-(New-York-County)" target="_blank">fr.distance.to</a>',
      label: "Paris - New-York",
      divisor: 5828.96,
      pluralize: false,
    },
    paris_sydney: {
      info: 'trajet le plus court à vol d\'oiseau, selon les données de <a href="https://fr.distance.to/Paris,%C3%8Ele-de-France,FRA/Sydney,New-South-Wales,AUS" target="_blank">fr.distance.to</a>',
      label: "Paris - Sydney",
      divisor: 16960.01,
      pluralize: false,
    },
    moon: {
      label: "Terre - Lune",
      divisor: 384400,
      pluralize: false,
    },
    saturn: {
      label: "Soleil - Saturne",
      divisor: 1426700000,
      pluralize: false,
    },
    alpha_centauri: {
      label: "Soleil - Alpha du Centaure",
      divisor: 40122519643251.07,
      pluralize: false,
    },
  },
  énergie: {
    wh: {
      label: "Wh",
      divisor: 1,
      pluralize: false,
    },
    kwh: {
      label: "kWh",
      divisor: 1000,
      pluralize: false,
    },
    mug: {
      info: "avec une bouilloire électrique de 1200W",
      label: "Mug d'eau bouillante",
      divisor: 40,
      pluralize: true,
    },
    m3: {
      label: "heure de vidéo sur un MacBook Air m4",
      divisor: 3.59,
      pluralize: true,
    },
    s25: {
      label: "recharge Samsung Galaxy S25",
      divisor: 25,
      pluralize: true,
    },
    micro_wave: {
      label: "3 minutes d'un micro-ondes de 900W",
      divisor: 45,
      pluralize: false,
    },
    dishwasher: {
      label: "cycle de lave-vaisselle",
      divisor: 1150,
      pluralize: true,
    },
    lwashing_machine: {
      label: "cycle de lave-linge classe B",
      divisor: 520,
      pluralize: true,
    },
    bifsteak: {
      info: "avec un four de 2500W, hors préchaufage",
      label: "Roti de 1kg 30min au four à 220°",
      divisor: 850,
      pluralize: false,
    },
  },
  durée: {
    s: {
      label: "seconde",
      divisor: 1,
      pluralize: true,
    },
    m: {
      label: "minute",
      divisor: 60,
      pluralize: true,
    },
    h: {
      label: "heure",
      divisor: 3600,
      pluralize: true,
    },
    j: {
      label: "jour",
      divisor: 86400,
      pluralize: true,
    },
    w: {
      label: "semaine",
      divisor: 604800,
      pluralize: true,
    },
    y: {
      label: "année",
      divisor: 31557600,
      pluralize: true,
    },
    hms: {
      label: "hh:mm:ss",
      divisor: 1,
      formater: hms_formater,
    },
    jmy: {
      label: "aa:mm:jj",
      divisor: 1,
      formater: ymd_formater,
    },
    H100m: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipédia</a>',
      label: "record du 100m H",
      divisor: 9.58,
      pluralize: false,
    },
    H200m: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipédia</a>',
      label: "record du 200m H",
      divisor: 19.19,
      pluralize: false,
    },
    H400m: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipédia</a>',
      label: "record du 400m H",
      divisor: 43.03,
      pluralize: false,
    },
    H800m: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipédia</a>',
      label: "record du 800m H",
      divisor: 100.91,
      pluralize: false,
    },
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipédia</a>',
    H1500m: {
      label: "record du 1500m H",
      divisor: 206,
      pluralize: false,
    },
    H3000m: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipédia</a>',
      label: "record du 3000m steeple H",
      divisor: 472.11,
      pluralize: false,
    },
    H5000m: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipédia</a>',
      label: "record du 5000m H",
      divisor: 755.36,
      pluralize: false,
    },
    H10000m: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipédia</a>',
      label: "record du 10000m H",
      divisor: 1571,
      pluralize: false,
    },
    Hmarathon: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipédia</a>',
      label: "record du Marathon H",
      divisor: 7235,
      pluralize: false,
    },
    H100km: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipédia</a>',
      label: "record du 100km H",
      divisor: 21935,
      pluralize: false,
    },
  },
  vitesse: {
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
      pluralize: true,
    },
    fs: {
      label: "pied par seconde",
      divisor: 0.0003048 / (1 / 3600),
      pluralize: true,
    },
    ys: {
      label: "yard par seconde",
      divisor: 0.0009144 / (1 / 3600),
      pluralize: true,
    },
    yh: {
      label: "yard par heure",
      divisor: 0.0009144,
      pluralize: true,
    },
    nk: {
      label: "noeud",
      info: "les noeuds, aussi appelés noeuds nautiques, sont utilisés aussi bien dans le domaine maritime qu'aéronautique.",
      divisor: 1.852,
      pluralize: true,
    },
    ussain_bolt: {
      info: "vitesse maximale d'Ussain Bolt lors de son record du 100m le 16/08/2009 à Berlin (<a href='https://www.leparisien.fr/sports/usain-bolt-l-homme-qui-court-jusqu-a-44-72-km-h-17-08-2009-609024.php' target='blank'>source</a>)",
      label: "Ussain Bolt",
      divisor: 44.72,
      pluralize: false,
    },
    autoroute_max: {
      label: "vitesse max autoroute",
      divisor: 130,
      pluralize: false,
    },
    record_tgv: {
      label: "record TGV",
      info: "vitesse maximale atteinte lors d'un essai le 03/04/2007 (<a href='https://fr.wikipedia.org/wiki/Records_du_monde_de_vitesse_sur_rail_en_France' target='blank'>source</a>)",
      divisor: 574.8,
      pluralize: false,
    },
    rafale: {
      label: "avion Rafale",
      divisor: 1389,
      pluralize: false,
    },
    sound: {
      info: "dans les conditions normales de température et de pression, soit 20°C 1013.25 hPa.",
      label: "vitesse du son",
      divisor: 1234.8,
      pluralize: false,
    },
    BMG50: {
      label: "balle .50 BMG",
      divisor: 3348,
      pluralize: false,
    },
    earth_rotation: {
      info: "vitesse de rotation à l'équateur.",
      label: "rotation de la Terre",
      divisor: 1674.36,
      pluralize: false,
    },
    earth_revolution: {
      label: "révolution de la Terre",
      divisor: 107280,
      pluralize: false,
    },
    light: {
      info: "vitesse de la lumière dans le vide",
      label: "vitesse de la lumière",
      divisor: 1079252848.8,
      pluralize: false,
    },
  },
  radioactivité: {
    infos: {
      label:
        "Pour un calcul plus précis de votre exposition annuelle aux rayonements ionisants, utilisez le simulateur de l'IRSN : <a href='https://expop.irsn.fr' target='_blank'>https://expop.irsn.fr</a>",
      divisor: 999999999,
      pluralize: false,
    },
    bq: {
      label: "Bequerel",
      divisor: 1,
      pluralize: false,
    },
    banana: {
      label: "banane",
      divisor: 19.5,
      pluralize: true,
    },
    potatoes: {
      label: "kg de pommes de terres",
      divisor: 170,
      pluralize: false,
    },
    white_bread: {
      label: "kg de pain blanc",
      divisor: 546,
      pluralize: false,
    },
    thea: {
      label: "kg de thé",
      divisor: 740,
      pluralize: false,
    },
  },
  radioactivité_2: {
    infos: {
      label:
        "Pour un calcul plus précis de votre exposition annuelle aux rayonements ionisants, utilisez le simulateur de l'IRSN : <a href='https://expop.irsn.fr' target='_blank'>https://expop.irsn.fr</a>",
      divisor: 999999999,
      pluralize: false,
    },
    banana: {
      label: "banane par jour",
      divisor: (6.2 / 1000000000) * 365 * 19.2 * 1000,
      pluralize: true,
    },
    potatoes: {
      label: "kg de choux par mois",
      divisor: (6.2 / 1000000000) * 150 * 12 * 1000,
      pluralize: false,
    },
    white_bread: {
      label: "litres de vin par semaine",
      divisor: (6.2 / 1000000000) * 35 * 12 * 1000,
      pluralize: false,
    },
    fish: {
      label: "kg de poisson par mois",
      divisor: (1.2 / 1000000) * 12 * 1000,
      pluralize: false,
    },
    thea: {
      label: "kg de thé par an",
      divisor: (6.2 / 1000000000) * 740 * 1000,
      pluralize: false,
    },
    annual_worker_max_dose: {
      label: "dose max dans le nucléaire",
      divisor: 20,
      pluralize: true,
    },
    month__astronaut: {
      label: "astronaute par mois",
      divisor: 25,
      pluralize: true,
    },
    sv: {
      label: "Sv/an",
      divisor: 1000,
      pluralize: false,
    },
    msv: {
      label: "mSv/an",
      divisor: 1,
      pluralize: false,
    },
    rem: {
      label: "rem/an",
      divisor: 10,
      pluralize: false,
    },
    mrem: {
      label: "mrem/an",
      divisor: 0.01,
      pluralize: false,
    },
  },
  température: {
    celsius: {
      label: "degré Celsius",
      divisor: 1,
      converter: temp_converter,
      pluralize: true,
    },
    fahrenheit: {
      label: "degré Fahrenheit",
      divisor: 1,
      converter: temp_converter,
      pluralize: true,
    },
    kelvin: {
      label: "Kelvin",
      divisor: 1,
      converter: temp_converter,
      pluralize: false,
    },
    réaumur: {
      label: "degré Réaumur",
      divisor: 1,
      converter: temp_converter,
      pluralize: true,
    },
  },
  informatique: {
    infos: {
      label:
        "Bien qu'il existe des <a href='https://fr.wikipedia.org/wiki/Pr%C3%A9fixe_binaire' target='_blank'>préfixes binaires</a>, spécialement conçus pour l'informatique, ceux-ci ne sont presque pas utilisés, c'est pourquoi les préfixes montrés ici sont les préfixes usuels (industrie, informaticiens, presse spécialisée, etc)",
      divisor: 999999999,
      pluralize: false,
    },
    bit: {
      label: "bit",
      divisor: 1,
      pluralize: true,
    },
    octet: {
      label: "octet",
      divisor: 8,
      pluralize: true,
    },
    byte: {
      label: "byte",
      divisor: 8,
      pluralize: true,
    },
    kb: {
      label: "kilo-bit",
      divisor: 1 * 1024,
      pluralize: true,
    },
    ko: {
      label: "kilo-octet",
      divisor: 8 * 1024,
      pluralize: true,
    },
    kB: {
      label: "kilo-byte",
      divisor: 8 * 1024,
      pluralize: true,
    },
    Mb: {
      label: "mega-bit",
      divisor: 1 * 1024 * 1024,
      pluralize: true,
    },
    Mo: {
      info: "avec un mega-octet (1Mo), on peut par exemple stocker un document texte (sans image) de près de 7000 pages A4 ou bien une photo de 1 MegaPixel dans une bonne qualité (avec compression).",
      label: "mega-octet",
      divisor: 8 * 1024 * 1024,
      pluralize: true,
    },
    MB: {
      info: "avec un mega-byte (1MB), on peut par exemple stocker un document texte (sans image) de près de 7000 pages A4 ou bien une photo de 1 MegaPixel dans une bonne qualité (avec compression).",
      label: "mega-byte",
      divisor: 8 * 1024 * 1024,
      pluralize: true,
    },
    Gb: {
      label: "giga-bit",
      divisor: 1 * 1024 * 1024 * 1024,
      pluralize: true,
    },
    Go: {
      label: "giga-octet",
      divisor: 8 * 1024 * 1024 * 1024,
      pluralize: true,
    },
    GB: {
      label: "giga-byte",
      divisor: 8 * 1024 * 1024 * 1024,
      pluralize: true,
    },
    Tb: {
      label: "tera-bit",
      divisor: 1 * 1024 * 1024 * 1024 * 1024,
      pluralize: true,
    },
    To: {
      label: "tera-octet",
      divisor: 8 * 1024 * 1024 * 1024 * 1024,
      pluralize: true,
    },
    TB: {
      label: "tera-byte",
      divisor: 8 * 1024 * 1024 * 1024 * 1024,
      pluralize: true,
    },
    Pb: {
      label: "peta-bit",
      divisor: 1 * 1024 * 1024 * 1024 * 1024 * 1024,
      pluralize: true,
    },
    Po: {
      label: "peta-octet",
      divisor: 8 * 1024 * 1024 * 1024 * 1024 * 1024,
      pluralize: true,
    },
    PB: {
      label: "peta-byte",
      divisor: 8 * 1024 * 1024 * 1024 * 1024 * 1024,
      pluralize: true,
    },
    Eb: {
      label: "exa-bit",
      divisor: 1 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
      pluralize: true,
    },
    Eo: {
      label: "exa-octet",
      divisor: 8 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
      pluralize: true,
    },
    EB: {
      label: "exa-byte",
      divisor: 8 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
      pluralize: true,
    },
    Zb: {
      label: "zeta-bit",
      divisor: 1 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
      pluralize: true,
    },
    Zo: {
      label: "zeta-octet",
      divisor: 8 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
      pluralize: true,
    },
    ZB: {
      label: "zeta-byte",
      divisor: 8 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
      pluralize: true,
    },
  },
}

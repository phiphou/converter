import { hms_formater } from '../formaters/hms_formater'
import { ymd_formater } from '../formaters/ymd_formater'

export const dictionaries = {
  volume: {
    microliter: {
      label: 'microlitre',
      divisor: 0.000000001,
      pluralize: true
    },
    mililiter: {
      label: 'mililitre',
      divisor: 0.000001,
      pluralize: true
    },
    centiliter: {
      label: 'centilitre',
      divisor: 0.00001,
      pluralize: true
    },
    deciliter: {
      label: 'décilitre',
      divisor: 0.0001,
      pluralize: true
    },
    liter: {
      label: 'litre',
      divisor: 0.001,
      pluralize: true
    },
    cubic_meter: {
      label: 'mètre cube',
      divisor: 1,
      pluralize: true
    },
    vine_bottle: {
      label: 'bouteille de vin',
      divisor: 0.00075,
      pluralize: true
    },
    bathtub: {
      label: 'baignoire',
      divisor: 0.155,
      pluralize: true
    },
    shower: {
      label: 'douche de 5 minutes',
      divisor: 0.06,
      pluralize: true
    },
    shower2: {
      label: 'douche de 10 minutes',
      divisor: 0.12,
      pluralize: true
    },
    oil_barrel: {
      label: 'baril de pétrole',
      divisor: 0.159,
      pluralize: true
    },
    c15: {
      label: 'Citroën C15 fourgon',
      divisor: 2.67,
      pluralize: false
    },
    olympic_swimming_pool: {
      label: 'piscine olympique',
      divisor: 2500,
      pluralize_all: true
    },
    kheops_pyramid: {
      label: 'pyramide de Kheops',
      divisor: 2592341,
      pluralize: true
    },
    anecy_lake: {
      label: "lac d'Annecy",
      divisor: 1124000000,
      pluralize: true
    },
    france_water: {
      label: 'Pluie par an en France',
      divisor: 510000000000,
      pluralize: false
    },
    mediterranean_sea: {
      label: 'Mer Méditerranée',
      divisor: 3765000000000000,
      pluralize: false
    }
  },
  masse: {
    microgram: {
      label: 'microgramme',
      divisor: 0.000000000001,
      pluralize: true
    },
    miligram: {
      label: 'miligramme',
      divisor: 0.000000001,
      pluralize: true
    },
    gram: {
      label: 'gramme',
      divisor: 0.000001,
      pluralize: true
    },
    oz: {
      label: 'once anglo-saxone',
      divisor: 0.00002835,
      pluralize: true
    },
    ozt: {
      label: 'once troy',
      divisor: 0.0000311034768,
      pluralize: true
    },
    kilogram: {
      label: 'kilogramme',
      divisor: 0.001,
      pluralize: true
    },
    tons: {
      label: 'tonne',
      divisor: 1,
      pluralize: true
    },
    one_euro_cent: {
      label: "pièce de 1 centime d'euro",
      divisor: 0.0000023,
      pluralize: true
    },
    two_euro_cent: {
      label: "pièce de 2 centimes d'euro",
      divisor: 0.00000306,
      pluralize: true
    },
    five_euro_cent: {
      label: "pièce de 5 centimes d'euro",
      divisor: 0.00000392,
      pluralize: true
    },
    ten_euro_cent: {
      label: "pièce de 10 centimes d'euro",
      divisor: 0.0000041,
      pluralize: true
    },
    twenty_euro_cent: {
      label: "pièce de 20 centimes d'euro",
      divisor: 0.00000574,
      pluralize: true
    },
    fifty_euro_cent: {
      label: "pièce de 50 centimes d'euro",
      divisor: 0.0000078,
      pluralize: true
    },
    one_euro: {
      label: 'pièce de un euro',
      divisor: 0.0000075,
      pluralize: true
    },
    two_euro: {
      label: 'pièce de deux euros',
      divisor: 0.0000085,
      pluralize: true
    },
    ping_pong_ball: {
      label: 'balle de ping-pong',
      divisor: 0.0000027,
      pluralize: true
    },
    tennis_ball: {
      label: 'balle de tennis',
      divisor: 0.0000577,
      pluralize: true
    },
    volley_ball: {
      label: 'ballon de volleyball',
      divisor: 0.00027,
      pluralize: true
    },
    hand_ball: {
      label: 'ballon de handball',
      divisor: 0.00045,
      pluralize: true
    },
    foot_ball: {
      label: 'ballon de foot',
      divisor: 0.00043,
      pluralize: true
    },
    basket_ball: {
      label: 'ballon de basket',
      divisor: 0.00065,
      pluralize: true
    },
    petanque_ball: {
      label: 'boule de pétanque',
      divisor: 0.0008,
      pluralize: true
    },
    oak_stere: {
      label: 'stère de chêne',
      divisor: 0.7,
      pluralize: true
    },
    titanic: {
      label: 'Titanic',
      divisor: 52310,
      pluralize: false
    },
    USS_Gerald_Ford: {
      label: 'USS Gerald R. Ford',
      divisor: 112000,
      pluralize: false
    }
  },
  surface: {
    m2: {
      label: 'mètre carré',
      divisor: 0.001,
      pluralize_all: true
    },
    ha: {
      label: 'hectare',
      divisor: 10,
      pluralize: true
    },
    km2: {
      label: 'kilomètre carré',
      divisor: 1000,
      pluralize_all: true
    },
    a4: {
      label: 'feuille A4',
      divisor: 0.00006237,
      pluralize: true
    },
    tennis_field: {
      label: 'terrain de tennis',
      divisor: 0.1956271,
      pluralize: true
    },
    basket_field: {
      label: 'terrain de basket',
      divisor: 0.436626,
      pluralize: true
    },
    handball_field: {
      label: 'terrain de handball',
      divisor: 0.8,
      pluralize: true
    },
    football_field: {
      label: 'terrain de football',
      divisor: 7.14,
      pluralize: true
    },
    paris: {
      label: 'Paris',
      divisor: 105400,
      pluralize: false
    },
    france: {
      label: 'France métropolitaine',
      divisor: 551695000,
      pluralize: false
    }
  },
  distance: {
    nanom: {
      label: 'nanomètre',
      divisor: 0.000000000001,
      pluralize: true
    },
    micron: {
      label: 'micromètre',
      divisor: 0.000000001,
      pluralize: true
    },
    mm: {
      label: 'milimètre',
      divisor: 0.000001,
      pluralize: true
    },
    cm: {
      label: 'centimètre',
      divisor: 0.00001,
      pluralize: true
    },
    dm: {
      label: 'décimètre',
      divisor: 0.0001,
      pluralize: true
    },
    m: {
      label: 'mètre',
      divisor: 0.001,
      pluralize: true
    },
    km: {
      label: 'kilomètre',
      divisor: 1,
      pluralize: true
    },
    ly: {
      label: 'année lumière',
      divisor: 9453939595488,
      pluralize: true
    },
    stadium: {
      label: 'piste de stade',
      divisor: 0.4,
      pluralize: true
    },
    bastille_republic: {
      label: 'Bastille - République',
      divisor: 1.63,
      pluralize: false
    },
    paris_marseille: {
      label: 'Paris - Marseille autoroute',
      divisor: 800,
      pluralize: false
    },
    paris_nyc: {
      label: "Paris - New-York vol d'oiseau",
      divisor: 5837.07,
      pluralize: false
    },
    paris_sydney: {
      label: "Paris - Sydney vol d'oiseau",
      divisor: 16960.33,
      pluralize: false
    },
    moon: {
      label: 'Terre - Lune',
      divisor: 384400,
      pluralize: false
    },
    saturn: {
      label: 'Soleil - Saturne',
      divisor: 1426700000,
      pluralize: false
    },
    alpha_centauri: {
      label: 'Soleil - Alpha du Centaure',
      divisor: 40122519643251.07,
      pluralize: false
    }
  },
  durée: {
    s: {
      label: 'seconde',
      divisor: 1,
      pluralize: true
    },
    m: {
      label: 'minute',
      divisor: 60,
      pluralize: true
    },
    h: {
      label: 'heure',
      divisor: 3600,
      pluralize: true
    },
    j: {
      label: 'jour',
      divisor: 86400,
      pluralize: true
    },
    w: {
      label: 'semaine',
      divisor: 604800,
      pluralize: true
    },
    y: {
      label: 'année',
      divisor: 31557600,
      pluralize: true
    },
    hms: {
      label: 'hh:mm:ss',
      divisor: 1,
      formater: hms_formater
    },
    jmy: {
      label: 'aa:mm:jj',
      divisor: 1,
      formater: ymd_formater
    }
  },
  radioactivité: {
    bq: {
      label: 'Bequerel',
      divisor: 1,
      pluralize: false
    },
    banana: {
      label: 'banane',
      divisor: 19.5,
      pluralize: true
    },
    potatoes: {
      label: 'kg de pommes de terres',
      divisor: 170,
      pluralize: false
    },
    white_bread: {
      label: 'kg de pain blanc',
      divisor: 546,
      pluralize: false
    },
    thea: {
      label: 'kg de thé',
      divisor: 740,
      pluralize: false
    }
  },
  radioactivité_2: {
    banana: {
      label: 'banane par jour',
      divisor: (6.2 / 1000000000) * 365 * 19.2 * 1000,
      pluralize: true
    },
    potatoes: {
      label: 'kg de choux par mois',
      divisor: (6.2 / 1000000000) * 150 * 12 * 1000,
      pluralize: false
    },
    white_bread: {
      label: 'litres de vin par semaine',
      divisor: (6.2 / 1000000000) * 35 * 12 * 1000,
      pluralize: false
    },
    fish: {
      label: 'kg de poisson par mois',
      divisor: (1.2 / 1000000) * 12 * 1000,
      pluralize: false
    },
    thea: {
      label: 'kg de thé par an',
      divisor: (6.2 / 1000000000) * 740 * 1000,
      pluralize: false
    },
    annual_worker_max_dose: {
      label: 'dose max dans le nucléaire',
      divisor: 20,
      pluralize: true
    },
    month__astronaut: {
      label: 'astronaute par mois',
      divisor: 25,
      pluralize: true
    },
    msv: {
      label: 'mSv/an',
      divisor: 1,
      pluralize: false
    }
  }
}

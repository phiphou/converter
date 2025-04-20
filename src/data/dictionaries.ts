import currency_converter from "../converters/currency_converter"
import {temp_converter} from "../converters/temp_converter"
import {hms_formater} from "../formaters/hms_formater"
import {ymd_formater} from "../formaters/ymd_formater"

export const dictionaries = {
  devises: {
    infos: {
      label:
        "données de <a href='https://github.com/fawazahmed0/exchange-api' target='_blank' >exchange-api</a>, actualisées chaque jour.",
      divisor: 999999999,
      pluralize: false,
    },
    list: {
      af: {
        name: "Afghanistan",
        curr_code: "afn",
        curr_name_fr: "Afghani afghan",
      },
      al: {
        name: "Albanie",
        curr_code: "all",
        curr_name_fr: "Lek albanais",
      },
      dz: {
        name: "Algérie",
        curr_code: "dzd",
        curr_name_fr: "Dinar algérien",
      },
      as: {
        name: "Samoa américaines",
        curr_code: "usd",
        curr_name_fr: "Dollar américain",
      },
      ad: {
        name: "Andorre",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      ao: {
        name: "Angola",
        curr_code: "aoa",
        curr_name_fr: "Kwanza angolais",
      },
      ai: {
        name: "Anguilla",
        curr_code: "xcd",
        curr_name_fr: "Dollar des Caraïbes orientales",
      },
      ag: {
        name: "Antigua-et-Barbuda",
        curr_code: "xcd",
        curr_name_fr: "Dollar des Caraïbes orientales",
      },
      ar: {
        name: "Argentine",
        curr_code: "ars",
        curr_name_fr: "Peso argentin",
      },
      am: {
        name: "Arménie",
        curr_code: "amd",
        curr_name_fr: "Dram arménien",
      },
      aw: {
        name: "Aruba",
        curr_code: "awg",
        curr_name_fr: "aruban florin",
      },
      au: {
        name: "Australie",
        curr_code: "aud",
        curr_name_fr: "Dollar australien",
      },
      at: {
        name: "Autriche",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      az: {
        name: "Azerbaïdjan",
        curr_code: "azn",
        curr_name_fr: "Manat azerbaïdjanais",
      },
      bs: {
        name: "Bahamas",
        curr_code: "bsd",
        curr_name_fr: "Dollar bahaméen",
      },
      bh: {
        name: "Bahreïn",
        curr_code: "bhd",
        curr_name_fr: "Dinar bahreïni",
      },
      bd: {
        name: "Bangladesh",
        curr_code: "bdt",
        curr_name_fr: "Taka bangladais",
      },
      bb: {
        name: "Barbade",
        curr_code: "bbd",
        curr_name_fr: "Dollar barbadien",
      },
      by: {
        name: "Biélorussie",
        curr_code: "byn",
        curr_name_fr: "Rouble biélorusse",
      },
      be: {
        name: "Belgique",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      bz: {
        name: "Belize",
        curr_code: "bzd",
        curr_name_fr: "Dollar bélizéen",
      },
      bj: {
        name: "Bénin",
        curr_code: "xof",
        curr_name_fr: "Franc CFA (BCEAO)",
      },
      bm: {
        name: "Bermudes",
        curr_code: "bmd",
        curr_name_fr: "Dollar bermudien",
      },
      bt: {
        name: "Bhoutan",
        curr_code: "btn",
        curr_name_fr: "Ngultrum bhoutanais",
      },
      bo: {
        name: "Bolivie",
        curr_code: "bob",
        curr_name_fr: "Boliviano bolivien",
      },
      ba: {
        name: "Bosnie-Herzégovine",
        curr_code: "bam",
        curr_name_fr: "Mark convertible bosnien",
      },
      bw: {
        name: "Botswana",
        curr_code: "bwp",
        curr_name_fr: "Pula botswanais",
      },
      bv: {
        name: "Île Bouvet",
        curr_code: "nok",
        curr_name_fr: "norwegian krone",
      },
      br: {
        name: "Brésil",
        curr_code: "brl",
        curr_name_fr: "Réal brésilien",
      },
      io: {
        name: "Territoire britannique de l'océan Indien",
        curr_code: "usd",
        curr_name_fr: "us dollar",
      },
      bn: {
        name: "Brunei",
        curr_code: "bnd",
        curr_name_fr: "Dollar brunéien",
      },
      bg: {
        name: "Bulgarie",
        curr_code: "bgn",
        curr_name_fr: "Lev bulgare",
      },
      bf: {
        name: "Burkina Faso",
        curr_code: "xof",
        curr_name_fr: "Franc CFA (BCEAO)",
      },
      bi: {
        name: "Burundi",
        curr_code: "bif",
        curr_name_fr: "Franc burundais",
      },
      cv: {
        name: "Cap-Vert",
        curr_code: "cve",
        curr_name_fr: "Escudo cap-verdien",
      },
      kh: {
        name: "Cambodge",
        curr_code: "khr",
        curr_name_fr: "Riel cambodgien",
      },
      cm: {
        name: "Cameroun",
        curr_code: "xaf",
        curr_name_fr: "Franc CFA (BEAC)",
      },
      ca: {
        name: "Canada",
        curr_code: "cad",
        curr_name_fr: "Dollar canadien",
      },
      ky: {
        name: "Îles Caïmans",
        curr_code: "kyd",
        curr_name_fr: "cayman islands dollar",
      },
      cf: {
        name: "République centrafricaine",
        curr_code: "xaf",
        curr_name_fr: "Franc CFA (BEAC)",
      },
      td: {
        name: "Tchad",
        curr_code: "xaf",
        curr_name_fr: "Franc CFA (BEAC)",
      },
      cl: {
        name: "Chili",
        curr_code: "clp",
        curr_name_fr: "Peso chilien",
      },
      cn: {
        name: "Chine",
        curr_code: "cny",
        curr_name_fr: "Yuan renminbi chinois",
      },
      cx: {
        name: "Île Christmas",
        curr_code: "aud",
        curr_name_fr: "australian dollar",
      },
      cc: {
        name: "Îles Cocos",
        curr_code: "aud",
        curr_name_fr: "australian dollar",
      },
      co: {
        name: "Colombie",
        curr_code: "cop",
        curr_name_fr: "Peso colombien",
      },
      km: {
        name: "Comores",
        curr_code: "kmf",
        curr_name_fr: "Franc comorien",
      },
      cd: {
        name: "République démocratique du Congo",
        curr_code: "cdf",
        curr_name_fr: "Franc congolais",
      },
      cg: {
        name: "République du Congo",
        curr_code: "xaf",
        curr_name_fr: "Franc CFA (BEAC)",
      },
      ck: {
        name: "Îles Cook",
        curr_code: "nzd",
        curr_name_fr: "new zealand dollar",
      },
      cr: {
        name: "Costa Rica",
        curr_code: "crc",
        curr_name_fr: "Colón costaricain",
      },
      hr: {
        name: "Croatie",
        curr_code: "hrk",
        curr_name_fr: "Kuna croate",
      },
      cu: {
        name: "Cuba",
        curr_code: "cup",
        curr_name_fr: "Peso cubain",
      },
      cw: {
        name: "Curaçao",
        curr_code: "ang",
        curr_name_fr: "netherlands antillean guilder",
      },
      cy: {
        name: "Chypre",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      ci: {
        name: "Côte d'Ivoire",
        curr_code: "xof",
        curr_name_fr: "Franc CFA (BCEAO)",
      },
      dk: {
        name: "Danemark",
        curr_code: "dkk",
        curr_name_fr: "Couronne danoise",
      },
      dj: {
        name: "Djibouti",
        curr_code: "djf",
        curr_name_fr: "Franc djiboutien",
      },
      dm: {
        name: "Dominique",
        curr_code: "xcd",
        curr_name_fr: "Dollar des Caraïbes orientales",
      },
      do: {
        name: "République dominicaine",
        curr_code: "dop",
        curr_name_fr: "Peso dominicain",
      },
      ec: {
        name: "Équateur",
        curr_code: "usd",
        curr_name_fr: "Dollar américain",
      },
      eg: {
        name: "Égypte",
        curr_code: "egp",
        curr_name_fr: "Livre égyptienne",
      },
      sv: {
        name: "Salvador",
        curr_code: "usd",
        curr_name_fr: "Dollar américain",
      },
      gq: {
        name: "Guinée équatoriale",
        curr_code: "xaf",
        curr_name_fr: "Franc CFA (BEAC)",
      },
      er: {
        name: "Érythrée",
        curr_code: "ern",
        curr_name_fr: "Nakfa érythréen",
      },
      ee: {
        name: "Estonie",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      et: {
        name: "Éthiopie",
        curr_code: "etb",
        curr_name_fr: "Birr éthiopien",
      },
      fk: {
        name: "Malouines",
        curr_code: "fkp",
        curr_name_fr: "falkland islands pound",
      },
      fo: {
        name: "Îles Féroé",
        curr_code: "dkk",
        curr_name_fr: "danish krone",
      },
      fj: {
        name: "Fidji",
        curr_code: "fjd",
        curr_name_fr: "Dollar fidjien",
      },
      fi: {
        name: "Finlande",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      fr: {
        name: "France",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      gf: {
        name: "Guyane",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      pf: {
        name: "Polynésie française",
        curr_code: "xpf",
        curr_name_fr: "Franc CFP",
      },
      tf: {
        name: "Terres australes et antarctiques françaises",
        curr_code: "eur",
        curr_name_fr: "euro",
      },
      ga: {
        name: "Gabon",
        curr_code: "xaf",
        curr_name_fr: "Franc CFA (BEAC)",
      },
      gm: {
        name: "Gambie",
        curr_code: "gmd",
        curr_name_fr: "Dalasi gambien",
      },
      ge: {
        name: "Géorgie",
        curr_code: "gel",
        curr_name_fr: "Lari géorgien",
      },
      de: {
        name: "Allemagne",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      gh: {
        name: "Ghana",
        curr_code: "ghs",
        curr_name_fr: "Cedi ghanéen",
      },
      gi: {
        name: "Gibraltar",
        curr_code: "gip",
        curr_name_fr: "gibraltar pound",
      },
      gr: {
        name: "Grèce",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      gl: {
        name: "Groenland",
        curr_code: "dkk",
        curr_name_fr: "danish krone",
      },
      gd: {
        name: "Grenade",
        curr_code: "xcd",
        curr_name_fr: "Dollar des Caraïbes orientales",
      },
      gp: {
        name: "Guadeloupe",
        curr_code: "eur",
        curr_name_fr: "euro",
      },
      gu: {
        name: "Guam",
        curr_code: "usd",
        curr_name_fr: "us dollar",
      },
      gt: {
        name: "Guatemala",
        curr_code: "gtq",
        curr_name_fr: "Quetzal guatémaltèque",
      },
      gg: {
        name: "Guernesey",
        curr_code: "gbp",
        curr_name_fr: "pound sterling",
      },
      gn: {
        name: "Guinée",
        curr_code: "gnf",
        curr_name_fr: "Franc guinéen",
      },
      gw: {
        name: "Guinée-Bissau",
        curr_code: "xof",
        curr_name_fr: "Franc CFA (BCEAO)",
      },
      gy: {
        name: "Guyana",
        curr_code: "gyd",
        curr_name_fr: "Dollar guyanien",
      },
      ht: {
        name: "Haïti",
        curr_code: "htg",
        curr_name_fr: "Gourde haïtienne",
      },
      hm: {
        name: "Îles Heard-et-MacDonald",
        curr_code: "aud",
        curr_name_fr: "australian dollar",
      },
      va: {
        name: "Saint-Siège (État de la Cité du Vatican)",
        curr_code: "eur",
        curr_name_fr: "euro",
      },
      hn: {
        name: "Honduras",
        curr_code: "hnl",
        curr_name_fr: "Lempira hondurien",
      },
      hk: {
        name: "Hong Kong",
        curr_code: "hkd",
        curr_name_fr: "Dollar de Hong Kong",
      },
      hu: {
        name: "Hongrie",
        curr_code: "huf",
        curr_name_fr: "Forint hongrois",
      },
      is: {
        name: "Islande",
        curr_code: "isk",
        curr_name_fr: "Couronne islandaise",
      },
      in: {
        name: "Inde",
        curr_code: "inr",
        curr_name_fr: "Roupie indienne",
      },
      id: {
        name: "Indonésie",
        curr_code: "idr",
        curr_name_fr: "Roupie indonésienne",
      },
      ir: {
        name: "Iran",
        curr_code: "irr",
        curr_name_fr: "Rial iranien",
      },
      iq: {
        name: "Irak",
        curr_code: "iqd",
        curr_name_fr: "Dinar irakien",
      },
      ie: {
        name: "Irlande",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      im: {
        name: "Île de Man",
        curr_code: "gbp",
        curr_name_fr: "pound sterling",
      },
      il: {
        name: "Israël",
        curr_code: "ils",
        curr_name_fr: "Shekel israélien",
      },
      it: {
        name: "Italie",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      jm: {
        name: "Jamaïque",
        curr_code: "jmd",
        curr_name_fr: "Dollar jamaïcain",
      },
      jp: {
        name: "Japon",
        curr_code: "jpy",
        curr_name_fr: "Yen japonais",
      },
      je: {
        name: "Jersey",
        curr_code: "gbp",
        curr_name_fr: "pound sterling",
      },
      jo: {
        name: "Jordanie",
        curr_code: "jod",
        curr_name_fr: "Dinar jordanien",
      },
      kz: {
        name: "Kazakhstan",
        curr_code: "kzt",
        curr_name_fr: "Tenge kazakh",
      },
      ke: {
        name: "Kenya",
        curr_code: "kes",
        curr_name_fr: "Shilling kényan",
      },
      ki: {
        name: "Kiribati",
        curr_code: "aud",
        curr_name_fr: "australian dollar",
      },
      kr: {
        name: "Corée du Sud",
        curr_code: "krw",
        curr_name_fr: "Won sud-coréen",
      },
      kw: {
        name: "Koweït",
        curr_code: "kwd",
        curr_name_fr: "Dinar koweïtien",
      },
      kg: {
        name: "Kirghizistan",
        curr_code: "kgs",
        curr_name_fr: "Som kirghize",
      },
      lv: {
        name: "Lettonie",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      lb: {
        name: "Liban",
        curr_code: "lbp",
        curr_name_fr: "Livre libanaise",
      },
      ls: {
        name: "Lesotho",
        curr_code: "lsl",
        curr_name_fr: "Loti lesothan",
      },
      lr: {
        name: "Liberia",
        curr_code: "lrd",
        curr_name_fr: "Dollar libérien",
      },
      ly: {
        name: "Libye",
        curr_code: "lyd",
        curr_name_fr: "Dinar libyen",
      },
      li: {
        name: "Liechtenstein",
        curr_code: "chf",
        curr_name_fr: "Franc suisse",
      },
      lt: {
        name: "Lituanie",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      lu: {
        name: "Luxembourg",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      mo: {
        name: "Macao",
        curr_code: "mop",
        curr_name_fr: "Pataca macanaise",
      },
      mg: {
        name: "Madagascar",
        curr_code: "mga",
        curr_name_fr: "Ariary malgache",
      },
      mw: {
        name: "Malawi",
        curr_code: "mwk",
        curr_name_fr: "Kwacha malawite",
      },
      my: {
        name: "Malaisie",
        curr_code: "myr",
        curr_name_fr: "Ringgit malaisien",
      },
      mv: {
        name: "Maldives",
        curr_code: "mvr",
        curr_name_fr: "Rufiyaa maldivienne",
      },
      ml: {
        name: "Mali",
        curr_code: "xof",
        curr_name_fr: "Franc CFA (BCEAO)",
      },
      mt: {
        name: "Malte",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      mh: {
        name: "Îles Marshall",
        curr_code: "usd",
        curr_name_fr: "Dollar américain",
      },
      mq: {
        name: "Martinique",
        curr_code: "eur",
        curr_name_fr: "euro",
      },
      mr: {
        name: "Mauritanie",
        curr_code: "mru",
        curr_name_fr: "Ouguiya mauritanienne",
      },
      mu: {
        name: "Maurice",
        curr_code: "mur",
        curr_name_fr: "Roupie mauricienne",
      },
      yt: {
        name: "Mayotte",
        curr_code: "eur",
        curr_name_fr: "euro",
      },
      mx: {
        name: "Mexique",
        curr_code: "mxn",
        curr_name_fr: "Peso mexicain",
      },
      fm: {
        name: "États fédérés de Micronésie",
        curr_code: "usd",
        curr_name_fr: "Dollar américain",
      },
      md: {
        name: "Moldavie",
        curr_code: "mdl",
        curr_name_fr: "Leu moldave",
      },
      mc: {
        name: "Monaco",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      mn: {
        name: "Mongolie",
        curr_code: "mnt",
        curr_name_fr: "Tugrik mongol",
      },
      me: {
        name: "Monténégro",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      ms: {
        name: "Montserrat",
        curr_code: "xcd",
        curr_name_fr: "east caribbean dollar",
      },
      ma: {
        name: "Maroc",
        curr_code: "mad",
        curr_name_fr: "Dirham marocain",
      },
      mz: {
        name: "Mozambique",
        curr_code: "mzn",
        curr_name_fr: "Metical mozambicain",
      },
      mm: {
        name: "Birmanie",
        curr_code: "mmk",
        curr_name_fr: "Kyat birman",
      },
      na: {
        name: "Namibie",
        curr_code: "nad",
        curr_name_fr: "Dollar namibien",
      },
      nr: {
        name: "Nauru",
        curr_code: "aud",
        curr_name_fr: "Dollar australien",
      },
      np: {
        name: "Népal",
        curr_code: "npr",
        curr_name_fr: "Roupie népalaise",
      },
      nl: {
        name: "Pays-Bas",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      nc: {
        name: "Nouvelle-Calédonie",
        curr_code: "xpf",
        curr_name_fr: "Franc CFP",
      },
      nz: {
        name: "Nouvelle-Zélande",
        curr_code: "nzd",
        curr_name_fr: "Dollar néo-zélandais",
      },
      ni: {
        name: "Nicaragua",
        curr_code: "nio",
        curr_name_fr: "Córdoba nicaraguayen",
      },
      ne: {
        name: "Niger",
        curr_code: "xof",
        curr_name_fr: "Franc CFA (BCEAO)",
      },
      ng: {
        name: "Nigeria",
        curr_code: "ngn",
        curr_name_fr: "Naira nigérian",
      },
      nu: {
        name: "Niue",
        curr_code: "nzd",
        curr_name_fr: "new zealand dollar",
      },
      nf: {
        name: "Île Norfolk",
        curr_code: "aud",
        curr_name_fr: "australian dollar",
      },
      mp: {
        name: "Îles Mariannes du Nord",
        curr_code: "usd",
        curr_name_fr: "us dollar",
      },
      no: {
        name: "Norvège",
        curr_code: "nok",
        curr_name_fr: "Couronne norvégienne",
      },
      om: {
        name: "Oman",
        curr_code: "omr",
        curr_name_fr: "Rial omanais",
      },
      pk: {
        name: "Pakistan",
        curr_code: "pkr",
        curr_name_fr: "Roupie pakistanaise",
      },
      pw: {
        name: "Palaos",
        curr_code: "usd",
        curr_name_fr: "Dollar américain",
      },
      pa: {
        name: "Panama",
        curr_code: "pab",
        curr_name_fr: "Balboa panaméen",
      },
      pg: {
        name: "Papouasie-Nouvelle-Guinée",
        curr_code: "pgk",
        curr_name_fr: "Kina papou-néo-guinéen",
      },
      py: {
        name: "Paraguay",
        curr_code: "pyg",
        curr_name_fr: "Guarani paraguayen",
      },
      pe: {
        name: "Pérou",
        curr_code: "pen",
        curr_name_fr: "Sol péruvien",
      },
      ph: {
        name: "Philippines",
        curr_code: "php",
        curr_name_fr: "Peso philippin",
      },
      pn: {
        name: "Îles Pitcairn",
        curr_code: "nzd",
        curr_name_fr: "new zealand dollar",
      },
      pl: {
        name: "Pologne",
        curr_code: "pln",
        curr_name_fr: "Złoty polonais",
      },
      pt: {
        name: "Portugal",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      pr: {
        name: "Porto Rico",
        curr_code: "usd",
        curr_name_fr: "us dollar",
      },
      qa: {
        name: "Qatar",
        curr_code: "qar",
        curr_name_fr: "Riyal qatari",
      },
      mk: {
        name: "Macédoine du Nord",
        curr_code: "mkd",
        curr_name_fr: "denar",
      },
      ro: {
        name: "Roumanie",
        curr_code: "ron",
        curr_name_fr: "Leu roumain",
      },
      ru: {
        name: "Russie",
        curr_code: "rub",
        curr_name_fr: "Rouble russe",
      },
      rw: {
        name: "Rwanda",
        curr_code: "rwf",
        curr_name_fr: "Franc rwandais",
      },
      re: {
        name: "La Réunion",
        curr_code: "eur",
        curr_name_fr: "euro",
      },
      bl: {
        name: "Saint-Barthélemy",
        curr_code: "eur",
        curr_name_fr: "euro",
      },
      kn: {
        name: "Saint-Christophe-et-Niévès",
        curr_code: "xcd",
        curr_name_fr: "Dollar des Caraïbes orientales",
      },
      lc: {
        name: "Sainte-Lucie",
        curr_code: "xcd",
        curr_name_fr: "Dollar des Caraïbes orientales",
      },
      mf: {
        name: "Saint-Martin",
        curr_code: "eur",
        curr_name_fr: "euro",
      },
      pm: {
        name: "Saint-Pierre-et-Miquelon",
        curr_code: "eur",
        curr_name_fr: "euro",
      },
      vc: {
        name: "Saint-Vincent-et-les-Grenadines",
        curr_code: "xcd",
        curr_name_fr: "Dollar des Caraïbes orientales",
      },
      ws: {
        name: "Samoa",
        curr_code: "wst",
        curr_name_fr: "Tala samoan",
      },
      sm: {
        name: "Saint-Marin",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      st: {
        name: "Sao Tomé-et-Principe",
        curr_code: "stn",
        curr_name_fr: "Dobra santoméen",
      },
      sa: {
        name: "Arabie saoudite",
        curr_code: "sar",
        curr_name_fr: "Riyal saoudien",
      },
      sn: {
        name: "Sénégal",
        curr_code: "xof",
        curr_name_fr: "Franc CFA (BCEAO)",
      },
      rs: {
        name: "Serbie",
        curr_code: "rsd",
        curr_name_fr: "Dinar serbe",
      },
      sc: {
        name: "Seychelles",
        curr_code: "scr",
        curr_name_fr: "Roupie seychelloise",
      },
      sl: {
        name: "Sierra Leone",
        curr_code: "sll",
        curr_name_fr: "Leone sierra-léonais",
      },
      sg: {
        name: "Singapour",
        curr_code: "sgd",
        curr_name_fr: "Dollar de Singapour",
      },
      sx: {
        name: "Saint-Martin",
        curr_code: "ang",
        curr_name_fr: "netherlands antillean guilder",
      },
      sk: {
        name: "Slovaquie",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      si: {
        name: "Slovénie",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      sb: {
        name: "Îles Salomon",
        curr_code: "sbd",
        curr_name_fr: "solomon islands dollar",
      },
      so: {
        name: "Somalie",
        curr_code: "sos",
        curr_name_fr: "Shilling somalien",
      },
      za: {
        name: "Afrique du Sud",
        curr_code: "zar",
        curr_name_fr: "Rand sud-africain",
      },
      es: {
        name: "Espagne",
        curr_code: "eur",
        curr_name_fr: "Euro",
      },
      lk: {
        name: "Sri Lanka",
        curr_code: "lkr",
        curr_name_fr: "Roupie srilankaise",
      },
      sd: {
        name: "Soudan",
        curr_code: "sdg",
        curr_name_fr: "Livre soudanaise",
      },
      sr: {
        name: "Suriname",
        curr_code: "srd",
        curr_name_fr: "Dollar surinamais",
      },
      sj: {
        name: "Svalbard et île Jan Mayen",
        curr_code: "nok",
        curr_name_fr: "norwegian krone",
      },
      se: {
        name: "Suède",
        curr_code: "sek",
        curr_name_fr: "Couronne suédoise",
      },
      ch: {
        name: "Suisse",
        curr_code: "chf",
        curr_name_fr: "Franc suisse",
      },
      sy: {
        name: "Syrie",
        curr_code: "syp",
        curr_name_fr: "Livre syrienne",
      },
      tw: {
        name: "Taïwan (République de Chine)",
        curr_code: "twd",
        curr_name_fr: "new taiwan dollar",
      },
      tj: {
        name: "Tadjikistan",
        curr_code: "tjs",
        curr_name_fr: "Somoni tadjik",
      },
      th: {
        name: "Thaïlande",
        curr_code: "thb",
        curr_name_fr: "Baht thaïlandais",
      },
      tl: {
        name: "Timor oriental",
        curr_code: "usd",
        curr_name_fr: "Dollar américain",
      },
      tg: {
        name: "Togo",
        curr_code: "xof",
        curr_name_fr: "Franc CFA (BCEAO)",
      },
      tk: {
        name: "Tokelau",
        curr_code: "nzd",
        curr_name_fr: "new zealand dollar",
      },
      to: {
        name: "Tonga",
        curr_code: "top",
        curr_name_fr: "Paʻanga tongan",
      },
      tt: {
        name: "Trinité-et-Tobago",
        curr_code: "ttd",
        curr_name_fr: "Dollar trinidadien",
      },
      tn: {
        name: "Tunisie",
        curr_code: "tnd",
        curr_name_fr: "Dinar tunisien",
      },
      tr: {
        name: "Turquie",
        curr_code: "try",
        curr_name_fr: "Livre turque",
      },
      tm: {
        name: "Turkménistan",
        curr_code: "tmt",
        curr_name_fr: "Manat turkmène",
      },
      tc: {
        name: "Îles Turques-et-Caïques",
        curr_code: "usd",
        curr_name_fr: "us dollar",
      },
      tv: {
        name: "Tuvalu",
        curr_code: "aud",
        curr_name_fr: "Dollar australien",
      },
      ug: {
        name: "Ouganda",
        curr_code: "ugx",
        curr_name_fr: "Shilling ougandais",
      },
      ua: {
        name: "Ukraine",
        curr_code: "uah",
        curr_name_fr: "Hryvnia ukrainienne",
      },
      ae: {
        name: "Émirats arabes unis",
        curr_code: "aed",
        curr_name_fr: "Dirham des Émirats arabes unis",
      },
      gb: {
        name: "Royaume-Uni",
        curr_code: "gbp",
        curr_name_fr: "Livre sterling",
      },
      um: {
        name: "Îles mineures éloignées des États-Unis",
        curr_code: "usd",
        curr_name_fr: "us dollar",
      },
      us: {
        name: "États-Unis",
        curr_code: "usd",
        curr_name_fr: "Dollar américain",
      },
      uy: {
        name: "Uruguay",
        curr_code: "uyu",
        curr_name_fr: "Peso uruguayen",
      },
      uz: {
        name: "Ouzbékistan",
        curr_code: "uzs",
        curr_name_fr: "Sum ouzbek",
      },
      vu: {
        name: "Vanuatu",
        curr_code: "vuv",
        curr_name_fr: "Vatu vanuatuan",
      },
      ve: {
        name: "Venezuela",
        curr_code: "vef",
        curr_name_fr: "Bolivar vénézuélien",
      },
      vn: {
        name: "Viêt Nam",
        curr_code: "vnd",
        curr_name_fr: "Dong vietnamien",
      },
      vg: {
        name: "Îles Vierges britanniques",
        curr_code: "usd",
        curr_name_fr: "Dollar américain",
      },
      vi: {
        name: "Îles Vierges des États-Unis",
        curr_code: "usd",
        curr_name_fr: "us dollar",
      },
      wf: {
        name: "Wallis-et-Futuna",
        curr_code: "xpf",
        curr_name_fr: "cfp franc",
      },
      eh: {
        name: "République arabe sahraouie démocratique",
        curr_code: "mad",
        curr_name_fr: "moroccan dirham",
      },
      ye: {
        name: "Yémen",
        curr_code: "yer",
        curr_name_fr: "Rial yéménite",
      },
      zm: {
        name: "Zambie",
        curr_code: "zmw",
        curr_name_fr: "Kwacha zambien",
      },
      zw: {
        name: "Zimbabwe",
        curr_code: "zwl",
        curr_name_fr: "Dollar zimbabwéen",
      },
      ax: {
        name: "Îles Åland",
        curr_code: "eur",
        curr_name_fr: "euro",
      },
    },
    converter: currency_converter,
    pluralize: false,
    divisor: 1,
  },
  angle: {
    degré: {
      label: "degré",
      divisor: 1,
    },
    radian: {
      label: "radian",
      divisor: 180 / Math.PI,
    },
    arc_m: {
      label: "minute d'arc",
      divisor: 1 / 60,
    },
    arc_s: {
      label: "seconde d'arc",
      divisor: 1 / 3600,
    },
    grade: {
      label: "grade",
      divisor: 0.9,
    },
    angular_mil_NATO: {
      label: "mil angulaire",
      info: 'le mil angulaire est utilisé en artillerie, notamment par l\'OTAN (<a href="https://fr.wikipedia.org/wiki/Mil_angulaire" target="_blank">source</a>)',
      divisor: (1 / 3600) * 202.5,
      pluralize_all: true,
    },
  },
  densité: {
    infos: {
      label:
        "données de densité de <a href='https://fr.wikipedia.org/wiki/Masse_volumique#Tables_des_masses_volumiques_de_diverses_substances' target='_blank' >Wikipedia</a>, à 20 °C et sous pression atmosphérique normale (1013hPa).",
      divisor: 999999999,
      pluralize: false,
    },
    materials: {
      water: {label: "eau", divisor: 1, quote: "d'"},
      concrete: {label: "béton", divisor: 2.2, quote: "de"},
      diamond: {label: "diamant", divisor: 3.517, quote: "de"},
      granit: {label: "granite", divisor: 2.7, quote: "de"},
      marble: {label: "marbre", divisor: 2.7, quote: "de"},
      glass: {label: "verre", divisor: 2.53, quote: "de"},
      steel: {label: "acier", divisor: 7.6, quote: "d'"},
      aluminium: {label: "aluminium", divisor: 2.7, quote: "d'"},
      silver: {label: "argent", divisor: 10.5, quote: "d'"},
      copper: {label: "cuivre", divisor: 8.96, quote: "de"},
      iron: {label: "fer", divisor: 7.86, quote: "de"},
      iridium: {label: "iridium", divisor: 22.56, quote: "d'"},
      gold: {label: "or", divisor: 19.32, quote: "d'"},
      mercure: {label: "mercure", divisor: 13.545, quote: "de"},
      nickel: {label: "nickel", divisor: 8.9, quote: "de"},
      platinium: {label: "platine", divisor: 21.45, quote: "de"},
      lead: {label: "plomb", divisor: 11.35, quote: "de"},
      titanium: {label: "titane", divisor: 4.5, quote: "de"},
      tungsten: {label: "tungstène", divisor: 19.3, quote: "de"},
      uranium: {label: "uranium", divisor: 19.1, quote: "d'"},
      liquid_hydrogen: {label: "hydrogène liquide", divisor: 0.07, quote: "d'"},
      oil: {label: "essence", divisor: 0.075, quote: "d'"},
      vegetal_oil: {label: "huile végétale", divisor: 0.092, quote: "d'"},
      balsa: {label: "balsa", divisor: 0.14, quote: "de"},
      liege: {label: "liège", divisor: 0.24, quote: "de"},
      fir_tree: {label: "sapin", divisor: 0.45, quote: "de"},
      acajou: {label: "acajou", divisor: 0.7, quote: "d'"},
      hêtre: {label: "hêtre", divisor: 0.8, quote: "de"},
      ébène: {label: "ébène", divisor: 1.15, quote: "d'"},
    },
    mg: {
      label: "milligramme",
      divisor: 0.001,
    },
    g: {
      label: "gramme",
      divisor: 1,
    },
    kg: {
      label: "kilogramme",
      divisor: 1000,
    },
    t: {
      label: "tonne",
      divisor: 1000000,
    },
    mm3: {
      label: "mm³",
      divisor: 0.001,
      pluralize: true,
    },
    cm3: {
      label: "cm³",
      divisor: 1,
      pluralize: true,
    },
    dcm3: {
      label: "dm³",
      divisor: 1000,
      pluralize: true,
    },
    m3: {
      label: "m³",
      divisor: 1000000,
      pluralize: true,
    },
  },
  CO2: {
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
    },
    Wh: {
      label: "Wh",
      divisor: 1,
    },
    kWh: {
      label: "kWh",
      divisor: 1000,
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
  },
  volume: {
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
      label: "Pluie par an en France",
      divisor: 510000000000,
      pluralize: false,
      not_unit: true,
    },
    mediterranean_sea: {
      info: 'volume selon <a href=" https://fr.wikipedia.org/wiki/Mer_M%C3%A9diterran%C3%A9e" target="_blank">Wikipedia</a>.',
      label: "Mer Méditerranée",
      divisor: 3765000000000000,
      pluralize: false,
      not_unit: true,
    },
  },
  masse: {
    microgram: {
      label: "microgramme",
      divisor: 0.000000000001,
    },
    miligram: {
      label: "miligramme",
      divisor: 0.000000001,
    },
    gram: {
      label: "gramme",
      divisor: 0.000001,
    },
    kilogram: {
      label: "kilogramme",
      divisor: 0.001,
    },
    tons: {
      label: "tonne",
      divisor: 1,
    },
    oz: {
      label: "once anglo-saxone",
      divisor: 0.00002835,
    },
    ozt: {
      label: "once troy",
      divisor: 0.0000311034768,
    },
    lb: {
      label: "livre",
      divisor: 0.00045359237,
    },
    one_euro_cent: {
      info: 'selon les données de la <a href="https://www.stefm.fr/numismatique/informations-generales/poids-pieces-euro" target="_blank">Société Française des Monnaies</a>.',
      label: "pièce de 1 centime d'euro",
      divisor: 0.0000023,
      not_unit: true,
    },
    two_euro_cent: {
      info: 'selon les données de la <a href="https://www.stefm.fr/numismatique/informations-generales/poids-pieces-euro" target="_blank">Société Française des Monnaies</a>.',
      label: "pièce de 2 centimes d'euro",
      divisor: 0.00000306,
      not_unit: true,
    },
    five_euro_cent: {
      info: 'selon les données de la <a href="https://www.stefm.fr/numismatique/informations-generales/poids-pieces-euro" target="_blank">Société Française des Monnaies</a>.',
      label: "pièce de 5 centimes d'euro",
      divisor: 0.00000392,
      not_unit: true,
    },
    ten_euro_cent: {
      info: 'selon les données de la <a href="https://www.stefm.fr/numismatique/informations-generales/poids-pieces-euro" target="_blank">Société Française des Monnaies</a>.',
      label: "pièce de 10 centimes d'euro",
      divisor: 0.0000041,
      not_unit: true,
    },
    twenty_euro_cent: {
      info: 'selon les données de la <a href="https://www.stefm.fr/numismatique/informations-generales/poids-pieces-euro" target="_blank">Société Française des Monnaies</a>.',
      label: "pièce de 20 centimes d'euro",
      divisor: 0.00000574,
      not_unit: true,
    },
    fifty_euro_cent: {
      info: 'selon les données de la <a href="https://www.stefm.fr/numismatique/informations-generales/poids-pieces-euro" target="_blank">Société Française des Monnaies</a>.',
      label: "pièce de 50 centimes d'euro",
      divisor: 0.0000078,
      not_unit: true,
    },
    one_euro: {
      info: 'selon les données de la <a href="https://www.stefm.fr/numismatique/informations-generales/poids-pieces-euro" target="_blank">Société Française des Monnaies</a>.',
      label: "pièce de un euro",
      divisor: 0.0000075,
      not_unit: true,
    },
    two_euro: {
      info: 'selon les données de la <a href="https://www.stefm.fr/numismatique/informations-generales/poids-pieces-euro" target="_blank">Société Française des Monnaies</a>.',
      label: "pièce de deux euros",
      divisor: 0.0000085,
      not_unit: true,
    },
    rice_grain: {
      label: "grain de riz",
      divisor: 0.0000003014,
      not_unit: true,
    },
    ping_pong_ball: {
      info: "moyenne des limites réglementaires",
      label: "balle de ping-pong",
      divisor: 0.0000027,
      not_unit: true,
    },
    tennis_ball: {
      info: "moyenne des limites réglementaires",
      label: "balle de tennis",
      divisor: 0.0000577,
      not_unit: true,
    },
    volley_ball: {
      info: "moyenne des limites réglementaires",
      label: "ballon de volleyball",
      divisor: 0.00027,
      not_unit: true,
    },
    hand_ball: {
      info: "moyenne des limites réglementaires",
      label: "ballon de handball",
      divisor: 0.00045,
      not_unit: true,
    },
    foot_ball: {
      info: "moyenne des limites réglementaires",
      label: "ballon de foot",
      divisor: 0.00043,
      not_unit: true,
    },
    basket_ball: {
      info: "moyenne des limites réglementaires",
      label: "ballon de basket",
      divisor: 0.00065,
      not_unit: true,
    },
    petanque_ball: {
      info: "moyenne des limites réglementaires",
      label: "boule de pétanque",
      divisor: 0.0008,
      not_unit: true,
    },
    oak_stere: {
      info: "pour un bois de chauffage sec (20% d'humidité)",
      label: "stère de chêne",
      divisor: 0.44,
      not_unit: true,
    },
    twingo: {
      info: 'masse à vide, selon les données de <a href="https://fr.wikipedia.org/wiki/Renault_Twingo_III" target="_blank">Wikipedia</a>.',
      label: "Renault Twingo 3",
      divisor: 0.864,
      pluralize: false,
      not_unit: true,
    },
    tesla_s: {
      info: 'masse à vide, selon les données du <a href="https://www.tesla.com/fr_fr/models" target="_blank">constructeur</a>.',
      label: "Tesla model S",
      divisor: 2.068,
      pluralize: false,
      not_unit: true,
    },
    grizzli_bear: {
      label: "ours Grizzli",
      divisor: 0.27,
      pluralize: false,
      not_unit: true,
    },
    polar_bear: {
      label: "ours polaire",
      divisor: 0.45,
      pluralize: false,
      not_unit: true,
    },
    male_white_shark: {
      label: "requin blanc femelle",
      divisor: 1.325,
      not_unit: true,
    },
    male_hippopotamus: {
      info: 'poids moyen d\'un hippopotame mâle selon les données de <a href="https://fr.wikipedia.org/wiki/Hippopotamus_amphibius" target="_blank">Wikipedia</a>.',
      label: "hippopotame",
      divisor: 1.5,
      not_unit: true,
    },
    african_elephant: {
      label: "éléphant d'Afrique mâle",
      divisor: 6,
      not_unit: true,
    },
    titanic: {
      info: 'selon les données <a href="https://fr.wikipedia.org/wiki/Titanic" target="_blank">Wikipedia</a>.',
      label: "Titanic",
      divisor: 52310,
      pluralize: false,
      not_unit: true,
    },
    USS_Gerald_Ford: {
      info: 'selon les données <a href="https://fr.wikipedia.org/wiki/USS_Gerald_R._Ford_(CVN-78)" target="_blank">Wikipedia</a>.',
      label: "USS Gerald R. Ford",
      divisor: 112000,
      pluralize: false,
      not_unit: true,
    },
    a380: {
      info: "masse à vide",
      label: "Airbus A380",
      divisor: 276.8,
      pluralize: false,
      not_unit: true,
    },
    leclerc_tank: {
      info: "masse à vide",
      label: "char Leclerc",
      divisor: 56,
      not_unit: true,
    },
    eiffel_tower: {
      info: "avec fondations",
      label: "Tour Eiffel",
      divisor: 10100,
      pluralize: false,
      not_unit: true,
    },
    triumph_arch: {
      info: 'sans les fondations (le double avec), selon les données <a href="https://fr.wikipedia.org/wiki/Arc_de_triomphe_de_l%27%C3%89toile" target="_blank">Wikipedia</a>.',
      label: "Arc de triomphe",
      divisor: 50000,
      pluralize: false,
      not_unit: true,
    },
    gizeh_pyramid: {
      info: 'selon les données <a href="https://fr.wikipedia.org/wiki/Pyramide_de_Kh%C3%A9ops" target="_blank">Wikipedia</a>.',

      label: "pyramide de Khéops",
      divisor: 5000000,
      not_unit: true,
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
    },
    ha: {
      label: "hectare",
      divisor: 100,
    },
    acre: {
      label: "acre",
      divisor: 40.4686,
    },
    km2: {
      label: "kilomètre carré",
      divisor: 10000,
      pluralize_all: true,
    },
    a5: {
      label: "feuille A5",
      divisor: 0.00003108,
    },
    a4: {
      label: "feuille A4",
      divisor: 0.0006237,
    },
    a3: {
      label: "feuille A3",
      divisor: 0.0012474,
    },
    ping_pong_table: {
      info: 'surface officielle, selon les <a href="https://documents.ittf.sport/sites/default/files/public/2021-04/2020ITTFHandbook.pdf" target="_blank">règles de l\'ITTF</a> (en anglais, page 34 du document)',
      label: "table de ping-pong",
      divisor: 0.041785,
      not_unit: true,
    },
    tennis_field: {
      label: "terrain de tennis",
      divisor: 2.607569,
      not_unit: true,
    },
    basket_field: {
      label: "terrain de basket",
      divisor: 4.36626,
      not_unit: true,
    },
    handball_field: {
      label: "terrain de handball",
      divisor: 8,
      not_unit: true,
    },
    rugby_field: {
      label: "terrain de rugby",
      divisor: 67.275,
      not_unit: true,
    },
    football_field: {
      label: "terrain de football",
      divisor: 71.4,
      not_unit: true,
    },
    wind_turbine: {
      info: "emprise totale pour une éolienne terrestre de 2MW",
      label: "éolienne",
      divisor: 20,
      pluralize: false,
      not_unit: true,
    },
    notre_dame_de_paris: {
      info: 'superficie totale du site, selon les données de <a href="https://fr.wikipedia.org/wiki/Cath%C3%A9drale_Notre-Dame_de_Paris" target="_blank">Wikipedia</a>.',
      label: "Notre-Dame de Paris",
      divisor: 55,
      pluralize: false,
      not_unit: true,
    },
    republic_place: {
      info: 'superficie totale du site, selon les données de <a href="https://fr.wikipedia.org/wiki/Place_de_la_R%C3%A9publique_(Paris)" target="_blank">Wikipedia</a>.',
      label: "Place de la République (Paris)",
      divisor: 336.77,
      pluralize: false,
      not_unit: true,
    },
    kheops_pyramid: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Pyramide_de_Kh%C3%A9ops" target="_blank">Wikipedia</a>.',
      label: "pyramide de Khéops",
      divisor: 530.3809,
      pluralize: false,
      not_unit: true,
    },
    versailles: {
      info: 'superficie totale du site, selon les données de <a href="https://fr.wikipedia.org/wiki/Parc_de_Versailles" target="_blank">Wikipedia</a>.',
      label: "Château de Versailles",
      divisor: 107000,
      pluralize: false,
      not_unit: true,
    },
    paris: {
      label: "Paris",
      divisor: 1054000,
      pluralize: false,
      not_unit: true,
    },
    idf: {
      info: 'superficie totale, selon les données de <a href="https://fr.wikipedia.org/wiki/%C3%8Ele-de-France" target="_blank">Wikipedia</a>.',
      label: "Région ïle-de-France",
      divisor: 120110000,
      pluralize: false,
      not_unit: true,
    },
    france: {
      label: "France métropolitaine",
      divisor: 5516950000,
      pluralize: false,
      not_unit: true,
    },
    africa: {
      info: 'superficie totale du continent, selon les données de <a href="https://fr.wikipedia.org/wiki/Afrique" target="_blank">Wikipedia</a>.',
      label: "continent africain",
      divisor: 304158730000,
      pluralize: false,
      not_unit: true,
    },
    earth_lands: {
      info: 'superficie totale des terres émergées de la planète, selon les données de <a href="https://fr.wikipedia.org/wiki/Terre_%C3%A9merg%C3%A9e" target="_blank">Wikipedia</a>.',
      label: "terres émergées sur Terre",
      divisor: 1480000000000,
      pluralize: false,
      not_unit: true,
    },
  },
  longueur: {
    nanom: {
      label: "nanomètre",
      divisor: 0.000000000001,
    },
    micron: {
      label: "micromètre",
      divisor: 0.000000001,
    },
    mm: {
      label: "milimètre",
      divisor: 0.000001,
    },
    cm: {
      label: "centimètre",
      divisor: 0.00001,
    },
    inch: {
      label: "pouce",
      divisor: 0.0000254,
    },
    dm: {
      label: "décimètre",
      divisor: 0.0001,
    },
    foot: {
      label: "pied",
      divisor: 0.0003048,
    },
    yard: {
      label: "yard",
      divisor: 0.0009144,
    },
    m: {
      label: "mètre",
      divisor: 0.001,
    },
    km: {
      label: "kilomètre",
      divisor: 1,
    },
    mile: {
      label: "mile",
      divisor: 1.609344,
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
    },
    ly: {
      label: "année lumière",
      divisor: 9453939595488,
    },
    red_cell: {
      info: 'diamètre moyen selon les données de <a href="https://fr.wikipedia.org/wiki/%C3%89rythrocyte" target="_blank">Wikipedia</a>.',
      label: "globule rouge",
      divisor: 0.0000000072,
      pluralize_all: true,
      not_unit: true,
    },
    white_cell: {
      info: 'diamètre moyenne selon les données de <a href="https://fr.wikipedia.org/wiki/Leucocyte" target="_blank">Wikipedia</a>.',
      label: "globule blanc",
      divisor: 0.000000012,
      pluralize_all: true,
      not_unit: true,
    },
    fine_sand: {
      label: "grain de sable fin",
      divisor: 0.000000188,
      not_unit: true,
    },
    london_bus: {
      info: 'taille des nouveaux Wrightbus New Routemaster en service depuis 2012, selon les données de <a href="https://fr.wikipedia.org/wiki/Wrightbus_New_Routemaster" target="_blank">Wikipedia</a>.',
      label: "bus londonien",
      divisor: 0.01123,
      pluralize: false,
      not_unit: true,
    },
    HhighJump: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
      label: "record du saut en hauteur H",
      divisor: 0.00245,
      pluralize: false,
      not_unit: true,
    },
    HlongJump: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
      label: "record du saut en longueur H",
      divisor: 0.00895,
      pluralize: false,
      not_unit: true,
    },
    HtripleJump: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
      label: "record du triple saut H",
      divisor: 0.01829,
      pluralize: false,
      not_unit: true,
    },
    HpoleVault: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
      label: "record du saut à la perche H",
      divisor: 0.00627,
      pluralize: false,
      not_unit: true,
    },
    eiffel_tower: {
      info: 'hauteur totale, avec l\'antenne, selon les données de <a href="https://fr.wikipedia.org/wiki/Tour_Eiffel" target="_blank">Wikipedia</a>.',
      label: "tour Eiffel",
      divisor: 0.33,
      not_unit: true,
    },
    stadium: {
      label: "piste olympique",
      divisor: 0.4,
      not_unit: true,
    },
    bastille_republic: {
      info: 'trajet à pieds, selon les données de <a href="https://maps.app.goo.gl/3wmcZh84Ph3g4MbG8" target="_blank">Google Maps</a>.',
      label: "Bastille - République",
      divisor: 1.63,
      pluralize: false,
      not_unit: true,
    },
    nation_republic: {
      info: 'trajet à pieds, selon les données de <a href="https://maps.app.goo.gl/ecKyGVoB4MeR13g78" target="_blank">Google Maps</a>.',
      label: "Nation - République",
      divisor: 3.03,
      pluralize: false,
      not_unit: true,
    },
    marathon: {
      label: "marathon",
      divisor: 42.195,
      not_unit: true,
    },
    paris_marseille: {
      info: 'trajet le plus court par la route, selon les données de <a href="https://maps.app.goo.gl/Ei4d2gyrXUojyBYM7" target="_blank">Google Maps</a>.',
      label: "Paris - Marseille",
      divisor: 800,
      pluralize: false,
      not_unit: true,
    },
    perpignan_dunkerque: {
      info: 'trajet le plus court par la route, selon les données de <a href="https://maps.app.goo.gl/xno6P4iJf4fRDxoa7" target="_blank">Google Maps</a>.',
      label: "Perpignan - Dunkerque",
      divisor: 1138,
      pluralize: false,
      not_unit: true,
    },
    paris_nyc: {
      info: 'trajet le plus court à vol d\'oiseau, selon les données de <a href="https://fr.distance.to/Paris,%C3%8Ele-de-France,FRA/New-York,NY,USA-(New-York-County)" target="_blank">fr.distance.to</a>.',
      label: "Paris - New-York",
      divisor: 5828.96,
      pluralize: false,
      not_unit: true,
    },
    paris_sydney: {
      info: 'trajet le plus court à vol d\'oiseau, selon les données de <a href="https://fr.distance.to/Paris,%C3%8Ele-de-France,FRA/Sydney,New-South-Wales,AUS" target="_blank">fr.distance.to</a>.',
      label: "Paris - Sydney",
      divisor: 16960.01,
      pluralize: false,
      not_unit: true,
    },
    moon: {
      label: "Terre - Lune",
      divisor: 384400,
      pluralize: false,
      not_unit: true,
    },
    saturn: {
      label: "Soleil - Saturne",
      divisor: 1426700000,
      pluralize: false,
      not_unit: true,
    },
    alpha_centauri: {
      label: "Soleil - Alpha du Centaure",
      divisor: 40122519643251.07,
      pluralize: false,
      not_unit: true,
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
      label: "3 minutes d'un micro-ondes de 900W",
      divisor: 45,
      pluralize: false,
      not_unit: true,
    },
    dishwasher: {
      label: "cycle de lave-vaisselle",
      divisor: 1150,
      not_unit: true,
    },
    washing_machine: {
      label: "cycle de lave-linge classe B",
      divisor: 520,
      not_unit: true,
    },
    bifsteak: {
      info: "avec un four de 2500W, hors préchaufage",
      label: "Roti de 1kg 30min au four à 220°",
      divisor: 850,
      pluralize: false,
      not_unit: true,
    },
  },
  pression: {
    mPa: {
      label: "milliPascal",
      divisor: 0.001,
      pluralize: false,
    },
    Pa: {
      label: "Pascal",
      divisor: 1,
      pluralize: false,
    },
    hPa: {
      label: "hectoPascal",
      divisor: 100,
      pluralize: false,
    },
    kPa: {
      label: "kiloPascal",
      divisor: 1000,
      pluralize: false,
    },
    mbar: {
      info: 'seuil de la douleur auditive (<a href="https://www.laphysique.net/phf/hydrostpr_f.htm" target="_blank">source</a>).',
      label: "millibar",
      divisor: 100,
      pluralize: false,
    },
    bar: {
      label: "bar",
      divisor: 100000,
      pluralize: false,
    },
    atm: {
      label: "atmosphère normale",
      divisor: 101325,
    },
    mmHg: {
      label: "millimètre de mercure",
      divisor: (1 / 760) * 101325,
    },
    lbfin2: {
      label: "livre-force par pouce carré",
      divisor: 6894.76,
      pluralize: false,
    },
    mmH2O: {
      label: "milimètre d'eau",
      divisor: 9.80638,
    },
    Nm2: {
      label: "newton par mètre carré",
      divisor: 1,
      pluralize: false,
    },
    Torr: {
      label: "Torr",
      divisor: (1 / 760) * 101325,
      pluralize: false,
    },
    hundred_meters_underwater: {
      info: 'pression à 100m sous l\'eau (<a href="https://www.laphysique.net/phf/hydrostpr_f.htm" target="_blank">source</a>).',
      label: "100m sous l'eau",
      divisor: 1000000,
      pluralize: false,
    },
    earth: {
      info: 'pression à l\'intérieur au de la Terre (<a href="https://fr.wikipedia.org/wiki/Ordres_de_grandeur_de_pression" target="_blank">source</a>).',
      label: "centre de la Terre",
      divisor: 380000000000,
      pluralize: false,
    },
    sun: {
      info: 'pression à l\'intérieur du noyeau du Soleil (<a href="https://fr.wikipedia.org/wiki/Ordres_de_grandeur_de_pression" target="_blank">source</a>).',
      label: "cœur du Soleil",
      divisor: 35000000000000000,
      pluralize: false,
    },
  },
  accélération: {
    infos: {
      label:
        "accélération de surface pour les planètes selon les données de <a href='https://fr.wikipedia.org/wiki/Gravit%C3%A9_de_surface' target='_blank'>Wikipedia</a>.",
      divisor: 999999999,
      pluralize: false,
    },
    ms2: {
      label: "m/s²",
      divisor: 1,
    },
    mmin2: {
      label: "m/min²",
      divisor: 1 / 3600,
    },
    mh2: {
      label: "m/h²",
      divisor: 1 / 12960000,
    },
    kms2: {
      label: "km/s²",
      divisor: 1000,
    },
    kmmin2: {
      label: "km/min²",
      divisor: 1 / 3.6,
    },
    kmh2: {
      label: "km/h²",
      divisor: 1 / 12960,
    },
    g_earth: {
      label: "Terre (g)",
      divisor: 9.81,
    },
    g_moon: {
      label: "Lune (g)",
      divisor: 1.63,
    },
    g_sun: {
      label: "Soleil (g)",
      divisor: 273.95,
    },
    g_mercury: {
      label: "Mercure (g)",
      divisor: 3.701,
    },
    g_venus: {
      label: "Vénus (g)",
      divisor: 8.87,
    },
    g_mars: {
      label: "Mars (g)",
      divisor: 3.711,
    },
    g_jupiter: {
      label: "Jupiter (g)",
      divisor: 24.796,
    },
    g_saturn: {
      label: "Saturne (g)",
      divisor: 10.44,
    },
    g_uranus: {
      label: "Uranus (g)",
      divisor: 8.87,
    },
    g_neptun: {
      label: "Neptune (g)",
      divisor: 11.15,
    },
  },
  durée: {
    s: {
      label: "seconde",
      divisor: 1,
    },
    m: {
      label: "minute",
      divisor: 60,
    },
    h: {
      label: "heure",
      divisor: 3600,
    },
    j: {
      label: "jour",
      divisor: 86400,
    },
    w: {
      label: "semaine",
      divisor: 604800,
    },
    y: {
      label: "année",
      divisor: 31557600,
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
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
      label: "record du 100m H",
      divisor: 9.58,
      pluralize: false,
      not_unit: true,
    },
    H200m: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
      label: "record du 200m H",
      divisor: 19.19,
      pluralize: false,
      not_unit: true,
    },
    H400m: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
      label: "record du 400m H",
      divisor: 43.03,
      pluralize: false,
      not_unit: true,
    },
    H800m: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
      label: "record du 800m H",
      divisor: 100.91,
      pluralize: false,
      not_unit: true,
    },
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
    H1500m: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
      label: "record du 1500m H",
      divisor: 206,
      pluralize: false,
      not_unit: true,
    },
    H3000m: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
      label: "record du 3000m steeple H",
      divisor: 472.11,
      pluralize: false,
      not_unit: true,
    },
    H5000m: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
      label: "record du 5000m H",
      divisor: 755.36,
      pluralize: false,
      not_unit: true,
    },
    H10000m: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
      label: "record du 10000m H",
      divisor: 1571,
      pluralize: false,
      not_unit: true,
    },
    Hmarathon: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
      label: "record du Marathon H",
      divisor: 7235,
      pluralize: false,
      not_unit: true,
    },
    H100km: {
      info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
      label: "record du 100km H",
      divisor: 21935,
      pluralize: false,
      not_unit: true,
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
    },
    fs: {
      label: "pied par seconde",
      divisor: 0.0003048 / (1 / 3600),
    },
    ys: {
      label: "yard par seconde",
      divisor: 0.0009144 / (1 / 3600),
    },
    yh: {
      label: "yard par heure",
      divisor: 0.0009144,
    },
    nk: {
      label: "noeud",
      info: "les noeuds, aussi appelés noeuds nautiques, sont utilisés aussi bien dans le domaine maritime qu'aéronautique.",
      divisor: 1.852,
    },
    usain_bolt: {
      info: "vitesse maximale d'Usain Bolt lors de son record du 100m le 16/08/2009 à Berlin (<a href='https://www.leparisien.fr/sports/usain-bolt-l-homme-qui-court-jusqu-a-44-72-km-h-17-08-2009-609024.php' target='blank'>source</a>)",
      label: "Usain Bolt",
      divisor: 44.72,
      pluralize: false,
      not_unit: true,
    },
    autoroute_max: {
      label: "vitesse max autoroute",
      divisor: 130,
      pluralize: false,
      not_unit: true,
    },
    record_tgv: {
      label: "record TGV",
      info: "vitesse maximale atteinte lors d'un essai le 03/04/2007 (<a href='https://fr.wikipedia.org/wiki/Records_du_monde_de_vitesse_sur_rail_en_France' target='blank'>source</a>)",
      divisor: 574.8,
      pluralize: false,
      not_unit: true,
    },
    rafale: {
      label: "avion Rafale",
      divisor: 1389,
      pluralize: false,
      not_unit: true,
    },
    sound: {
      info: "dans les conditions normales de température et de pression, soit 20°C 1013.25 hPa.",
      label: "vitesse du son",
      divisor: 1234.8,
      pluralize: false,
      not_unit: true,
    },
    BMG50: {
      label: "balle .50 BMG",
      divisor: 3348,
      pluralize: false,
      not_unit: true,
    },
    earth_rotation: {
      info: "vitesse de rotation à l'équateur.",
      label: "rotation de la Terre",
      divisor: 1674.36,
      pluralize: false,
      not_unit: true,
    },
    earth_revolution: {
      label: "révolution de la Terre",
      divisor: 107280,
      pluralize: false,
      not_unit: true,
    },
    light: {
      info: "vitesse de la lumière dans le vide",
      label: "vitesse de la lumière",
      divisor: 1079252848.8,
      pluralize: false,
      not_unit: true,
    },
  },
  radioactivité: {
    infos: {
      label:
        "pour un calcul plus précis de votre exposition annuelle aux rayonements ionisants, utilisez le simulateur de l'<a href='https://expop.irsn.fr' target='_blank'>IRSN</a>.",
      divisor: 999999999,
      pluralize: false,
    },
    bq: {
      label: "Bequerel",
      divisor: 1,
      pluralize: false,
    },
    cu: {
      label: "Curie",
      divisor: 37000000000,
      pluralize: false,
    },
    banana: {
      label: "banane",
      divisor: 19.5,
      not_unit: true,
    },
    potatoes: {
      label: "kg de pommes de terres",
      divisor: 170,
      pluralize: false,
      not_unit: true,
    },
    white_bread: {
      label: "kg de pain blanc",
      divisor: 546,
      pluralize: false,
      not_unit: true,
    },
    thea: {
      label: "kg de thé",
      divisor: 740,
      pluralize: false,
      not_unit: true,
    },
  },
  radioactivité_2: {
    infos: {
      label:
        "pour un calcul plus précis de votre exposition annuelle aux rayonements ionisants, utilisez le simulateur de l'<a href='https://expop.irsn.fr' target='_blank'>IRSN</a>.",
      divisor: 999999999,
      pluralize: false,
    },
    msv: {
      label: "mSv",
      divisor: 1,
    },
    sv: {
      label: "Sv",
      divisor: 1000,
    },
    rem: {
      label: "rem",
      divisor: 10,
    },
    mrem: {
      label: "mrem",
      divisor: 0.01,
    },
    banana: {
      label: "banane par jour",
      divisor: (6.2 / 1000000000) * 365 * 19.2 * 1000,
      not_unit: true,
    },
    cabbage: {
      label: "kg de chou par mois",
      divisor: (6.2 / 1000000000) * 150 * 12 * 1000,
      pluralize: false,
      not_unit: true,
    },
    white_bread: {
      label: "litres de vin par semaine",
      divisor: (6.2 / 1000000000) * 35 * 12 * 1000,
      pluralize: false,
      not_unit: true,
    },
    fish: {
      label: "kg de poisson par mois",
      divisor: (1.2 / 1000000) * 12 * 1000,
      pluralize: false,
      not_unit: true,
    },
    thea: {
      label: "kg de thé par an",
      divisor: (6.2 / 1000000000) * 740 * 1000,
      pluralize: false,
      not_unit: true,
    },
    mountain_1500: {
      label: "année en montagne à 1500m",
      divisor: 0.8,
      not_unit: true,
    },
    paris_newyork_AR: {
      info: 'selon les données de l\'<a href="https://www.irsn.fr/savoir-comprendre/sante/compagnies-aeriennes-fini-calcul-doses" target="_blank">IRSN</a>.',
      label: "vol Paris - New-York AR",
      divisor: 0.124,
      not_unit: true,
    },
    paris_tokyo_AR: {
      info: 'selon les données de l\'<a href="https://www.irsn.fr/savoir-comprendre/sante/compagnies-aeriennes-fini-calcul-doses" target="_blank">IRSN</a>.',
      label: "vol Paris - Tokyo AR",
      divisor: 0.196,
      not_unit: true,
    },
    annual_worker_max_dose: {
      label: "dose max dans le nucléaire",
      divisor: 20,
      not_unit: true,
    },
    month__astronaut: {
      label: "astronaute dans l'ISS par mois",
      divisor: 25,
      not_unit: true,
      pluralize: false,
    },
    lungs__radiography: {
      info: 'selon les données de l\'<a href="https://afcn.fgov.be/fr/dossiers/applications-medicales/comparaison-des-doses-de-rayonnements" target="_blank">AFCN</a>.',
      label: "radiographie pulmonaire",
      divisor: 0.06,
      not_unit: true,
    },
    mammography: {
      info: 'selon les données de l\'<a href="https://afcn.fgov.be/fr/dossiers/applications-medicales/comparaison-des-doses-de-rayonnements" target="_blank">AFCN</a>.',
      label: "mammographie",
      divisor: 0.3,
      not_unit: true,
    },
    lungs_ct_scan: {
      info: 'selon les données de l\'<a href="https://afcn.fgov.be/fr/dossiers/applications-medicales/comparaison-des-doses-de-rayonnements" target="_blank">AFCN</a>.',
      label: "scanner pulmonaire",
      divisor: 3,
      not_unit: true,
    },
    abdomen_ct_scan: {
      info: 'selon les données de l\'<a href="https://expop.irsn.fr/" target="_blank">IRSN</a>.',
      label: "scanner abdomino-pelvien",
      divisor: 9.5,
      not_unit: true,
    },
    PET_scan: {
      info: 'selon les données de l\'<a href="https://afcn.fgov.be/fr/dossiers/applications-medicales/comparaison-des-doses-de-rayonnements" target="_blank">AFCN</a>.',
      label: "PET Scan",
      divisor: 4.5,
      not_unit: true,
      pluralize: false,
    },
    dental_panoramic: {
      info: 'selon les données de l\'<a href="https://afcn.fgov.be/fr/dossiers/applications-medicales/comparaison-des-doses-de-rayonnements" target="_blank">AFCN</a>.',
      label: "panoramique dentaire",
      divisor: 0.01,
      not_unit: true,
      pluralize_all: true,
    },
  },
  température: {
    celsius: {
      label: "degré Celsius",
      divisor: 1,
      converter: temp_converter,
    },
    fahrenheit: {
      label: "degré Fahrenheit",
      divisor: 1,
      converter: temp_converter,
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
    },
    rankine: {
      label: "degré Rankine",
      divisor: 1,
      converter: temp_converter,
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
      label: "Guerre et Paix, ePub",
      divisor: 1557 * 8 * 1024,
      pluralize: false,
    },
    mp3_minute: {
      label: "minute de musique en MP3",
      divisor: 960 * 8 * 1024,
      pluralize: false,
    },
    wikipedia_fr: {
      label: "Wikipedia en français sans image",
      divisor: 17.33 * 8 * 1024 * 1024 * 1024,
      pluralize: false,
    },
    wikipedia_fr_images: {
      label: "Wikipedia en français avec images",
      divisor: 36.97 * 8 * 1024 * 1024 * 1024,
      pluralize: false,
    },
    h265_4k_10Mbs: {
      label: "heure de vidéo 4k H265 10Mb/s",
      divisor: 4.5 * 8 * 1024 * 1024 * 1024,
    },
    s23_4k_488Mbs: {
      label: "heure de vidéo 4k H265 60fps",
      divisor: 27.4219 * 8 * 1024 * 1024 * 1024,
    },
    prores_422_hq_4k_1768Mbs: {
      label: "heure de vidéo 4k ProRes 60fps 422 HQ",
      divisor: 798 * 8 * 1024 * 1024 * 1024,
    },
  },
}

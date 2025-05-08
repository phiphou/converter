import currency_converter from "../../converters/cypher_converter"

const currency = {
  infos: {
    label:
      "données de <a href='https://github.com/fawazahmed0/exchange-api' target='_blank' >exchange-api</a>, actualisées chaque jour.",
    divisor: 999999999,
    pluralize: false,
  },
  list: {
    af: {
      name: "Afghanistan",
      code: "afn",
      name_fr: "Afghani afghan",
    },
    al: {
      name: "Albanie",
      code: "all",
      name_fr: "Lek albanais",
    },
    dz: {
      name: "Algérie",
      code: "dzd",
      name_fr: "Dinar algérien",
    },
    as: {
      name: "Samoa américaines",
      code: "usd",
      name_fr: "Dollar américain",
    },
    ad: {
      name: "Andorre",
      code: "eur",
      name_fr: "Euro",
    },
    ao: {
      name: "Angola",
      code: "aoa",
      name_fr: "Kwanza angolais",
    },
    ai: {
      name: "Anguilla",
      code: "xcd",
      name_fr: "Dollar des Caraïbes orientales",
    },
    ag: {
      name: "Antigua-et-Barbuda",
      code: "xcd",
      name_fr: "Dollar des Caraïbes orientales",
    },
    ar: {
      name: "Argentine",
      code: "ars",
      name_fr: "Peso argentin",
    },
    am: {
      name: "Arménie",
      code: "amd",
      name_fr: "Dram arménien",
    },
    aw: {
      name: "Aruba",
      code: "awg",
      name_fr: "aruban florin",
    },
    au: {
      name: "Australie",
      code: "aud",
      name_fr: "Dollar australien",
    },
    at: {
      name: "Autriche",
      code: "eur",
      name_fr: "Euro",
    },
    az: {
      name: "Azerbaïdjan",
      code: "azn",
      name_fr: "Manat azerbaïdjanais",
    },
    bs: {
      name: "Bahamas",
      code: "bsd",
      name_fr: "Dollar bahaméen",
    },
    bh: {
      name: "Bahreïn",
      code: "bhd",
      name_fr: "Dinar bahreïni",
    },
    bd: {
      name: "Bangladesh",
      code: "bdt",
      name_fr: "Taka bangladais",
    },
    bb: {
      name: "Barbade",
      code: "bbd",
      name_fr: "Dollar barbadien",
    },
    by: {
      name: "Biélorussie",
      code: "byn",
      name_fr: "Rouble biélorusse",
    },
    be: {
      name: "Belgique",
      code: "eur",
      name_fr: "Euro",
    },
    bz: {
      name: "Belize",
      code: "bzd",
      name_fr: "Dollar bélizéen",
    },
    bj: {
      name: "Bénin",
      code: "xof",
      name_fr: "Franc CFA (BCEAO)",
    },
    bm: {
      name: "Bermudes",
      code: "bmd",
      name_fr: "Dollar bermudien",
    },
    bt: {
      name: "Bhoutan",
      code: "btn",
      name_fr: "Ngultrum bhoutanais",
    },
    bo: {
      name: "Bolivie",
      code: "bob",
      name_fr: "Boliviano bolivien",
    },
    ba: {
      name: "Bosnie-Herzégovine",
      code: "bam",
      name_fr: "Mark convertible bosnien",
    },
    bw: {
      name: "Botswana",
      code: "bwp",
      name_fr: "Pula botswanais",
    },
    bv: {
      name: "Île Bouvet",
      code: "nok",
      name_fr: "norwegian krone",
    },
    br: {
      name: "Brésil",
      code: "brl",
      name_fr: "Réal brésilien",
    },
    io: {
      name: "Territoire britannique de l'océan Indien",
      code: "usd",
      name_fr: "us dollar",
    },
    bn: {
      name: "Brunei",
      code: "bnd",
      name_fr: "Dollar brunéien",
    },
    bg: {
      name: "Bulgarie",
      code: "bgn",
      name_fr: "Lev bulgare",
    },
    bf: {
      name: "Burkina Faso",
      code: "xof",
      name_fr: "Franc CFA (BCEAO)",
    },
    bi: {
      name: "Burundi",
      code: "bif",
      name_fr: "Franc burundais",
    },
    cv: {
      name: "Cap-Vert",
      code: "cve",
      name_fr: "Escudo cap-verdien",
    },
    kh: {
      name: "Cambodge",
      code: "khr",
      name_fr: "Riel cambodgien",
    },
    cm: {
      name: "Cameroun",
      code: "xaf",
      name_fr: "Franc CFA (BEAC)",
    },
    ca: {
      name: "Canada",
      code: "cad",
      name_fr: "Dollar canadien",
    },
    ky: {
      name: "Îles Caïmans",
      code: "kyd",
      name_fr: "cayman islands dollar",
    },
    cf: {
      name: "République centrafricaine",
      code: "xaf",
      name_fr: "Franc CFA (BEAC)",
    },
    td: {
      name: "Tchad",
      code: "xaf",
      name_fr: "Franc CFA (BEAC)",
    },
    cl: {
      name: "Chili",
      code: "clp",
      name_fr: "Peso chilien",
    },
    cn: {
      name: "Chine",
      code: "cny",
      name_fr: "Yuan renminbi chinois",
    },
    cx: {
      name: "Île Christmas",
      code: "aud",
      name_fr: "australian dollar",
    },
    cc: {
      name: "Îles Cocos",
      code: "aud",
      name_fr: "australian dollar",
    },
    co: {
      name: "Colombie",
      code: "cop",
      name_fr: "Peso colombien",
    },
    km: {
      name: "Comores",
      code: "kmf",
      name_fr: "Franc comorien",
    },
    cd: {
      name: "République démocratique du Congo",
      code: "cdf",
      name_fr: "Franc congolais",
    },
    cg: {
      name: "République du Congo",
      code: "xaf",
      name_fr: "Franc CFA (BEAC)",
    },
    ck: {
      name: "Îles Cook",
      code: "nzd",
      name_fr: "new zealand dollar",
    },
    cr: {
      name: "Costa Rica",
      code: "crc",
      name_fr: "Colón costaricain",
    },
    hr: {
      name: "Croatie",
      code: "hrk",
      name_fr: "Kuna croate",
    },
    cu: {
      name: "Cuba",
      code: "cup",
      name_fr: "Peso cubain",
    },
    cw: {
      name: "Curaçao",
      code: "ang",
      name_fr: "netherlands antillean guilder",
    },
    cy: {
      name: "Chypre",
      code: "eur",
      name_fr: "Euro",
    },
    ci: {
      name: "Côte d'Ivoire",
      code: "xof",
      name_fr: "Franc CFA (BCEAO)",
    },
    dk: {
      name: "Danemark",
      code: "dkk",
      name_fr: "Couronne danoise",
    },
    dj: {
      name: "Djibouti",
      code: "djf",
      name_fr: "Franc djiboutien",
    },
    dm: {
      name: "Dominique",
      code: "xcd",
      name_fr: "Dollar des Caraïbes orientales",
    },
    do: {
      name: "République dominicaine",
      code: "dop",
      name_fr: "Peso dominicain",
    },
    ec: {
      name: "Équateur",
      code: "usd",
      name_fr: "Dollar américain",
    },
    eg: {
      name: "Égypte",
      code: "egp",
      name_fr: "Livre égyptienne",
    },
    sv: {
      name: "Salvador",
      code: "usd",
      name_fr: "Dollar américain",
    },
    gq: {
      name: "Guinée équatoriale",
      code: "xaf",
      name_fr: "Franc CFA (BEAC)",
    },
    er: {
      name: "Érythrée",
      code: "ern",
      name_fr: "Nakfa érythréen",
    },
    ee: {
      name: "Estonie",
      code: "eur",
      name_fr: "Euro",
    },
    et: {
      name: "Éthiopie",
      code: "etb",
      name_fr: "Birr éthiopien",
    },
    fk: {
      name: "Malouines",
      code: "fkp",
      name_fr: "falkland islands pound",
    },
    fo: {
      name: "Îles Féroé",
      code: "dkk",
      name_fr: "danish krone",
    },
    fj: {
      name: "Fidji",
      code: "fjd",
      name_fr: "Dollar fidjien",
    },
    fi: {
      name: "Finlande",
      code: "eur",
      name_fr: "Euro",
    },
    fr: {
      name: "France",
      code: "eur",
      name_fr: "Euro",
    },
    gf: {
      name: "Guyane",
      code: "eur",
      name_fr: "Euro",
    },
    pf: {
      name: "Polynésie française",
      code: "xpf",
      name_fr: "Franc CFP",
    },
    tf: {
      name: "Terres australes et antarctiques françaises",
      code: "eur",
      name_fr: "euro",
    },
    ga: {
      name: "Gabon",
      code: "xaf",
      name_fr: "Franc CFA (BEAC)",
    },
    gm: {
      name: "Gambie",
      code: "gmd",
      name_fr: "Dalasi gambien",
    },
    ge: {
      name: "Géorgie",
      code: "gel",
      name_fr: "Lari géorgien",
    },
    de: {
      name: "Allemagne",
      code: "eur",
      name_fr: "Euro",
    },
    gh: {
      name: "Ghana",
      code: "ghs",
      name_fr: "Cedi ghanéen",
    },
    gi: {
      name: "Gibraltar",
      code: "gip",
      name_fr: "gibraltar pound",
    },
    gr: {
      name: "Grèce",
      code: "eur",
      name_fr: "Euro",
    },
    gl: {
      name: "Groenland",
      code: "dkk",
      name_fr: "danish krone",
    },
    gd: {
      name: "Grenade",
      code: "xcd",
      name_fr: "Dollar des Caraïbes orientales",
    },
    gp: {
      name: "Guadeloupe",
      code: "eur",
      name_fr: "euro",
    },
    gu: {
      name: "Guam",
      code: "usd",
      name_fr: "us dollar",
    },
    gt: {
      name: "Guatemala",
      code: "gtq",
      name_fr: "Quetzal guatémaltèque",
    },
    gg: {
      name: "Guernesey",
      code: "gbp",
      name_fr: "pound sterling",
    },
    gn: {
      name: "Guinée",
      code: "gnf",
      name_fr: "Franc guinéen",
    },
    gw: {
      name: "Guinée-Bissau",
      code: "xof",
      name_fr: "Franc CFA (BCEAO)",
    },
    gy: {
      name: "Guyana",
      code: "gyd",
      name_fr: "Dollar guyanien",
    },
    ht: {
      name: "Haïti",
      code: "htg",
      name_fr: "Gourde haïtienne",
    },
    hm: {
      name: "Îles Heard-et-MacDonald",
      code: "aud",
      name_fr: "australian dollar",
    },
    va: {
      name: "Saint-Siège (État de la Cité du Vatican)",
      code: "eur",
      name_fr: "euro",
    },
    hn: {
      name: "Honduras",
      code: "hnl",
      name_fr: "Lempira hondurien",
    },
    hk: {
      name: "Hong Kong",
      code: "hkd",
      name_fr: "Dollar de Hong Kong",
    },
    hu: {
      name: "Hongrie",
      code: "huf",
      name_fr: "Forint hongrois",
    },
    is: {
      name: "Islande",
      code: "isk",
      name_fr: "Couronne islandaise",
    },
    in: {
      name: "Inde",
      code: "inr",
      name_fr: "Roupie indienne",
    },
    id: {
      name: "Indonésie",
      code: "idr",
      name_fr: "Roupie indonésienne",
    },
    ir: {
      name: "Iran",
      code: "irr",
      name_fr: "Rial iranien",
    },
    iq: {
      name: "Irak",
      code: "iqd",
      name_fr: "Dinar irakien",
    },
    ie: {
      name: "Irlande",
      code: "eur",
      name_fr: "Euro",
    },
    im: {
      name: "Île de Man",
      code: "gbp",
      name_fr: "pound sterling",
    },
    il: {
      name: "Israël",
      code: "ils",
      name_fr: "Shekel israélien",
    },
    it: {
      name: "Italie",
      code: "eur",
      name_fr: "Euro",
    },
    jm: {
      name: "Jamaïque",
      code: "jmd",
      name_fr: "Dollar jamaïcain",
    },
    jp: {
      name: "Japon",
      code: "jpy",
      name_fr: "Yen japonais",
    },
    je: {
      name: "Jersey",
      code: "gbp",
      name_fr: "pound sterling",
    },
    jo: {
      name: "Jordanie",
      code: "jod",
      name_fr: "Dinar jordanien",
    },
    kz: {
      name: "Kazakhstan",
      code: "kzt",
      name_fr: "Tenge kazakh",
    },
    ke: {
      name: "Kenya",
      code: "kes",
      name_fr: "Shilling kényan",
    },
    ki: {
      name: "Kiribati",
      code: "aud",
      name_fr: "australian dollar",
    },
    kr: {
      name: "Corée du Sud",
      code: "krw",
      name_fr: "Won sud-coréen",
    },
    kw: {
      name: "Koweït",
      code: "kwd",
      name_fr: "Dinar koweïtien",
    },
    kg: {
      name: "Kirghizistan",
      code: "kgs",
      name_fr: "Som kirghize",
    },
    lv: {
      name: "Lettonie",
      code: "eur",
      name_fr: "Euro",
    },
    lb: {
      name: "Liban",
      code: "lbp",
      name_fr: "Livre libanaise",
    },
    ls: {
      name: "Lesotho",
      code: "lsl",
      name_fr: "Loti lesothan",
    },
    lr: {
      name: "Liberia",
      code: "lrd",
      name_fr: "Dollar libérien",
    },
    ly: {
      name: "Libye",
      code: "lyd",
      name_fr: "Dinar libyen",
    },
    li: {
      name: "Liechtenstein",
      code: "chf",
      name_fr: "Franc suisse",
    },
    lt: {
      name: "Lituanie",
      code: "eur",
      name_fr: "Euro",
    },
    lu: {
      name: "Luxembourg",
      code: "eur",
      name_fr: "Euro",
    },
    mo: {
      name: "Macao",
      code: "mop",
      name_fr: "Pataca macanaise",
    },
    mg: {
      name: "Madagascar",
      code: "mga",
      name_fr: "Ariary malgache",
    },
    mw: {
      name: "Malawi",
      code: "mwk",
      name_fr: "Kwacha malawite",
    },
    my: {
      name: "Malaisie",
      code: "myr",
      name_fr: "Ringgit malaisien",
    },
    mv: {
      name: "Maldives",
      code: "mvr",
      name_fr: "Rufiyaa maldivienne",
    },
    ml: {
      name: "Mali",
      code: "xof",
      name_fr: "Franc CFA (BCEAO)",
    },
    mt: {
      name: "Malte",
      code: "eur",
      name_fr: "Euro",
    },
    mh: {
      name: "Îles Marshall",
      code: "usd",
      name_fr: "Dollar américain",
    },
    mq: {
      name: "Martinique",
      code: "eur",
      name_fr: "euro",
    },
    mr: {
      name: "Mauritanie",
      code: "mru",
      name_fr: "Ouguiya mauritanienne",
    },
    mu: {
      name: "Maurice",
      code: "mur",
      name_fr: "Roupie mauricienne",
    },
    yt: {
      name: "Mayotte",
      code: "eur",
      name_fr: "euro",
    },
    mx: {
      name: "Mexique",
      code: "mxn",
      name_fr: "Peso mexicain",
    },
    fm: {
      name: "États fédérés de Micronésie",
      code: "usd",
      name_fr: "Dollar américain",
    },
    md: {
      name: "Moldavie",
      code: "mdl",
      name_fr: "Leu moldave",
    },
    mc: {
      name: "Monaco",
      code: "eur",
      name_fr: "Euro",
    },
    mn: {
      name: "Mongolie",
      code: "mnt",
      name_fr: "Tugrik mongol",
    },
    me: {
      name: "Monténégro",
      code: "eur",
      name_fr: "Euro",
    },
    ms: {
      name: "Montserrat",
      code: "xcd",
      name_fr: "east caribbean dollar",
    },
    ma: {
      name: "Maroc",
      code: "mad",
      name_fr: "Dirham marocain",
    },
    mz: {
      name: "Mozambique",
      code: "mzn",
      name_fr: "Metical mozambicain",
    },
    mm: {
      name: "Birmanie",
      code: "mmk",
      name_fr: "Kyat birman",
    },
    na: {
      name: "Namibie",
      code: "nad",
      name_fr: "Dollar namibien",
    },
    nr: {
      name: "Nauru",
      code: "aud",
      name_fr: "Dollar australien",
    },
    np: {
      name: "Népal",
      code: "npr",
      name_fr: "Roupie népalaise",
    },
    nl: {
      name: "Pays-Bas",
      code: "eur",
      name_fr: "Euro",
    },
    nc: {
      name: "Nouvelle-Calédonie",
      code: "xpf",
      name_fr: "Franc CFP",
    },
    nz: {
      name: "Nouvelle-Zélande",
      code: "nzd",
      name_fr: "Dollar néo-zélandais",
    },
    ni: {
      name: "Nicaragua",
      code: "nio",
      name_fr: "Córdoba nicaraguayen",
    },
    ne: {
      name: "Niger",
      code: "xof",
      name_fr: "Franc CFA (BCEAO)",
    },
    ng: {
      name: "Nigeria",
      code: "ngn",
      name_fr: "Naira nigérian",
    },
    nu: {
      name: "Niue",
      code: "nzd",
      name_fr: "new zealand dollar",
    },
    nf: {
      name: "Île Norfolk",
      code: "aud",
      name_fr: "australian dollar",
    },
    mp: {
      name: "Îles Mariannes du Nord",
      code: "usd",
      name_fr: "us dollar",
    },
    no: {
      name: "Norvège",
      code: "nok",
      name_fr: "Couronne norvégienne",
    },
    om: {
      name: "Oman",
      code: "omr",
      name_fr: "Rial omanais",
    },
    pk: {
      name: "Pakistan",
      code: "pkr",
      name_fr: "Roupie pakistanaise",
    },
    pw: {
      name: "Palaos",
      code: "usd",
      name_fr: "Dollar américain",
    },
    pa: {
      name: "Panama",
      code: "pab",
      name_fr: "Balboa panaméen",
    },
    pg: {
      name: "Papouasie-Nouvelle-Guinée",
      code: "pgk",
      name_fr: "Kina papou-néo-guinéen",
    },
    py: {
      name: "Paraguay",
      code: "pyg",
      name_fr: "Guarani paraguayen",
    },
    pe: {
      name: "Pérou",
      code: "pen",
      name_fr: "Sol péruvien",
    },
    ph: {
      name: "Philippines",
      code: "php",
      name_fr: "Peso philippin",
    },
    pn: {
      name: "Îles Pitcairn",
      code: "nzd",
      name_fr: "new zealand dollar",
    },
    pl: {
      name: "Pologne",
      code: "pln",
      name_fr: "Złoty polonais",
    },
    pt: {
      name: "Portugal",
      code: "eur",
      name_fr: "Euro",
    },
    pr: {
      name: "Porto Rico",
      code: "usd",
      name_fr: "us dollar",
    },
    qa: {
      name: "Qatar",
      code: "qar",
      name_fr: "Riyal qatari",
    },
    mk: {
      name: "Macédoine du Nord",
      code: "mkd",
      name_fr: "denar",
    },
    ro: {
      name: "Roumanie",
      code: "ron",
      name_fr: "Leu roumain",
    },
    ru: {
      name: "Russie",
      code: "rub",
      name_fr: "Rouble russe",
    },
    rw: {
      name: "Rwanda",
      code: "rwf",
      name_fr: "Franc rwandais",
    },
    re: {
      name: "La Réunion",
      code: "eur",
      name_fr: "euro",
    },
    bl: {
      name: "Saint-Barthélemy",
      code: "eur",
      name_fr: "euro",
    },
    kn: {
      name: "Saint-Christophe-et-Niévès",
      code: "xcd",
      name_fr: "Dollar des Caraïbes orientales",
    },
    lc: {
      name: "Sainte-Lucie",
      code: "xcd",
      name_fr: "Dollar des Caraïbes orientales",
    },
    mf: {
      name: "Saint-Martin",
      code: "eur",
      name_fr: "euro",
    },
    pm: {
      name: "Saint-Pierre-et-Miquelon",
      code: "eur",
      name_fr: "euro",
    },
    vc: {
      name: "Saint-Vincent-et-les-Grenadines",
      code: "xcd",
      name_fr: "Dollar des Caraïbes orientales",
    },
    ws: {
      name: "Samoa",
      code: "wst",
      name_fr: "Tala samoan",
    },
    sm: {
      name: "Saint-Marin",
      code: "eur",
      name_fr: "Euro",
    },
    st: {
      name: "Sao Tomé-et-Principe",
      code: "stn",
      name_fr: "Dobra santoméen",
    },
    sa: {
      name: "Arabie saoudite",
      code: "sar",
      name_fr: "Riyal saoudien",
    },
    sn: {
      name: "Sénégal",
      code: "xof",
      name_fr: "Franc CFA (BCEAO)",
    },
    rs: {
      name: "Serbie",
      code: "rsd",
      name_fr: "Dinar serbe",
    },
    sc: {
      name: "Seychelles",
      code: "scr",
      name_fr: "Roupie seychelloise",
    },
    sl: {
      name: "Sierra Leone",
      code: "sll",
      name_fr: "Leone sierra-léonais",
    },
    sg: {
      name: "Singapour",
      code: "sgd",
      name_fr: "Dollar de Singapour",
    },
    sx: {
      name: "Saint-Martin",
      code: "ang",
      name_fr: "netherlands antillean guilder",
    },
    sk: {
      name: "Slovaquie",
      code: "eur",
      name_fr: "Euro",
    },
    si: {
      name: "Slovénie",
      code: "eur",
      name_fr: "Euro",
    },
    sb: {
      name: "Îles Salomon",
      code: "sbd",
      name_fr: "solomon islands dollar",
    },
    so: {
      name: "Somalie",
      code: "sos",
      name_fr: "Shilling somalien",
    },
    za: {
      name: "Afrique du Sud",
      code: "zar",
      name_fr: "Rand sud-africain",
    },
    es: {
      name: "Espagne",
      code: "eur",
      name_fr: "Euro",
    },
    lk: {
      name: "Sri Lanka",
      code: "lkr",
      name_fr: "Roupie srilankaise",
    },
    sd: {
      name: "Soudan",
      code: "sdg",
      name_fr: "Livre soudanaise",
    },
    sr: {
      name: "Suriname",
      code: "srd",
      name_fr: "Dollar surinamais",
    },
    sj: {
      name: "Svalbard et île Jan Mayen",
      code: "nok",
      name_fr: "norwegian krone",
    },
    se: {
      name: "Suède",
      code: "sek",
      name_fr: "Couronne suédoise",
    },
    ch: {
      name: "Suisse",
      code: "chf",
      name_fr: "Franc suisse",
    },
    sy: {
      name: "Syrie",
      code: "syp",
      name_fr: "Livre syrienne",
    },
    tw: {
      name: "Taïwan (République de Chine)",
      code: "twd",
      name_fr: "new taiwan dollar",
    },
    tj: {
      name: "Tadjikistan",
      code: "tjs",
      name_fr: "Somoni tadjik",
    },
    th: {
      name: "Thaïlande",
      code: "thb",
      name_fr: "Baht thaïlandais",
    },
    tl: {
      name: "Timor oriental",
      code: "usd",
      name_fr: "Dollar américain",
    },
    tg: {
      name: "Togo",
      code: "xof",
      name_fr: "Franc CFA (BCEAO)",
    },
    tk: {
      name: "Tokelau",
      code: "nzd",
      name_fr: "new zealand dollar",
    },
    to: {
      name: "Tonga",
      code: "top",
      name_fr: "Paʻanga tongan",
    },
    tt: {
      name: "Trinité-et-Tobago",
      code: "ttd",
      name_fr: "Dollar trinidadien",
    },
    tn: {
      name: "Tunisie",
      code: "tnd",
      name_fr: "Dinar tunisien",
    },
    tr: {
      name: "Turquie",
      code: "try",
      name_fr: "Livre turque",
    },
    tm: {
      name: "Turkménistan",
      code: "tmt",
      name_fr: "Manat turkmène",
    },
    tc: {
      name: "Îles Turques-et-Caïques",
      code: "usd",
      name_fr: "us dollar",
    },
    tv: {
      name: "Tuvalu",
      code: "aud",
      name_fr: "Dollar australien",
    },
    ug: {
      name: "Ouganda",
      code: "ugx",
      name_fr: "Shilling ougandais",
    },
    ua: {
      name: "Ukraine",
      code: "uah",
      name_fr: "Hryvnia ukrainienne",
    },
    ae: {
      name: "Émirats arabes unis",
      code: "aed",
      name_fr: "Dirham des Émirats arabes unis",
    },
    gb: {
      name: "Royaume-Uni",
      code: "gbp",
      name_fr: "Livre sterling",
    },
    um: {
      name: "Îles mineures éloignées des États-Unis",
      code: "usd",
      name_fr: "us dollar",
    },
    us: {
      name: "États-Unis",
      code: "usd",
      name_fr: "Dollar américain",
    },
    uy: {
      name: "Uruguay",
      code: "uyu",
      name_fr: "Peso uruguayen",
    },
    uz: {
      name: "Ouzbékistan",
      code: "uzs",
      name_fr: "Sum ouzbek",
    },
    vu: {
      name: "Vanuatu",
      code: "vuv",
      name_fr: "Vatu vanuatuan",
    },
    ve: {
      name: "Venezuela",
      code: "vef",
      name_fr: "Bolivar vénézuélien",
    },
    vn: {
      name: "Viêt Nam",
      code: "vnd",
      name_fr: "Dong vietnamien",
    },
    vg: {
      name: "Îles Vierges britanniques",
      code: "usd",
      name_fr: "Dollar américain",
    },
    vi: {
      name: "Îles Vierges des États-Unis",
      code: "usd",
      name_fr: "us dollar",
    },
    wf: {
      name: "Wallis-et-Futuna",
      code: "xpf",
      name_fr: "cfp franc",
    },
    eh: {
      name: "République arabe sahraouie démocratique",
      code: "mad",
      name_fr: "moroccan dirham",
    },
    ye: {
      name: "Yémen",
      code: "yer",
      name_fr: "Rial yéménite",
    },
    zm: {
      name: "Zambie",
      code: "zmw",
      name_fr: "Kwacha zambien",
    },
    zw: {
      name: "Zimbabwe",
      code: "zwl",
      name_fr: "Dollar zimbabwéen",
    },
    ax: {
      name: "Îles Åland",
      code: "eur",
      name_fr: "euro",
    },
  },
  converter: currency_converter,
  pluralize: false,
  divisor: 1,
}

export default currency

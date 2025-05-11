import color_converter from "../../converters/color_converter"

const colors = {
  custom: "colors",
  infos: {
    // label:
    //   "plus d'infos sur les systèmes de numération sur <a href='https://fr.wikipedia.org/wiki/Syst%C3%A8me_de_num%C3%A9ration' target='_blank'>Wikipedia</a>.",
  },
  HEX: {
    label: "HEX",
    converter: color_converter,
    pluralize: true,
  },
  RGB: {
    label: "RGB",
    converter: color_converter,
    pluralize: true,
  },
  HSL: {
    label: "HSL",
    converter: color_converter,
    pluralize: true,
  },
  CMYK: {
    label: "CMYK",
    converter: color_converter,
    pluralize: true,
  },
  HSV: {
    label: "HSV",
    converter: color_converter,
    pluralize: true,
  },
  LAB: {
    label: "LAB",
    converter: color_converter,
    pluralize: true,
  },
  // LCH: {
  //   label: "LCH",
  //   converter: color_converter,
  //   pluralize: true,
  // },
  // XYZ: {
  //   label: "XYZ",
  //   converter: color_converter,
  //   pluralize: true,
  // },
  // YUV: {
  //   label: "YUV",
  //   converter: color_converter,
  //   pluralize: true,
  // },
  // YIQ: {
  //   label: "YIQ",
  //   converter: color_converter,
  //   pluralize: true,
  // },
  // YCbCr: {
  //   label: "YCbCr",
  //   converter: color_converter,
  //   pluralize: true,
  // },
  // YPbPr: {
  //   label: "YPbPr",
  //   converter: color_converter,
  //   pluralize: true,
  // },
  // YDbDr: {
  //   label: "YDbDr",
  //   converter: color_converter,
  //   pluralize: true,
  // },
}

export default colors

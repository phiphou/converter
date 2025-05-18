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
    placeHolder: "format RRGGBB (sans #)",
  },
  RGB: {
    label: "RGB",
    converter: color_converter,
    pluralize: true,
    placeHolder: "format R,G,B",
  },
  HSL: {
    label: "HSL",
    converter: color_converter,
    pluralize: true,
    placeHolder: "format H,S,L",
  },
  CMYK: {
    label: "CMYK",
    converter: color_converter,
    pluralize: true,
    placeHolder: "format C,M,Y,K",
  },
  HSV: {
    label: "HSV",
    converter: color_converter,
    pluralize: true,
    placeHolder: "format H,S,V",
  },
  LAB: {
    label: "LAB",
    converter: color_converter,
    pluralize: true,
    placeHolder: "format L,a,b",
  },
  XYZ: {
    label: "XYZ",
    converter: color_converter,
    pluralize: true,
    placeHolder: "format X,Y,Z",
  },
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

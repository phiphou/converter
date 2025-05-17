import {numeric_converter} from "../../converters/numeric_converter"
import {babylonian_formater} from "../../formaters/babylonian_formater"
import {egyptian_formater} from "../../formaters/egyptian_formater"
import {kaktovik_formater} from "../../formaters/kaktovik_formater"
import {maya_formater} from "../../formaters/maya_formater"
import {cistercian_formater} from "../../formaters/sistercian_formater"

const numeric_system = {
  infos: {
    label:
      "plus d'infos sur les systèmes de numération sur <a href='https://fr.wikipedia.org/wiki/Syst%C3%A8me_de_num%C3%A9ration' target='_blank'>Wikipedia</a>.",
  },
  singleResult: true,
  no_precision: true,
  decimal: {
    label: "décimal",
    converter: numeric_converter,
    pluralize: true,
  },
  binary: {
    label: "binaire",
    converter: numeric_converter,
    pluralize: true,
  },
  octal: {
    label: "octal",
    converter: numeric_converter,
    pluralize: true,
  },
  hexadecimal: {
    label: "hexadécimal",
    converter: numeric_converter,
    pluralize: true,
  },
  sexagesimal: {
    label: "sexagésimal",
    converter: numeric_converter,
    pluralize: true,
  },
  roman: {
    label: "romain",
    converter: numeric_converter,
    pluralize: true,
  },
  egytian: {
    label: "égyptien",
    converter: numeric_converter,
    formater: egyptian_formater,
    pluralize: true,
  },
  maya: {
    label: "maya",
    converter: numeric_converter,
    formater: maya_formater,
    pluralize: true,
  },
  babylonian: {
    label: "babylonien",
    converter: numeric_converter,
    formater: babylonian_formater,
    pluralize: true,
  },
  cistercian: {
    label: "cistercien",
    converter: numeric_converter,
    formater: cistercian_formater,
    pluralize: true,
    max: 9999,
  },
  kaktovik: {
    label: "kaktovik",
    converter: numeric_converter,
    formater: kaktovik_formater,
    pluralize: true,
  },
}

export default numeric_system

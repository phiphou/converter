import {pigpen_formater} from "../../formaters/pigpen_formater"
import cypher_converter from "../../converters/cypher_converter"
import {chappe_formater} from "../../formaters/chappe_formater"

const codes = {
  custom: "codes",
  infos: {
    // label:
    //   "plus d'infos sur les systèmes de numération sur <a href='https://fr.wikipedia.org/wiki/Syst%C3%A8me_de_num%C3%A9ration' target='_blank'>Wikipedia</a>.",
  },
  rotation: {
    label: "rotation",
    converter: cypher_converter,
    pluralize: true,
    withKey: true,
  },
  replace: {
    label: "substitution",
    converter: cypher_converter,
    pluralize: true,
    noSwitch: true,
    withKey: true,
  },
  vigenere: {
    label: "vigenere",
    converter: cypher_converter,
    pluralize: true,
    noSwitch: true,
    withKey: true,
  },
  bacon: {
    label: "bacon",
    converter: cypher_converter,
    pluralize: true,
    noSwitch: true,
  },
  braille: {
    label: "braille",
    converter: cypher_converter,
    pluralize: true,
    noSwitch: true,
  },
  morse: {
    label: "morse",
    converter: cypher_converter,
    pluralize: true,
    noSwitch: true,
  },
  pigpen: {
    label: "Pigpen",
    converter: cypher_converter,
    formater: pigpen_formater,
    pluralize: true,
    noSwitch: true,
  },
  chappe: {
    label: "Chappe",
    converter: cypher_converter,
    formater: chappe_formater,
    pluralize: true,
    noSwitch: true,
  },
}

export default codes

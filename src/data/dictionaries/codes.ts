import cypher_converter from "../../converters/cypher_converter"

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
}

export default codes

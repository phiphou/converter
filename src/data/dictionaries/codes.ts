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
  },
  replace: {
    label: "substitution",
    converter: cypher_converter,
    pluralize: true,
  },
  vigenere: {
    label: "vigenere",
    converter: cypher_converter,
    pluralize: true,
  },
  morse: {
    label: "morse",
    converter: cypher_converter,
    pluralize: true,
  },
}

export default codes

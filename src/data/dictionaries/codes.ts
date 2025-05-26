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
    info: 'plus d\'information sur les codes par rotation sur <a href="https://fr.wikipedia.org/wiki/ROT13" target="_blank">Wikipedia</a>.',
    label: "rotation",
    converter: cypher_converter,
    pluralize: true,
    withKey: true,
  },
  replace: {
    info: 'plus d\'information sur les codes par substitution sur <a href="https://fr.wikipedia.org/wiki/Chiffrement_par_substitution" target="_blank">Wikipedia</a>.',
    label: "substitution",
    converter: cypher_converter,
    pluralize: true,
    noSwitch: true,
    withKey: true,
  },
  vigenere: {
    info: 'plus d\'information sur le chiffre de Vigenère sur <a href="https://fr.wikipedia.org/wiki/Chiffre_de_Vigen%C3%A8re" target="_blank">Wikipedia</a>.',
    label: "chiffre de Vigenère",
    converter: cypher_converter,
    pluralize: true,
    noSwitch: true,
    withKey: true,
  },
  beaufort: {
    info: 'plus d\'information sur le chiffre de Beaufort sur <a href="https://fr.wikipedia.org/wiki/Chiffre_de_Beaufort" target="_blank">Wikipedia</a>.',
    label: "code de Beaufort",
    converter: cypher_converter,
    pluralize: true,
    noSwitch: true,
    withKey: true,
  },
  polybe: {
    info: 'plus d\'information sur le carré Polybe sur <a href="https://fr.wikipedia.org/wiki/Carr%C3%A9_de_Polybe" target="_blank">Wikipedia</a>.',
    label: "carré de Polybe",
    converter: cypher_converter,
    pluralize: true,
    noSwitch: true,
  },
  bacon: {
    info: 'plus d\'information sur le chiffre de Bacon sur <a href="https://en.wikipedia.org/wiki/Bacon%27s_cipher" target="_blank">Wikipedia</a>.',
    label: "code de Bacon",
    converter: cypher_converter,
    pluralize: true,
    noSwitch: true,
  },
  braille: {
    info: 'plus d\'information sur le braille sur <a href="https://fr.wikipedia.org/wiki/Braille" target="_blank">Wikipedia</a>.',
    label: "code Braille",
    converter: cypher_converter,
    pluralize: true,
    noSwitch: true,
  },
  morse: {
    info: 'plus d\'information sur le code Morse sur <a href="https://fr.wikipedia.org/wiki/Code_Morse" target="_blank">Wikipedia</a>.',
    label: "code Morse",
    converter: cypher_converter,
    pluralize: true,
    noSwitch: true,
  },
  pigpen: {
    info: 'plus d\'information sur le code Pigpen sur <a href="https://fr.wikipedia.org/wiki/Chiffre_des_francs-ma%C3%A7ons" target="_blank">Wikipedia</a>.',
    label: "code Pigpen",
    converter: cypher_converter,
    formater: pigpen_formater,
    pluralize: true,
    noSwitch: true,
  },
  chappe: {
    info: 'Attention, ici il s\'agit d\'un système simplifié (une position = une lettre). Le vrai code Chappe associe un nombre à chaque position, puis on utilise un dictionnaire particulier pour convertir ces nombres en mots. Plus d\'information sur le code Chappe sur <a href="https://fr.wikipedia.org/wiki/Chappe_(t%C3%A9l%C3%A9graphe)" target="_blank">Wikipedia</a>.',
    label: "code de Chappe",
    converter: cypher_converter,
    formater: chappe_formater,
    pluralize: true,
    noSwitch: true,
  },
}

export default codes

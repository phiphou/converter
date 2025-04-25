import {decibel_converter} from "../../converters/decibel_converter"

const sound_intensity = {
  infos: {
    label:
      "plus d'infos sur l'intensité acoustique sur <a href='https://fr.wikipedia.org/wiki/Intensit%C3%A9_acoustique' target='_blank'>Wikipedia</a>.",
    divisor: 999999999,
    pluralize: false,
  },
  Wm2: {
    label: "W/m²",
    divisor: 1,
    converter: decibel_converter,
  },
  mWm2: {
    label: "mW/m²",
    divisor: 1,
    converter: decibel_converter,
  },
  dB: {
    label: "décibel",
    divisor: 1,
    converter: decibel_converter,
  },
}

export default sound_intensity

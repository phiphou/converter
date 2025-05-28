import {freefall_converter} from "../../converters/freefall_converter"

const freefall = {
  custom: "freefall",
  height: {
    label: "hauteur de chute",
    divisor: 1,
    converter: freefall_converter,
  },
  time: {
    label: "durée de la chute",
    divisor: 1,
    converter: freefall_converter,
  },
  speed: {
    label: "vitesse à l'impact",
    divisor: 1,
    converter: freefall_converter,
  },
}

export default freefall

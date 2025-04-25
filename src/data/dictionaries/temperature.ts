import {temp_converter} from "../../converters/temp_converter"

const temperature = {
  celsius: {
    label: "degré Celsius",
    divisor: 1,
    converter: temp_converter,
  },
  fahrenheit: {
    label: "degré Fahrenheit",
    divisor: 1,
    converter: temp_converter,
  },
  kelvin: {
    label: "Kelvin",
    divisor: 1,
    converter: temp_converter,
    pluralize: false,
  },
  réaumur: {
    label: "degré Réaumur",
    divisor: 1,
    converter: temp_converter,
  },
  rankine: {
    label: "degré Rankine",
    divisor: 1,
    converter: temp_converter,
  },
}

export default temperature

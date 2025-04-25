import {date_converter} from "../../converters/date_converter"

const date = {
  input: "date",
  gregorian: {
    label: "calendrier grégorien",
    divisor: 1,
    converter: date_converter,
  },
  arabic: {
    label: "calendrier arabe",
    divisor: 1,
    converter: date_converter,
  },
  jexwish: {
    label: "calendrier juif",
    divisor: 1,
    converter: date_converter,
  },
  persian: {
    label: "calendrier perse",
    divisor: 1,
    converter: date_converter,
  },
  chinese: {
    label: "calendrier chinois",
    divisor: 1,
    converter: date_converter,
  },
  japonais: {
    label: "calendrier japonais",
    divisor: 1,
    converter: date_converter,
  },
  hindi: {
    label: "calendrier indien",
    divisor: 1,
    converter: date_converter,
  },
}

export default date

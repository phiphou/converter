import inflation_converter from "../../converters/inflation_converter"

const inflation = {
  custom: "inflation",
  infos: {
    label: "données de <a href='https://france-inflation.com/' target='_blank'>france-inflation.com</a>.",
  },
  base: {
    label: "base",
    converter: inflation_converter,
    pluralize: true,
  },
}

export default inflation

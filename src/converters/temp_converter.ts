import {Unit} from "../types"

const conversionMap: Record<string, (v: number) => number> = {
  "degré Celsius:degré Fahrenheit": (v) => (v * 9) / 5 + 32,
  "degré Celsius:Kelvin": (v) => v + 273.15,
  "degré Celsius:degré Réaumur": (v) => v * 0.8,
  "degré Fahrenheit:degré Celsius": (v) => ((v - 32) * 5) / 9,
  "degré Fahrenheit:Kelvin": (v) => ((v - 32) * 5) / 9 + 273.15,
  "degré Fahrenheit:degré Réaumur": (v) => ((((v - 32) * 5) / 9 + 273.15) * 5) / 4,
  "Kelvin:degré Celsius": (v) => v - 273.15,
  "Kelvin:degré Fahrenheit": (v) => ((v - 273.15) * 9) / 5 + 32,
  "Kelvin:degré Réaumur": (v) => ((v - 273.15) * 4) / 5,
  "degré Réaumur:degré Celsius": (v) => v * 1.25,
  "degré Réaumur:degré Fahrenheit": (v) => v * 2.25 + 32,
  "degré Réaumur:Kelvin": (v) => v * 1.25 + 273.15,
}

export const temp_converter = (value: number, unitFrom: Unit, unitTo: Unit): number => {
  if (unitFrom.label === unitTo.label) return value

  const key = `${unitFrom.label}:${unitTo.label}`
  const conversionFunction = conversionMap[key]

  if (!conversionFunction) throw new Error(`Unsupported conversion from ${unitFrom.label} to ${unitTo.label}`)

  return conversionFunction(value)
}

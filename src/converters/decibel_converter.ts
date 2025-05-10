import {Unit} from "../types/types"

const conversionMap: Record<string, (v: number) => number> = {
  "W/m²:décibel": (v) => 10 * Math.log10(v / 1e-12),
  "mW/m²:décibel": (v) => 10 * Math.log10((v * 1000) / 1e-12),
  "décibel:W/m²": (v) => 1e-12 * Math.pow(10, v / 10),
  "décibel:mW/m²": (v) => (1e-12 * Math.pow(10, v / 10)) / 1000,
}

export const decibel_converter = (value: number, unitFrom: Unit, unitTo: Unit): number => {
  if (unitFrom.label === unitTo.label) return value

  const key = `${unitFrom.label}:${unitTo.label}`
  const conversionFunction = conversionMap[key]

  if (!conversionFunction) throw new Error(`Unsupported conversion from ${unitFrom.label} to ${unitTo.label}`)

  return conversionFunction(value)
}

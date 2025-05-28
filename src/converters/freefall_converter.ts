import {Unit} from "../types/types"

type FreefallResult = {
  "vitesse à l'impact": number
  "hauteur de chute": number
  "durée de la chute": number
}

const fromHeight = (value: number): FreefallResult => {
  const result: FreefallResult = {
    "vitesse à l'impact": Math.sqrt(2 * value * 9.81),
    "hauteur de chute": value,
    "durée de la chute": Math.sqrt((2 * value) / 9.81),
  }
  return result
}
const fromTime = (value: number): FreefallResult => {
  const result: FreefallResult = {
    "vitesse à l'impact": 9.81 * value,
    "hauteur de chute": (1 / 2) * 9.81 * value * value,
    "durée de la chute": value,
  }
  return result
}

const fromSpeed = (value: number): FreefallResult => {
  const result: FreefallResult = {
    "vitesse à l'impact": value,
    "hauteur de chute": (value * value) / (2 * 9.81),
    "durée de la chute": (2 * ((value * value) / (2 * 9.81))) / value,
  }
  return result
}

const compute = async (value: number, unitTo: Unit): Promise<FreefallResult> => {
  switch (unitTo.label) {
    case "vitesse à l'impact":
      return fromSpeed(value)
    case "hauteur de chute":
      return fromHeight(value)
    case "durée de la chute":
      return fromTime(value)
    default:
      throw new Error("Unit not supported")
  }
}

export const freefall_converter = async (value: string, unitTo: Unit): Promise<FreefallResult> => {
  if (!unitTo) return {"vitesse à l'impact": 0, "hauteur de chute": 0, "durée de la chute": 0}

  const numericValue = parseFloat(value)
  if (isNaN(numericValue)) throw new Error("Invalid value")

  const result: FreefallResult = await compute(numericValue, unitTo)
  return result
}

export default freefall_converter

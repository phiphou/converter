import {Unit} from "../types/types"

type FreefallResult = {
  speed: number
  height: number
  time: number
}

const fromHeight = (value: number): FreefallResult => {
  const result: FreefallResult = {
    speed: Math.sqrt(2 * value * 9.81),
    height: value,
    time: Math.sqrt((2 * value) / 9.81),
  }
  return result
}
const fromTime = (value: number): FreefallResult => {
  const result: FreefallResult = {
    speed: 9.81 * value,
    height: (1 / 2) * 9.81 * value * value,
    time: value,
  }
  return result
}

const fromSpeed = (value: number): FreefallResult => {
  const result: FreefallResult = {
    speed: value,
    height: (value * value) / (2 * 9.81),
    time: (2 * ((value * value) / (2 * 9.81))) / value,
  }
  return result
}

const compute = async (value: number, unitTo: Unit): Promise<FreefallResult> => {
  switch (unitTo.label) {
    case "vitesse à l'impact":
      return fromSpeed(value)
    case "hauteur de chute":
      return fromHeight(value)
    case "temps de chute":
      return fromTime(value)
    default:
      throw new Error("Unit not supported")
  }
}

export const freefall_converter = async (value: string, unitTo: Unit): Promise<FreefallResult> => {
  if (!unitTo) return {speed: 0, height: 0, time: 0}

  const numericValue = parseFloat(value)
  if (isNaN(numericValue)) throw new Error("Invalid value")

  const result: FreefallResult = await compute(numericValue, unitTo)
  return result
}

export default freefall_converter

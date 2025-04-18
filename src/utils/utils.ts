import {Unit} from "../types"

export const pluralize = (result: number | null, label: string, unit: Unit): string => {
  if (!unit) return label

  const shouldPluralize = result !== null && result >= 2
  const processWord = (word: string, index: number): string => {
    if (unit.pluralize_all || (!unit.pluralize && index === 0)) {
      return shouldPluralize ? (word.endsWith("s") ? word : word + "s") : word.endsWith("s") ? word.slice(0, -1) : word
    }
    return word
  }

  return label.split(" ").map(processWord).join(" ")
}

function roundNumber(number: number, digits: number) {
  const multiple = Math.pow(10, digits)
  const rndedNum = Math.round(number * multiple) / multiple
  return rndedNum
}

export const scientific_notation = (value: number | null, precision: number): string => {
  const superscriptMap = {
    "0": "⁰",
    "1": "¹",
    "2": "²",
    "3": "³",
    "4": "⁴",
    "5": "⁵",
    "6": "⁶",
    "7": "⁷",
    "8": "⁸",
    "9": "⁹",
    "-": "⁻",
  }

  if (value === 0) return "0"

  if (value === null) throw new Error("Value cannot be null")
  const scientific = roundNumber(value, precision).toExponential().split("e")
  const coefficient = parseFloat(scientific[0])
  const exponent = parseInt(scientific[1], 10).toString()

  const unicodeExponent = exponent
    .split("")
    .map((char) => superscriptMap[char as keyof typeof superscriptMap] || char)
    .join("")

  return `${coefficient}×10${unicodeExponent}`
}

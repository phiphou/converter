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

const toExponentialString = (value: number): string => {
  const superscriptMap: Record<string, string> = {
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

  return value !== 0
    ? value
        .toString()
        .split("")
        .map((char) => superscriptMap[char] || char)
        .join("")
    : ""
}

export const scientific_notation = (value: number | null, precision: number): string => {
  const integer_part: number = parseFloat((value + "").split(".")[0])
  const decimal_part: string = (value + "").split(".")[1] ? (value + "").split(".")[1] : ""
  const fixed_decimal_part: string = decimal_part.split("e")[0].slice(0, precision)
  const toexp = value?.toExponential(15).split("e")
  const fixed_integer: string = integer_part === 0 ? "1" : toexp?.[0]?.split(".")[0] || "0"
  const exponentPart = toexp?.[1] || "0"
  if (value) {
    const exponent: number = parseInt(exponentPart || "0")
    const no_decimal: boolean = decimal_part.startsWith("0") || decimal_part === ""

    return `${fixed_integer}${no_decimal ? "" : "." + fixed_decimal_part}${exponent !== 0 ? "×10" : ""}${toExponentialString(exponent)}`
  }
  return ""
}

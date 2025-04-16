import { Unit } from "../types"

export const pluralize = (
  result: number | null,
  label: string,
  unit: Unit
): string => {
  if (!unit) return label

  const shouldPluralize = result !== null && result >= 2
  const processWord = (word: string, index: number): string => {
    if (unit.pluralize_all || (unit.pluralize && index === 0)) {
      return shouldPluralize
        ? word.endsWith("s")
          ? word
          : word + "s"
        : word.endsWith("s")
          ? word.slice(0, -1)
          : word
    }
    return word
  }

  return label.split(" ").map(processWord).join(" ")
}

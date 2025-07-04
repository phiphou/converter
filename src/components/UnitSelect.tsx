import {Unit} from "../types/types"

interface UnitSelectProps {
  unit: string
  setUnit: (value: string) => void
  dictionary: Record<string, Unit>
  type?: string
}

function UnitSelect({unit, setUnit, dictionary, type}: UnitSelectProps) {
  return (
    <select
      data-testid={type === "from" ? "unit-from-select" : "unit-to-select"}
      value={unit}
      onChange={(e) => setUnit(e.target.value)}
      className="mr-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
    >
      {Object.keys(dictionary).map((key) => {
        if (!["infos", "noSwitch", "materials", "input", "singleResult", "custom", "no_precision"].includes(key)) {
          return (
            <option key={key} value={key}>
              {dictionary[key].label}
            </option>
          )
        }
      })}
    </select>
  )
}

export default UnitSelect

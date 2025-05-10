import {Unit} from "../types/types"

interface UnitSelectProps {
  unit: string
  setUnit: (value: string) => void
  dictionary: Record<string, Unit>
}

function UnitSelect({unit, setUnit, dictionary}: UnitSelectProps) {
  return (
    <select
      value={unit}
      onChange={(e) => setUnit(e.target.value)}
      className="mr-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
    >
      {Object.keys(dictionary).map((key) => {
        if (
          key !== "infos" &&
          key !== "noSwitch" &&
          key !== "materials" &&
          key !== "input" &&
          key != "singleResult" &&
          key != "custom"
        ) {
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

import { Unit } from '../types'

interface UnitSelectProps {
  unit: string
  setUnit: React.Dispatch<React.SetStateAction<string>>
  dictionary: Record<string, Unit>
}

function UnitSelect({ unit, setUnit, dictionary }: UnitSelectProps) {
  return (
    <select
      value={unit}
      onChange={(e) => setUnit(e.target.value)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
    >
      {Object.keys(dictionary).map((key) => {
        if (key !== 'infos') {
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

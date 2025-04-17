import {useState} from "react"
import {dictionaries} from "../data/dictionaries"
import UnitForm from "./UnitForm"

function Form() {
  const [category, setCategory] = useState<keyof typeof dictionaries | "">("")

  const selectedDictionary = category ? dictionaries[category] : null

  return (
    <div className="mxh flex flex-col">
      <div className="flex-grow">
        <div className="mt-5 min-w-full">
          <form className="mx-auto mb-8 max-w-sm">
            <select
              onChange={(e) => setCategory(e.target.value as keyof typeof dictionaries)}
              id="category"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value="">Choississez une catégorie</option>
              {Object.keys(dictionaries).map((key) => (
                <option key={key} value={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ")}
                </option>
              ))}
            </select>
          </form>
          {selectedDictionary && (
            <UnitForm
              label={category.charAt(0).toUpperCase() + category.slice(1).replace("_2", " ")}
              dictionary={selectedDictionary}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Form

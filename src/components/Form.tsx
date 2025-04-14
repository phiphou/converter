import { useState } from 'react'
import { dictionaries } from '../data/dictionaries'
import UnitForm from './UnitForm'

function Form() {
  const [category, setCategory] = useState<keyof typeof dictionaries | ''>('')

  const selectedDictionary = category ? dictionaries[category] : null

  return (
    <div className="flex flex-col mxh">
      <div className="flex-grow">
        <div className="min-w-full mt-5">
          <form className="max-w-sm mx-auto mb-5">
            <select
              onChange={(e) => setCategory(e.target.value as keyof typeof dictionaries)}
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Choississez une catégorie</option>
              {Object.keys(dictionaries).map((key) => (
                <option key={key} value={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}
                </option>
              ))}
            </select>
          </form>
          {selectedDictionary && (
            <UnitForm
              label={category.charAt(0).toUpperCase() + category.slice(1).replace('_2', ' ')}
              dictionary={selectedDictionary}
            />
          )}
        </div>
      </div>
      <footer className="text-center mt-5 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} @Phiphou Tous droits réservés. Contribuez sur{' '}
        <a href="http://github.com/phiphou/converter" target="_blank">
          Github
        </a>
      </footer>
    </div>
  )
}

export default Form

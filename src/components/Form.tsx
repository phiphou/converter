import {Suspense, useState} from "react"
import {categories} from "../data/categories"
import UnitForm from "./UnitForm"
import {Unit} from "../types/types"
import spinner from "../assets/icons/spinner.svg"
import Finance from "./Finance"
import Codes from "./Codes"
import Hash from "./Hash"
import Colors from "./Colors"
import Inflation from "./Inflation"
import Color_contrast from "./Color_contrast"
import Planets from "./Planets"
import Freefall from "./Freefall"

const customComponentMap: Record<string, React.ComponentType<{dictionary: Record<string, Unit>}>> = {
  finance: Finance,
  inflation: Inflation,
  codes: Codes,
  color_contrast: Color_contrast,
  colors: Colors,
  hash: Hash,
  planets: Planets,
  freefall: Freefall,
}

function Form() {
  const [category, setCategory] = useState<keyof typeof categories | "">("")
  const [selectedDictionary, setSelectedDictionary] = useState<Record<string, Unit> | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleCategoryChange = async (selectedCategory: string) => {
    setCategory(selectedCategory as keyof typeof categories | "")
    if (selectedCategory) {
      setSelectedDictionary(null)
      const spinnerTimeout = setTimeout(() => setIsLoading(true), 100)
      try {
        const dictionaryModule = await import(`../data/dictionaries/${selectedCategory}.ts`)
        setSelectedDictionary(dictionaryModule.default)
      } finally {
        clearTimeout(spinnerTimeout)
        setIsLoading(false)
      }
    } else {
      setSelectedDictionary(null)
      setIsLoading(false)
    }
  }

  const fallback = () => (
    <div>
      <div className="mx-auto text-center text-gray-500">
        <img src={spinner} className="mx-auto h-25 w-25" />
      </div>
    </div>
  )

  let content = null

  if (isLoading) {
    content = (
      <div className="mx-auto text-center text-gray-500">
        <img src={spinner} className="mx-auto h-25 w-25" />
      </div>
    )
  } else if (selectedDictionary && typeof selectedDictionary["custom"] === "string") {
    const CustomComponent = customComponentMap[selectedDictionary["custom"]]
    if (CustomComponent) {
      content = (
        <Suspense fallback={fallback()}>
          <CustomComponent dictionary={selectedDictionary} />
        </Suspense>
      )
    }
  } else if (selectedDictionary && !selectedDictionary["custom"]) {
    content = (
      <Suspense fallback={<div>Chargement</div>}>
        <UnitForm
          label={category.charAt(0).toUpperCase() + category.slice(1).replace("_2", " ")}
          dic={selectedDictionary}
        />
      </Suspense>
    )
  }

  return (
    <div className="mxh flex flex-col">
      <div className="flex-grow">
        <div className="mt-5 min-w-full">
          <form className="mx-auto mb-8 max-w-sm">
            <select
              onChange={(e) => handleCategoryChange(e.target.value)}
              id="category"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value="">Choississez une catégorie</option>
              {Object.keys(categories).map((key) => (
                <option key={key} value={key}>
                  {categories[key as keyof typeof categories].label.charAt(0).toUpperCase() +
                    categories[key as keyof typeof categories].label.slice(1)}
                </option>
              ))}
            </select>
          </form>
          {content}
        </div>
      </div>
    </div>
  )
}

export default Form

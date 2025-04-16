import { useState, useEffect } from "react"
import { Unit } from "../types"
import { pluralize } from "../utils/utils"
import UnitSelect from "./UnitSelect"
import InfosBlock from "./InfosBlock"
import SwitchUnitButton from "./SwitchUnitButton"

function UnitForm({
  label,
  dictionary,
}: {
  label: string
  dictionary: Record<string, Unit>
}) {
  const [unitFrom, setUnitFrom] = useState<string>("")
  const [unitTo, setUnitTo] = useState<string>("")
  const [rawValue, setRawValue] = useState<string>("1")
  const [value, setValue] = useState<number>(1)
  const [result, setResult] = useState<number | null>(1)

  useEffect(() => {
    const firstUnit =
      Object.keys(dictionary).find(
        (key) => key !== "infos" && dictionary[key]
      ) || ""
    setUnitFrom(firstUnit)
    setUnitTo(firstUnit)
  }, [dictionary])

  useEffect(() => {
    if (unitFrom && unitTo && dictionary[unitFrom] && dictionary[unitTo]) {
      const fromDivisor = dictionary[unitFrom].divisor
      const toDivisor = dictionary[unitTo].divisor
      if (unitFrom === unitTo) {
        setResult(value)
      } else if (
        dictionary[unitFrom].converter &&
        dictionary[unitFrom].converter === dictionary[unitTo].converter
      ) {
        setResult(
          dictionary[unitTo].converter(
            value,
            dictionary[unitFrom],
            dictionary[unitTo]
          )
        )
      } else {
        setResult((value * fromDivisor) / toDivisor)
      }
    } else {
      setResult(null)
    }
  }, [value, unitFrom, unitTo, dictionary])

  const switchUnits = () => {
    setUnitFrom(unitTo)
    setUnitTo(unitFrom)
  }

  return (
    <div>
      <div className="mx-auto mt-5 mb-5 flex min-w-full flex-col items-baseline justify-items-center">
        <div className="mx-auto mb-5 flex flex-col justify-items-center gap-6 md:flex-row">
          <input
            type="number"
            min={0}
            className="mr-3 block w-40 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder={label}
            value={rawValue}
            onKeyDown={(e) => {
              if (e.key === "-") e.preventDefault()
            }}
            onChange={(e) => {
              const inputValue = e.target.value.replace(",", ".")
              setRawValue(inputValue)
              const numericValue = parseFloat(inputValue)
              if (!isNaN(numericValue)) setValue(numericValue)
            }}
          />
          <div className="flex gap-2">
            <UnitSelect
              unit={unitFrom}
              setUnit={setUnitFrom}
              dictionary={dictionary}
            />
            <SwitchUnitButton switchUnits={switchUnits} />
          </div>
        </div>
        <div className="mt-3 mb-5 flex items-baseline justify-items-center md:ml-36 lg:mx-auto">
          <label className="mr-3 mb-2 ml-3 block text-sm font-medium text-gray-900 dark:text-white">
            en
          </label>
          <UnitSelect
            unit={unitTo}
            setUnit={setUnitTo}
            dictionary={dictionary}
          />
        </div>
      </div>

      <div className="text-gray-text-white mx-auto mb-3 text-center text-lg font-medium text-black dark:text-white">
        {value
          .toLocaleString("fr-FR", { minimumFractionDigits: 0 })
          .replace(",", ".")}{" "}
        {pluralize(
          parseFloat(rawValue),
          dictionary[unitFrom]?.label,
          dictionary[unitFrom]
        ) || ""}{" "}
        ={" "}
        {result !== null
          ? dictionary[unitTo]?.formater
            ? dictionary[unitTo].formater(result)
            : result
                .toLocaleString("fr-FR", { maximumFractionDigits: 3 })
                .replace(",", ".")
          : ""}{" "}
        {(!dictionary[unitTo]?.formater &&
          pluralize(
            parseFloat("" + result),
            dictionary[unitTo]?.label,
            dictionary[unitTo]
          )) ||
          ""}
      </div>

      <div className="text-gray-text-white mx-auto mb-3 text-center text-lg font-medium text-black dark:text-white">
        {result !== null && dictionary[unitFrom] && dictionary[unitTo] && (
          <>
            {value}{" "}
            {pluralize(
              parseFloat(rawValue),
              dictionary[unitTo]?.label,
              dictionary[unitTo]
            ) || ""}{" "}
            {parseFloat(rawValue) >= 2 ? "valent 1/" : "vaut 1/"}
            {result
              .toLocaleString("fr-FR", { maximumFractionDigits: 3 })
              .replace(",", ".")}
            ème de {dictionary[unitFrom].label}
          </>
        )}
      </div>

      <div className="text-gray-text-white mx-auto mb-20 text-center text-lg font-medium text-black dark:text-white">
        {result !== null && dictionary[unitFrom] && dictionary[unitTo] && (
          <>
            {value}{" "}
            {pluralize(
              parseFloat(rawValue),
              dictionary[unitFrom]?.label,
              dictionary[unitFrom]
            ) || ""}{" "}
            {parseFloat(rawValue) >= 2 ? "valent " : "vaut "}
            {(result * 100)
              .toLocaleString("fr-FR", { maximumFractionDigits: 2 })
              .replace(",", ".")}
            % de {dictionary[unitTo].label}
          </>
        )}
      </div>

      {dictionary[unitFrom]?.info && (
        <InfosBlock
          label={dictionary[unitFrom].label}
          info={dictionary[unitFrom].info}
        />
      )}
      {dictionary[unitTo]?.info &&
        dictionary[unitTo]?.info !== dictionary[unitFrom]?.info && (
          <InfosBlock
            label={dictionary[unitTo].label}
            info={dictionary[unitTo].info}
          />
        )}
      {dictionary["infos"] && (
        <div className="mx-auto">
          <InfosBlock label="Infos" info={dictionary["infos"].label} />
        </div>
      )}
    </div>
  )
}

export default UnitForm

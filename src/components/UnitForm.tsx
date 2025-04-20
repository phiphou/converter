import {useState, useEffect} from "react"
import {Unit} from "../types"
import {pluralize, scientific_notation} from "../utils/utils"
import UnitSelect from "./UnitSelect"
import SwitchUnitButton from "./SwitchUnitButton"
import InfosBlock from "./InfosBlock"
import SwitchButton from "./SwitchButton"

function UnitForm({label, dic}: {label: string; dic: Record<string, Unit>}) {
  const [unitFrom, setUnitFrom] = useState<string>("")
  const [secondaryUnit, setSecondaryUnit] = useState<string>("")
  const [unitTo, setUnitTo] = useState<string>("")
  const [rawValue, setRawValue] = useState<string>("1")
  const [value, setValue] = useState<number>(1)
  const [result, setResult] = useState<number | null>(1)
  const [precision, setPrecision] = useState<number>(2)
  const [scientific, setScientific] = useState<boolean>(false)
  const [hasList, setHasList] = useState<boolean>(false)
  const [list, setList] = useState<Record<string, Unit>>({})
  const [dictionary, setDictionary] = useState<Record<string, Unit>>({})
  const [switched, setSwiched] = useState<boolean>(false)
  useEffect(() => {
    let firstUnit = ""
    if (dic["list"] && !dic["of"]) {
      const new_dictionnary = Object.entries(dic["list"]).reduce(
        (acc, [, value]) => {
          const label = value.curr_code.toUpperCase()
          acc[label] = {
            label,
            code: value.curr_code,
            converter: typeof dic["converter"] === "function" ? dic["converter"] : undefined,
            divisor: 1,
            pluralize: true,
          }
          return acc
        },
        {} as Record<string, Unit>
      )
      if (dic["list"]) new_dictionnary["infos"] = dic["infos"]

      setDictionary(new_dictionnary)
      firstUnit = Object.keys(new_dictionnary)[0] || ""
    } else if (dic["materials"]) {
      setDictionary(dic)
      firstUnit =
        Object.keys(dic).find((key) => key !== "infos" && key !== "materials" && key !== "of" && dic[key]) || ""

      const list_dictionnary = Object.entries(dic["materials"]).reduce(
        (acc, [, value]) => {
          const label = value.label
          acc[label] = {
            label,
            divisor: value.divisor,
            pluralize: true,
            quote: value.quote,
          }
          return acc
        },
        {} as Record<string, Unit>
      )

      const firstSecondaryUnit =
        Object.keys(list_dictionnary).find((key) => key !== "infos" && list_dictionnary[key]) || ""

      setSecondaryUnit(firstSecondaryUnit)
      setHasList(true)
      setList(list_dictionnary)
    } else {
      setDictionary(dic)
      setSwiched(false)
      setHasList(false)
      firstUnit = Object.keys(dic).find((key) => key !== "infos" && dic[key]) || ""
    }
    setUnitFrom(firstUnit)
    setUnitTo(firstUnit)
  }, [dic])

  useEffect(() => {
    async function calculateResult() {
      if (unitFrom && unitTo) {
        const fromDivisor = dictionary[unitFrom].divisor
        const toDivisor = dictionary[unitTo].divisor
        let calculatedResult: number | null = null

        if (dictionary && dictionary[unitFrom].converter && dictionary[unitTo].converter) {
          calculatedResult = await dictionary[unitFrom].converter(
            value,
            dictionary[unitFrom],
            dictionary[unitTo],
            precision
          )
        } else if (unitFrom === unitTo) {
          calculatedResult = value
        } else if (dictionary[unitFrom].converter && dictionary[unitFrom].converter === dictionary[unitTo].converter) {
          calculatedResult = await dictionary[unitTo].converter(
            value,
            dictionary[unitFrom],
            dictionary[unitTo],
            precision
          )
        } else if (hasList) {
          if (toDivisor === fromDivisor) {
            if (!switched) {
              calculatedResult = value / list[secondaryUnit].divisor
            } else {
              calculatedResult = ((value * list[secondaryUnit].divisor) / toDivisor) * fromDivisor
            }
          } else {
            calculatedResult = ((value * list[secondaryUnit].divisor) / toDivisor) * fromDivisor
          }
        } else {
          calculatedResult = (value * fromDivisor) / toDivisor
        }
        setResult(calculatedResult)
      } else {
        setResult(null)
      }
    }

    calculateResult()
  }, [value, unitFrom, unitTo, dictionary, precision, hasList, list, secondaryUnit, switched])

  const switchUnits = () => {
    setUnitFrom(unitTo)
    setUnitTo(unitFrom)
    setSwiched(!switched)
  }

  function formatValueDisplay(
    value: number,
    rawValue: string,
    dictionary: Record<string, Unit>,
    unitFrom: string,
    hasList: boolean,
    list: Record<string, Unit>,
    secondaryUnit: string
  ): string {
    const formattedValue = value.toLocaleString("fr-FR", {minimumFractionDigits: 0}).replace(",", ".")
    const pluralizedLabel = pluralize(parseFloat(rawValue), dictionary[unitFrom]?.label, dictionary[unitFrom]) || ""
    const ofLabel = hasList && dictionary["of"] ? dictionary["of"].label : ""
    const quote =
      hasList && list[secondaryUnit]?.quote
        ? list[secondaryUnit]?.quote + (list[secondaryUnit]?.quote.endsWith("'") ? "" : " ")
        : ""
    const secondaryLabel = hasList ? list[secondaryUnit]?.label : ""
    console.table([formattedValue, pluralizedLabel, ofLabel, secondaryLabel])
    return `${formattedValue} ${pluralizedLabel} ${ofLabel}${quote}${secondaryLabel} `
  }

  return (
    <div>
      <div className="mx-auto mt-5 mb-0 flex min-w-full flex-col items-baseline justify-items-center">
        <div className="mx-auto mb-5 flex flex-col justify-items-center gap-3 md:flex-row">
          <input
            type="number"
            min={0}
            className="mr-1 block w-40 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
            <UnitSelect unit={unitFrom} setUnit={setUnitFrom} dictionary={dictionary} />
            {hasList && (
              <div className="flex gap-0">
                <span className="mt-4">{dictionary["of"] ? dictionary["of"].label + "\u00A0" : ""}</span>
                <span className="mt-4 whitespace-nowrap">
                  {list[secondaryUnit]?.quote && list[secondaryUnit]?.quote}
                  {list[secondaryUnit]?.quote && list[secondaryUnit].quote.endsWith("'") ? "" : " "}
                </span>
              </div>
            )}
            {hasList && <UnitSelect unit={secondaryUnit} setUnit={setSecondaryUnit} dictionary={list} />}
            <SwitchUnitButton switchUnits={switchUnits} />
          </div>
        </div>
        <div className="mt-3 mb-5 flex items-baseline justify-items-center gap-0 md:ml-36 lg:mx-auto">
          <label className="mr-3 mb-2 ml-3 block text-sm font-medium text-gray-900 dark:text-white">en</label>
          <UnitSelect unit={unitTo} setUnit={setUnitTo} dictionary={dictionary} />
          <label className="ml-3">Précision&nbsp;:</label>
          <input
            type="number"
            min={0}
            max={15}
            className="mr-3 ml-3 block w-17 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder={precision.toString()}
            value={precision}
            onKeyDown={(e) => {
              if (e.key === "-") e.preventDefault()
            }}
            onChange={(e) => {
              let inputValue = e.target.value.replace(",", "").replace(".", "")
              if (inputValue.startsWith("0")) inputValue = e.target.value.replace("0", "")
              e.target.value = inputValue
              const numericValue = inputValue == "" ? 0 : parseFloat(inputValue)
              if (!isNaN(numericValue) && numericValue < 100) setPrecision(numericValue)
            }}
          />
        </div>
      </div>

      <div className="mt-3 mb-5 flex w-max items-center gap-3 md:pl-40">
        <label className="inline-flex cursor-pointer items-center text-black dark:text-white">
          Notation scientifique :{" "}
        </label>
        <SwitchButton scientific={scientific} setScientific={setScientific} />
      </div>
      <div className="text-gray-text-white mx-auto mb-3 text-center text-lg font-medium text-black dark:text-white">
        {formatValueDisplay(value, rawValue, dictionary, unitFrom, hasList, list, secondaryUnit)}={" "}
        {result !== null
          ? dictionary[unitTo]?.formater
            ? dictionary[unitTo].formater(result)
            : scientific
              ? scientific_notation(result, precision)
              : result.toLocaleString("fr-FR", {maximumFractionDigits: precision}).replace(",", ".")
          : ""}{" "}
        {(!dictionary[unitTo]?.formater &&
          pluralize(parseFloat("" + result), dictionary[unitTo]?.label, dictionary[unitTo])) ||
          ""}
      </div>

      <div className="text-gray-text-white mx-auto mb-3 text-center text-lg font-medium text-black dark:text-white">
        {result !== null && dictionary[unitFrom] && dictionary[unitTo] && (
          <>
            {formatValueDisplay(value, rawValue, dictionary, unitFrom, hasList, list, secondaryUnit)}
            {(parseFloat(rawValue) >= 2 ? "valent " : "vaut ") + (result < 1 ? "1/" : "")}
            {(result < 1 ? 1 / result : scientific ? scientific_notation(result, precision) : result)
              .toLocaleString("fr-FR", {maximumFractionDigits: precision})
              .replace(",", ".")}
            {result < 1 ? "ème de " + dictionary[unitTo].label : " fois " + dictionary[unitTo].label}
          </>
        )}
      </div>

      <div className="text-gray-text-white mx-auto mb-8 text-center text-lg font-medium text-black dark:text-white">
        {result !== null && dictionary[unitFrom] && dictionary[unitTo] && (
          <>
            {formatValueDisplay(value, rawValue, dictionary, unitFrom, hasList, list, secondaryUnit)}
            {parseFloat(rawValue) >= 2 ? "valent " : "vaut "}
            {(result * 100).toLocaleString("fr-FR", {maximumFractionDigits: precision}).replace(",", ".")}% de{" "}
            {dictionary[unitTo].label}
          </>
        )}
      </div>

      {dictionary[unitFrom]?.info && <InfosBlock label={dictionary[unitFrom].label} info={dictionary[unitFrom].info} />}
      {dictionary[unitTo]?.info && dictionary[unitTo]?.info !== dictionary[unitFrom]?.info && (
        <InfosBlock label={dictionary[unitTo].label} info={dictionary[unitTo].info} />
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

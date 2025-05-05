import {useState, useEffect} from "react"
import {Unit} from "../types"
import {pluralize, scientific_notation} from "../utils/utils"
import UnitSelect from "./UnitSelect"
import SwitchUnitButton from "./SwitchUnitButton"
import InfosBlock from "./InfosBlock"
import SwitchButton from "./SwitchButton"
import ErrorBlock from "./ErrorBlock"

function formatResult(
  result: number | string | null,
  dictionary: Record<string, Unit>,
  unitTo: string,
  scientific: boolean,
  precision: number
): string {
  if (result === null) return ""
  if (dictionary["input"]) return "" + result
  if (dictionary[unitTo]?.formater) {
    return dictionary[unitTo].formater(result)
  }
  if (scientific) {
    return scientific_notation(typeof result === "number" ? result : parseFloat(result), precision)
  }
  return result.toLocaleString("fr-FR", {maximumFractionDigits: precision}).replace(",", ".")
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
  const ofLabel = hasList && dictionary["of"] ? dictionary["of"].label + "" : ""
  const quote =
    hasList && list[secondaryUnit]?.quote
      ? list[secondaryUnit]?.quote + (list[secondaryUnit]?.quote.endsWith("'") ? "" : " ")
      : ""
  const secondaryLabel = hasList ? list[secondaryUnit]?.label : ""
  return `${formattedValue} ${pluralizedLabel} ${ofLabel}${quote}${secondaryLabel}`
}

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
  const [singleResult, setSingleResult] = useState<boolean>(false)
  const [currentDate, SetCurrentDate] = useState<Date>(new Date())
  const [error, SetError] = useState<Error | null>(null)

  useEffect(() => {
    let firstUnit = ""
    if (dic["list"] && !dic["of"]) {
      const new_dictionnary = Object.entries(dic["list"]).reduce(
        (acc, [, value]) => {
          const label = `${value.name_fr} (${value.code.toUpperCase()})`
          acc[label] = {
            label,
            code: value.code,
            converter: typeof dic["converter"] === "function" ? dic["converter"] : undefined,
            divisor: 1,
            pluralize: false,
            pluralize_all: true,
          }
          return acc
        },
        {} as Record<string, Unit>
      )
      if (dic["list"]) new_dictionnary["infos"] = dic["infos"]

      setDictionary(new_dictionnary)
      firstUnit = Object.keys(new_dictionnary)[0] || ""
      setHasList(false)
    } else if (dic["materials"]) {
      setDictionary(dic)
      firstUnit =
        Object.keys(dic).find(
          (key) => key !== "infos" && key !== "materials" && key !== "of" && key !== "noSwitch" && dic[key]
        ) || ""

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
      if (dic["singleResult"]) {
        setSingleResult(true)
        //delete dic["singleResult"]
      }
      setDictionary(dic)
      setSwiched(false)
      setHasList(false)
      firstUnit =
        Object.keys(dic).find((key) => key !== "infos" && key !== "input" && dic[key] && key != "singleResult") || ""
    }
    setUnitFrom(firstUnit)
    setUnitTo(firstUnit)
    SetCurrentDate(new Date())
  }, [dic])

  useEffect(() => {
    async function calculateResult() {
      setResult(null)
      SetError(null)
      if (unitFrom && unitTo) {
        const fromDivisor = dictionary[unitFrom].divisor
        const toDivisor = dictionary[unitTo].divisor
        let calculatedResult: number | null = null

        if (unitFrom === unitTo && !dictionary["input"] && !dictionary[unitTo].converter) {
          calculatedResult = value
        } else if (dictionary["input"] && dictionary[unitTo].converter) {
          console.log("m")
          try {
            calculatedResult = await dictionary[unitTo].converter(
              currentDate.getTime(),
              dictionary[unitTo],
              dictionary[unitTo],
              precision
            )
          } catch (error) {
            SetError(error as Error)
          }

          setResult(calculatedResult)
        } else if (dictionary[unitTo].converter) {
          try {
            calculatedResult = await dictionary[unitTo].converter(
              value,
              dictionary[unitFrom],
              dictionary[unitTo],
              precision
            )
          } catch (error) {
            SetError(error as Error)
          }
        } else if (hasList) {
          if (toDivisor === fromDivisor) {
            if (!switched && !dictionary["noSwitch"]) {
              calculatedResult = ((value * list[secondaryUnit].divisor) / toDivisor) * fromDivisor
            } else {
              calculatedResult = ((value * (1 / list[secondaryUnit].divisor)) / toDivisor) * fromDivisor
            }
          } else {
            if (dictionary["materials"] && !dictionary["noSwitch"]) {
              calculatedResult = ((value * list[secondaryUnit].divisor) / toDivisor) * fromDivisor
            } else if (dictionary["materials"] && dictionary["noSwitch"]) {
              calculatedResult = (value / list[secondaryUnit].divisor / toDivisor) * fromDivisor
            } else {
              calculatedResult = 222
            }
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
  }, [value, unitFrom, unitTo, dictionary, precision, hasList, list, secondaryUnit, switched, currentDate])

  const switchUnits = () => {
    setUnitFrom(unitTo)
    setUnitTo(unitFrom)
    setSwiched((prev) => !prev)
  }

  return (
    <div>
      <div className="mx-auto mt-5 mb-0 flex min-w-full flex-col items-baseline justify-items-center">
        <div className="mx-auto mb-5 flex flex-col justify-items-center gap-2 md:h-12 md:flex-row">
          {!dictionary["input"] && (
            <input
              type="number"
              min={0}
              className="mr-1 block w-25 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder={label}
              value={rawValue}
              max={dictionary[unitTo]?.max != undefined ? dictionary[unitTo]?.max : undefined}
              onKeyDown={(e) => {
                if (e.key === "-") e.preventDefault()
              }}
              onChange={(e) => {
                const inputValue = e.target.value.replace(",", ".")
                const numericValue = parseFloat(inputValue)

                if (
                  !isNaN(numericValue) &&
                  dictionary[unitTo]?.max !== undefined &&
                  numericValue > dictionary[unitTo].max
                ) {
                  setRawValue(dictionary[unitTo].max.toString())
                  setValue(dictionary[unitTo].max)
                } else {
                  setRawValue(inputValue)
                  if (!isNaN(numericValue)) setValue(numericValue)
                }
              }}
            />
          )}
          {dictionary["input"] && (
            <input
              type="date"
              className="mr-1 block w-40 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder={label}
              value={currentDate.toISOString().split("T")[0]}
              onChange={(e) => {
                SetCurrentDate(new Date(e.target.value))
              }}
            />
          )}
          <div className="flex gap-2">
            {dictionary["input"] && <UnitSelect unit={unitTo} setUnit={setUnitTo} dictionary={dictionary} />}
            {!dictionary["input"] && <UnitSelect unit={unitFrom} setUnit={setUnitFrom} dictionary={dictionary} />}
            {hasList && (
              <div className="flex gap-1">
                <span className="mt-4">{dictionary["of"] ? dictionary["of"].label + "\u00A0" : " "}</span>
                <span className="mt-4 whitespace-nowrap">
                  {list[secondaryUnit]?.quote && list[secondaryUnit]?.quote}
                  {list[secondaryUnit]?.quote && list[secondaryUnit].quote.endsWith("'") ? "" : " "}
                </span>
              </div>
            )}
            {hasList && <UnitSelect unit={secondaryUnit} setUnit={setSecondaryUnit} dictionary={list} />}
            {!dictionary[unitFrom]?.noSwitch && !dictionary["input"] && !dictionary["noSwitch"] && (
              <SwitchUnitButton switchUnits={switchUnits} />
            )}
          </div>
        </div>
        {!dictionary["input"] && (
          <div className="mt-3 mb-5 flex items-baseline justify-items-center gap-0 md:ml-36 md:flex-row lg:mx-auto">
            <label className="mr-3 mb-2 ml-3 block text-sm font-medium text-gray-900 dark:text-white">en</label>
            <UnitSelect unit={unitTo} setUnit={setUnitTo} dictionary={dictionary} />
            <div className="flex items-center md:flex">
              <label className="ml-3">Précision&nbsp;:</label>
              <input
                type="number"
                min={0}
                max={15}
                className="mr-3 ml-3 block w-17 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder={precision.toString()}
                value={precision}
                onKeyDown={(e) => {
                  if (e.key === "-") e.preventDefault()
                }}
                onChange={(e) => {
                  let inputValue = e.target.value.replace(",", "").replace(".", "")
                  if (inputValue.startsWith("0")) inputValue = e.target.value.replace("0", "")
                  e.target.value = inputValue
                  const numericValue = inputValue === "" ? 0 : parseFloat(inputValue)
                  if (!isNaN(numericValue) && numericValue < 100) setPrecision(numericValue)
                }}
              />
            </div>
          </div>
        )}
      </div>

      {!dictionary["input"] && !singleResult && (
        <div className="mt-3 mb-5 flex w-max items-center gap-3 md:pl-40">
          <label className="inline-flex cursor-pointer items-center text-black dark:text-white">
            Notation scientifique :{" "}
          </label>
          <SwitchButton scientific={scientific} setScientific={setScientific} />
        </div>
      )}
      <div className="text-gray-text-white mx-auto mt-2 mb-3 flex items-center justify-center text-center text-lg font-medium text-black dark:text-white">
        {!dictionary["input"] && !error && (
          <span
            dangerouslySetInnerHTML={{
              __html: formatValueDisplay(value, rawValue, dictionary, unitFrom, hasList, list, secondaryUnit),
            }}
          ></span>
        )}
        {dictionary["input"] && (
          <span>
            {new Intl.DateTimeFormat("fr-u-ca-fr", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(currentDate)}
          </span>
        )}{" "}
        {!dictionary["input"] && !error && <span className="mx-2">=</span>}
        {!dictionary["input"] && !error && (
          <div
            className="inline-block"
            dangerouslySetInnerHTML={{
              __html: `${formatResult(result, dictionary, unitTo, scientific, precision)}${" "}${
                (!dictionary[unitTo]?.formater &&
                  pluralize(parseFloat("" + result), dictionary[unitTo]?.label, dictionary[unitTo])) ||
                ""
              }`,
            }}
          ></div>
        )}
        {dictionary["input"] && (
          <div
            className="inline-block"
            dangerouslySetInnerHTML={{
              __html: `${result}`,
            }}
          ></div>
        )}
      </div>

      <div className="text-gray-text-white mx-auto mb-3 text-center text-lg font-medium text-black dark:text-white">
        {!dictionary["input"] &&
          !error &&
          result !== null &&
          dictionary[unitFrom] &&
          dictionary[unitTo] &&
          !singleResult && (
            <>
              {formatValueDisplay(value, rawValue, dictionary, unitTo, hasList, list, secondaryUnit)}
              {(parseFloat(rawValue) >= 2 ? " valent " : " vaut ") + (result / value / value >= 1 ? "1/" : "")}
              {(result >= 1
                ? scientific
                  ? scientific_notation((1 / result) * value * value, precision)
                  : result / value / value >= 1
                    ? result / value / value
                    : 1 / (result / value / value)
                : scientific
                  ? scientific_notation((1 / result) * value * value, precision)
                  : result / value / value
              )
                .toLocaleString("fr-FR", {maximumFractionDigits: precision})
                .replace(",", ".")}
              {result / value / value >= 1
                ? "ème de " + dictionary[unitFrom].label
                : " fois " + dictionary[unitFrom].label}
            </>
          )}
      </div>

      <div className="text-gray-text-white mx-auto mb-8 text-center text-lg font-medium text-black dark:text-white">
        {!dictionary["input"] &&
          !error &&
          result !== null &&
          dictionary[unitFrom] &&
          dictionary[unitTo] &&
          !singleResult && (
            <>
              {formatValueDisplay(value, rawValue, dictionary, unitFrom, hasList, list, secondaryUnit)}
              {parseFloat(rawValue) >= 2 ? " valent " : " vaut "}
              {(result * 100).toLocaleString("fr-FR", {maximumFractionDigits: precision}).replace(",", ".")}% de{" "}
              {dictionary[unitTo].label}
            </>
          )}
      </div>
      {error && <ErrorBlock info={error.message} />}
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

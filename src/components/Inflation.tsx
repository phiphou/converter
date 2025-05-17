import {useEffect, useState} from "react"
import {ConversionType, converterType, Unit} from "../types/types"
import InfosBlock from "./InfosBlock"

import SwitchUnitButton from "./SwitchUnitButton"
import ErrorBlock from "./ErrorBlock"

interface UnitSelectProps {
  dictionary: Record<string, Unit>
}

function Inflation({dictionary}: UnitSelectProps) {
  const [value, setValue] = useState<number>(1000)
  const [output, setOutput] = useState<string>("")
  const [cumulativeInflation, setCumulativeInflation] = useState<string>("")
  const [unitFrom, setUnitFrom] = useState<string>("")
  const [unitTo, setUnitTo] = useState<string>("")
  const [conversionType, setConversionType] = useState<ConversionType>(ConversionType.EE)
  const [converter, setConverter] = useState<converterType | undefined>()

  const [error, setError] = useState<Error | null>(null)

  const switchUnits = () => {
    setUnitFrom(unitTo)
    setUnitTo(unitFrom)
  }

  useEffect(() => {
    const firstUnit = Object.keys(dictionary)[2] || ""
    const candidate = dictionary[firstUnit]?.converter
    if (typeof candidate === "function") {
      setConverter(() => candidate)
    } else {
      setConverter(undefined)
    }
    setUnitFrom("2023")
    setUnitTo("2024")
  }, [dictionary])

  useEffect(() => {
    setError(null)
    async function calculateResult() {
      let calculatedResult = ""

      if (typeof converter === "function" && unitTo !== "") {
        try {
          const conversionResult = await converter(
            value,
            {label: unitFrom, key: parseInt(unitFrom), divisor: 1, key2: conversionType},
            {label: unitTo, key: parseInt(unitTo), divisor: 1, key2: conversionType}
          )
          if (typeof conversionResult === "object" && conversionResult !== null && "result" in conversionResult) {
            const {result, cumulativeInflation: cumInfl} = conversionResult as {
              result: string
              cumulativeInflation?: string
            }
            calculatedResult = result
            if (cumInfl !== undefined) {
              setCumulativeInflation(cumInfl)
              setOutput(parseFloat(calculatedResult).toFixed(2))
            }
          }
        } catch (error) {
          setError(error as Error)
        }
      }
    }

    calculateResult()
  }, [output, dictionary, unitTo, unitFrom, converter, value, conversionType, cumulativeInflation])

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center bg-transparent">
        <div className="flex w-full flex-col items-center justify-center text-black dark:text-white">
          <div className="m-3 mx-auto flex max-w-[100%] min-w-[100%] flex-col items-center justify-center md:max-w-[80%] md:min-w-[80%]">
            <div className="flex w-full flex-col items-center text-black md:ml-50 dark:text-white">
              <div className="flex w-full items-center text-black dark:text-white">
                <span className="ml-3 text-sm font-medium">Valeur à convertir</span>
                <input
                  className="mr-3 ml-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  value={value}
                  type="number"
                  onChange={(e) => setValue(Number(e.target.value))}
                />{" "}
              </div>
              <div className="mt-6 flex w-full items-center text-black dark:text-white">
                <span className="ml-3 text-sm font-medium">Entre</span>
                <select
                  onChange={(e) => {
                    setUnitFrom(e.target.value)
                  }}
                  value={unitFrom}
                  id="unitFrom"
                  className="mr-3 ml-3 block max-w-[25%] min-w-[25%] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  {Array.from({length: 2024 - 1900 + 1}, (_, i) => 1900 + i).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <span className="ml-3 text-sm font-medium">et</span>
                <select
                  onChange={(e) => {
                    setUnitTo(e.target.value)
                  }}
                  id="unitFrom"
                  value={unitTo}
                  className="mr-3 ml-3 block max-w-[25%] min-w-[25%] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  {Array.from({length: 2024 - 1900 + 1}, (_, i) => 1900 + i).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <div className="ml-2 items-center gap-2">
                  {!dictionary[unitTo]?.noSwitch && !dictionary["input"] && !dictionary["noSwitch"] && (
                    <SwitchUnitButton switchUnits={switchUnits} />
                  )}
                </div>
              </div>
              <div className="mt-6 flex w-full items-center text-black dark:text-white">
                <span className="ml-3 text-sm font-medium">Type de conversion</span>
                <select
                  onChange={(e) => {
                    setConversionType(e.target.value as ConversionType)
                  }}
                  value={conversionType || ""}
                  id="unitFrom"
                  className="mr-3 ml-3 block max-w-[40%] min-w-[40%] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  {Object.keys(ConversionType).map((key) => {
                    if (isNaN(Number(key)) && key in ConversionType) {
                      const typedKey = key as keyof typeof ConversionType
                      return (
                        <option key={key} value={ConversionType[typedKey]}>
                          {ConversionType[typedKey]}
                        </option>
                      )
                    }
                    return null
                  })}
                </select>
              </div>
              <div className="mt-6 flex w-full items-center text-black dark:text-white">
                <input
                  className="mr-3 ml-3 block max-w-[30%] min-w-[30%] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  value={output}
                  onChange={(e) => setOutput(e.target.value)}
                />
                <span className="ml-3 text-sm font-medium">Inflation cumulée : {cumulativeInflation}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {error && <ErrorBlock info={error.message} />}
      {dictionary[unitFrom]?.info && <InfosBlock label={dictionary[unitFrom].label} info={dictionary[unitFrom].info} />}
      {dictionary[unitTo]?.info && dictionary[unitTo]?.info !== dictionary[unitFrom]?.info && (
        <InfosBlock label={dictionary[unitTo].label} info={dictionary[unitTo].info} />
      )}

      <div className="mt-20 pb-6">
        {" "}
        {typeof dictionary["infos"] === "object" && (dictionary["infos"] as {label: string})?.label && (
          <InfosBlock label={""} info={(dictionary["infos"] as {label: string}).label} />
        )}
      </div>
    </>
  )
}

export default Inflation

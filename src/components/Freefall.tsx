import {useEffect, useState} from "react"
import InfosBlock from "./InfosBlock"
import UnitSelect from "./UnitSelect"
import ErrorBlock from "./ErrorBlock"
import {Unit} from "../types/types"
import freefall_converter from "../converters/freefall_converter"

interface UnitSelectProps {
  dictionary: Record<string, Unit>
}

function Freefall({dictionary}: UnitSelectProps) {
  const [value, setValue] = useState<string>("10")
  const [result, setResult] = useState<object>({})

  const [unitTo, setUnitTo] = useState<string>("height")
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setError(null)
    async function calculateResult() {
      let calculatedResult = {}

      if (unitTo != "" && value.length >= 0) {
        try {
          calculatedResult = await freefall_converter(value, dictionary[unitTo])
        } catch (error) {
          setError(error as Error)
        }
        console.table(calculatedResult)
        setResult(calculatedResult)
      }
    }

    if (unitTo && value !== "") calculateResult()
  }, [value, dictionary, unitTo])

  return (
    <>
      <div className="m-3 mx-auto flex max-w-[100%] min-w-[100%] flex-col items-center justify-center md:max-w-[70%] md:min-w-[70%]">
        <div className="flex w-full flex-col text-black dark:text-white">
          <div className="flex w-full flex-col items-center gap-5 text-black md:flex-row md:gap-1 dark:text-white">
            {"Pour une : "}
            <div className="ml-2 flex max-w-63 min-w-63 items-center justify-center">
              <UnitSelect unit={unitTo} setUnit={setUnitTo} dictionary={dictionary} />
            </div>
            <div className="flex flex-row items-center justify-center">
              {" "}
              {"de : "}
              <input
                className="mr-3 ml-3 block max-w-35 min-w-35 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              {(() => {
                switch (unitTo) {
                  case "height":
                    return "mètres"
                  case "time":
                    return "secondes"
                  case "speed":
                    return "m/s"
                  default:
                    return "unités inconnues"
                }
              })()}
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-10 max-w-full min-w-full overflow-x-auto rounded-lg shadow md:max-w-[70%] md:min-w-[70%]">
          <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="bg-gray-50 text-xs text-gray-800 uppercase dark:bg-gray-700 dark:text-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Critère
                </th>
                <th scope="col" className="px-6 py-3">
                  Valeur
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(result).map(([key, v]) => (
                <tr key={key} className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                  <td className="px-6 py-3 text-gray-900 dark:text-white">{key || "N/A"}</td>
                  <td className="px-6 py-3 text-gray-900 dark:text-white">
                    {v.toFixed(2) || "N/A"}
                    {key === "vitesse à l'impact" && " m/s (" + (v * 3.6).toFixed(2) + " km/h)"}
                    {key === "hauteur de chute" && " m"}
                    {key === "durée de la chute" && " s"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {error && <ErrorBlock info={error.message} />}

      {dictionary[unitTo]?.info && dictionary[unitTo]?.info && (
        <InfosBlock label={dictionary[unitTo].label} info={dictionary[unitTo].info} />
      )}

      <div className="mt-20 pb-6">
        {" "}
        {typeof dictionary["infos"] === "object" && (dictionary["infos"] as {label: string})?.label && (
          <InfosBlock label={"intérêts composés"} info={(dictionary["infos"] as {label: string}).label} />
        )}
      </div>
    </>
  )
}

export default Freefall

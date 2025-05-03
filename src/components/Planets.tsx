import {useEffect, useState} from "react"
import {Unit} from "../types"
import InfosBlock from "./InfosBlock"

// interface PlanetData {
//   label: string
//   diameter: number
//   distance: number
// }

// interface Dictionary {
//   planets: Record<string, PlanetData>
//   diameter: Record<string, number>
//   distance: Record<string, number>
// }

interface UnitSelectProps {
  dictionary: Record<string, Unit>
}

function Planets({dictionary}: UnitSelectProps) {
  const [mode, setMode] = useState("distance")
  const [planet, setPlanet] = useState("earth")
  const [value, setValue] = useState(1)
  const [unit, setUnit] = useState(0.000001)
  const [rawValue, setRawValue] = useState<string>("1")
  const [result, setResult] = useState<object>({})

  useEffect(() => {
    async function calculateResult() {
      const trueD = (
        dictionary["planets"] as unknown as Record<string, {label: string; diameter: number; distance: number}>
      )[planet].diameter
      const trueL = (
        dictionary["planets"] as unknown as Record<string, {label: string; diameter: number; distance: number}>
      )[planet].distance

      const ratio = mode === "distance" ? trueL / value / unit : trueD / value / unit

      const results: Record<string, {label?: string; diameter?: number; distance?: number}> = {}

      Object.entries(
        dictionary["planets"] as unknown as Record<string, {label: string; diameter: number; distance: number}>
      ).forEach(([key, v]) => {
        results[key] = {label: v.label, diameter: v.diameter / ratio, distance: v.distance / ratio}
      })

      setResult(results)
    }

    calculateResult()
  }, [mode, planet, value, unit, dictionary])

  function formatLength(valueInKm: number): string {
    const units = [
      {unit: "km", factor: 1},
      {unit: "m", factor: 1_000},
      {unit: "cm", factor: 100_000},
      {unit: "mm", factor: 1_000_000},
    ]

    for (const {unit, factor} of units) {
      const converted = valueInKm * factor
      if (converted >= 1 && converted < 1000000000000) {
        return `${parseFloat(converted.toFixed(3)).toLocaleString("fr-FR", {maximumFractionDigits: 2}).replace(",", ".")}${unit}`
      }
    }

    const mmValue = valueInKm * 1_000_000
    return `${parseFloat(mmValue.toFixed(2))}mm`
  }

  return (
    <>
      <div className="m-3 flex flex-col items-center">
        <div className="flex items-center text-black dark:text-white">
          <div className="min-w-8">Si {mode === "distance" ? "la" : "le"}</div>
          <select
            onChange={(e) => setMode(e.target.value)}
            className="ml-2 block w-full max-w-50 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option key={0} value={"distance"}>
              distance au Soleil
            </option>
            <option key={1} value={"diameter"}>
              diamètre
            </option>
          </select>
          <div className="ml-3 min-w-11">{planet == "sun" ? "du" : planet == "earth" ? "de la" : "de"}</div>
          <select
            value={planet}
            onChange={(e) => setPlanet(e.target.value)}
            className="mr-2 block w-full max-w-50 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            {Object.keys(dictionary.planets).map((key) => {
              if (mode === "distance") {
                if (key != "sun")
                  return (
                    <option key={key} value={key}>
                      {(dictionary["planets"] as unknown as Record<string, {label: string}>)[key]?.label}
                    </option>
                  )
              } else {
                return (
                  <option key={key} value={key}>
                    {(dictionary["planets"] as unknown as Record<string, {label: string}>)[key]?.label}
                  </option>
                )
              }
            })}
          </select>
        </div>
        <div className="mt-6 flex items-center text-black dark:text-white">
          <div className="max-w-19 min-w-19">est {mode === "distance" ? "égale à" : "égal à"}</div>
          <input
            type="text"
            min={0}
            className="mr-3 ml-2 block w-25 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            value={rawValue}
            onKeyDown={(e) => {
              if (e.key === "-") e.preventDefault()
            }}
            onChange={(e) => {
              const inputValue = e.target.value.replace(",", ".")
              const numericValue = parseFloat(inputValue)

              setRawValue(inputValue)
              if (!isNaN(numericValue)) setValue(numericValue)
            }}
          />
          <select
            onChange={(e) => setUnit(parseFloat(e.target.value))}
            className="ml-2 block w-full max-w-40 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option key={0} value={0.000001}>
              mm
            </option>
            <option key={1} value={0.00001}>
              cm
            </option>
            <option key={2} value={0.001}>
              m
            </option>
            <option key={3} value={1}>
              km
            </option>
          </select>
        </div>
        <div className="relative mt-10 max-w-200 min-w-200 overflow-x-auto rounded-lg shadow">
          <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="bg-gray-50 text-xs text-gray-800 uppercase dark:bg-gray-700 dark:text-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Planète
                </th>
                <th scope="col" className="px-6 py-3">
                  Distance au Soleil
                </th>
                <th scope="col" className="px-6 py-3">
                  Diamètre
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(result).map(
                ([key, v]) =>
                  key != "sun" && (
                    <tr key={key} className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                      <th scope="row" className="px-6 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                        {v.label}
                      </th>
                      <td className="px-6 py-3 text-gray-900 dark:text-white">{formatLength(v.distance) || "N/A"}</td>
                      <td className="px-6 py-3 text-gray-900 dark:text-white">{formatLength(v.diameter) || "N/A"}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pt-1 pb-6">
        {" "}
        {typeof dictionary["infos"] === "object" && (dictionary["infos"] as {label: string})?.label && (
          <InfosBlock label={"distances et diamètres"} info={(dictionary["infos"] as {label: string}).label} />
        )}
      </div>
    </>
  )
}

export default Planets

import {useEffect, useState} from "react"
import {Unit} from "../types/types"
import InfosBlock from "./InfosBlock"
import SwitchUnitButton from "./SwitchUnitButton"
import ErrorBlock from "./ErrorBlock"
import contrast_converter from "../converters/contrast_converter"

interface UnitSelectProps {
  dictionary: Record<string, Unit>
}

function Color_contrast({dictionary}: UnitSelectProps) {
  const [backgroundColor, setBackgroundColor] = useState<string>("#000000")
  const [foregroundColor, setForegroundColor] = useState<string>("#FFFFFF")
  const [constrast, setConstrast] = useState<number>(0)
  const [error, setError] = useState<Error | null>(null)

  type ContrastReport = {
    "AA small": boolean
    "AAA small": boolean
    "AA large": boolean
    "AAA large": boolean
  }
  const [report, setReport] = useState<ContrastReport>({
    "AA small": false,
    "AAA small": false,
    "AA large": false,
    "AAA large": false,
  })

  const switchUnits = () => {
    setBackgroundColor(foregroundColor)
    setForegroundColor(backgroundColor)
  }

  useEffect(() => {
    setError(null)
    async function calculateResult() {
      if (foregroundColor !== "" && backgroundColor !== "") {
        try {
          const contrastV = await contrast_converter(backgroundColor, foregroundColor)
          setConstrast(contrastV)
          setReport({
            "AA small": contrastV >= 3,
            "AAA small": contrastV >= 4.5,
            "AA large": contrastV >= 4.5,
            "AAA large": contrastV >= 7,
          })
        } catch (error) {
          setError(error as Error)
        }
      }
    }
    calculateResult()
  }, [backgroundColor, foregroundColor])

  return (
    <>
      <div className="m-3 mx-auto flex max-w-[100%] min-w-[100%] flex-col items-center justify-center md:max-w-[60%] md:min-w-[60%]">
        <div className="flex flex-col text-black dark:text-white">
          <div className="flex items-center text-black dark:text-white">
            <span>Couleur d'arrière plan : </span>
            <input
              type="color"
              className="ml-3"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />{" "}
            <div className="ml-2 items-center gap-2">
              <SwitchUnitButton switchUnits={switchUnits} />
            </div>
          </div>

          <div className="mt-6 flex w-full items-center text-black dark:text-white">
            <span>Couleur d'avant plan : </span>
            <input
              className="ml-3"
              type="color"
              value={foregroundColor}
              onChange={(e) => setForegroundColor(e.target.value)}
            />
          </div>
        </div>

        <div
          className="rounded-2xl border-1 border-gray-500"
          style={{
            margin: 25,
            padding: 15,
            backgroundColor: backgroundColor,
            color: foregroundColor,
          }}
        >
          <div className="m-3 text-[16px]">{"Text normal (< 18pt / < 14pt gras)"}</div>
          <div className="m-3 text-[19px] font-bold">{"Grand texte (>= 18pt / >= 14pt gras)"}</div>
          <div className="m-3 flex items-center">
            <span className="text-[16px]">{"Elément graphique :"}</span>
            <span className="ml-5 text-[30px]"> ★ </span>
          </div>
        </div>

        <div className="mt-3 text-xl font-bold text-black dark:text-white">Constraste W3ACG : {constrast}:1</div>
        <div className="mt-8 flex flex-col text-black dark:text-white">
          <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="bg-gray-50 text-xs text-gray-800 uppercase dark:bg-gray-700 dark:text-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Règle
                </th>
                <th scope="col" className="px-6 py-3">
                  Résultat
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(report).map(([key, v]) => (
                <tr key={key} className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                  <th scope="row" className="px-6 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                    {key}
                  </th>
                  <td className="px-6 py-3 text-gray-900 dark:text-white"> {v ? "✅" : "❌"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {error && <ErrorBlock info={error.message} />}

      <div className="mt-10 flex w-full flex-col items-center justify-center pb-6">
        {" "}
        {typeof dictionary["infos"] === "object" && (dictionary["infos"] as {label: string})?.label && (
          <InfosBlock label={""} info={(dictionary["infos"] as {label: string}).label} />
        )}
      </div>
    </>
  )
}

export default Color_contrast

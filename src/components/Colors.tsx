import {useEffect, useState} from "react"
import {Unit} from "../types/types"
import InfosBlock from "./InfosBlock"
import UnitSelect from "./UnitSelect"
import SwitchUnitButton from "./SwitchUnitButton"
import ErrorBlock from "./ErrorBlock"

interface UnitSelectProps {
  dictionary: Record<string, Unit>
}

function Colors({dictionary}: UnitSelectProps) {
  const [input, setInput] = useState<string>("")
  const [output, setOutput] = useState<string>("")
  const [unitFrom, setUnitFrom] = useState<string>("")
  const [unitTo, setUnitTo] = useState<string>("")
  const [converter, setConverter] = useState<
    | ((
        value: string | number,
        from: Unit,
        to: Unit,
        precision?: number
      ) => string | number | Promise<string> | Promise<number>)
    | undefined
  >()
  const [error, setError] = useState<Error | null>(null)

  const switchUnits = () => {
    setUnitFrom(unitTo)
    setUnitTo(unitFrom)
  }

  useEffect(() => {
    const firstUnit = Object.keys(dictionary)[2] || ""
    if (dictionary[firstUnit]?.converter) {
      setConverter(dictionary[firstUnit].converter)
    }
    setUnitFrom(firstUnit)
    setUnitTo(firstUnit)
  }, [dictionary, converter])

  useEffect(() => {
    setError(null)
    async function calculateResult() {
      let calculatedResult = ""

      if (converter && unitTo != "") {
        try {
          calculatedResult = String(await converter(input, dictionary[unitFrom], dictionary[unitTo]))
        } catch (error) {
          setError(error as Error)
        }
        setOutput(calculatedResult)
      }
    }

    if (unitTo !== unitFrom) calculateResult()
  }, [input, output, dictionary, unitTo, unitFrom, converter])

  return (
    <>
      <div className="m-3 mx-auto flex max-w-[100%] min-w-[100%] flex-col items-center justify-center md:max-w-[60%] md:min-w-[60%]">
        <div className="flex w-full flex-col text-black dark:text-white">
          <div className="flex w-full items-center text-black dark:text-white">
            <input
              className="mr-3 ml-3 block max-w-[65%] min-w-[65%] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />{" "}
            <div className="w-25">
              <UnitSelect unit={unitFrom} setUnit={setUnitFrom} dictionary={dictionary} />
            </div>
            <div className="ml-2 items-center gap-2">
              {!dictionary[unitTo]?.noSwitch && !dictionary["input"] && !dictionary["noSwitch"] && (
                <SwitchUnitButton switchUnits={switchUnits} />
              )}
            </div>
          </div>

          <div className="mt-6 flex w-full items-center text-black dark:text-white">
            <input
              className="mr-3 ml-3 block max-w-[70%] min-w-[70%] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={output}
              onChange={(e) => setOutput(e.target.value)}
            />
            <UnitSelect unit={unitTo} setUnit={setUnitTo} dictionary={dictionary} />
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
          <InfosBlock label={"intérêts composés"} info={(dictionary["infos"] as {label: string}).label} />
        )}
      </div>
    </>
  )
}

export default Colors

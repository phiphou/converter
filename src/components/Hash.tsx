import {useEffect, useState} from "react"
import {Unit} from "../types/types"
import InfosBlock from "./InfosBlock"
import UnitSelect from "./UnitSelect"

interface UnitSelectProps {
  dictionary: Record<string, Unit>
}

function Hash({dictionary}: UnitSelectProps) {
  const [input, setInput] = useState<string>("")
  const [output, setOutput] = useState<string>("")
  const [key, setKey] = useState<string>("SECRET")
  const [key2, setKey2] = useState<string>("65536")
  const [unitTo, setUnitTo] = useState<string>("")

  const [converter, setConverter] = useState<
    ((value: string | number, from: Unit, to: Unit, precision?: number) => string | number) | undefined
  >()

  const changeUnit = async (v: string) => {
    setOutput("calcul en cours...")
    setUnitTo(v)
    setKey(["BCRYPT", "ARGON2"].includes(v) ? (v === "ARGON2" ? "3" : "12") : "SECRET")
    setKey2("65536")
  }

  useEffect(() => {
    const firstUnit = Object.keys(dictionary)[3] || ""
    if (dictionary[firstUnit]?.converter) {
      setConverter(() => dictionary[firstUnit].converter)
    }
    setUnitTo(firstUnit)
  }, [dictionary, converter])

  useEffect(() => {
    async function calculateResult() {
      setOutput("calcul en cours...")
      let calculatedResult = ""

      if (converter && unitTo != "" && key != "") {
        dictionary[unitTo].key = key
        try {
          calculatedResult = String(
            await converter(input, {label: "text", divisor: 1, converter: converter}, dictionary[unitTo])
          )
          setOutput(calculatedResult)
        } catch (error) {
          console.log(error)
        }
      }
    }

    if (unitTo != "") calculateResult()
  }, [input, dictionary, unitTo, key, converter, key2])

  const BclassName = `mr-2 bloc rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500`

  const className = `${BclassName} ${!["BCRYPT", "ARGON2"].includes(unitTo) ? " max-w-40 min-w-40" : " max-w-12 min-w-12"}`

  const className2 = `${BclassName} ${!["BCRYPT", "ARGON2"].includes(unitTo) ? " max-w-40 min-w-40" : " max-w-20 min-w-20"}`

  return (
    <>
      <div className="m-3 mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col text-black dark:text-white">
          <div className="flex flex-col items-center text-black dark:text-white">
            <div className="mr-3 mb-1 ml-3 max-w-100 min-w-100">Texte en clair : </div>
            <textarea
              className="mr-3 ml-3 block max-w-100 min-w-100 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              rows={4}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="mt-5 flex max-w-100 min-w-100 items-center gap-2">
            {unitTo === "morse" && <div className="w-40"></div>}

            <div className="mr-1 ml-3">
              <UnitSelect unit={unitTo} setUnit={changeUnit} dictionary={dictionary} />
            </div>
            {["HMAC_SHA1", "HMAC_SHA256", "HMAC_SHA384", "HMAC_SHA512", "BCRYPT", "ARGON2", "AES"].includes(unitTo) && (
              <>
                <span>{["BCRYPT", "ARGON2"].includes(unitTo) ? " tours" : " clef"}</span>

                <input
                  type="text"
                  min={0}
                  className={className}
                  value={key}
                  onChange={(e) => {
                    if (e.target.value == "") {
                      setKey("1")
                      return
                    }
                    setKey(e.target.value)
                  }}
                />
              </>
            )}
            {unitTo === "ARGON2" && (
              <>
                <span> mémoire</span>
                <input
                  type="text"
                  min={0}
                  className={className2}
                  value={key2}
                  onChange={(e) => {
                    if (e.target.value == "") {
                      setKey2("")
                      return
                    }
                    setKey2(e.target.value)
                  }}
                />
              </>
            )}
          </div>

          <div className="mt-6 flex flex-col items-center text-black dark:text-white">
            <div className="flex align-middle">
              <textarea
                className="mr-3 ml-3 block max-w-100 min-w-100 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                rows={4}
                value={output}
                onChange={(e) => setOutput(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 pb-6">
        {" "}
        {typeof dictionary["infos"] === "object" && (dictionary["infos"] as {label: string})?.label && (
          <InfosBlock label={"intérêts composés"} info={(dictionary["infos"] as {label: string}).label} />
        )}
      </div>
    </>
  )
}

export default Hash

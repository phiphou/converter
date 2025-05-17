import {useEffect, useState} from "react"
import {converterType, Unit} from "../types/types"
import InfosBlock from "./InfosBlock"
import UnitSelect from "./UnitSelect"
import {debounce} from "../utils/utils"

interface UnitSelectProps {
  dictionary: Record<string, Unit>
}

function Hash({dictionary}: UnitSelectProps) {
  const [input, setInput] = useState<string>("")
  const [output, setOutput] = useState<string>("")
  const [key, setKey] = useState<string>("SECRET")
  const [key2, setKey2] = useState<string>("65536")
  const [unitTo, setUnitTo] = useState<string>("")

  const [converter, setConverter] = useState<converterType>()

  const changeUnit = async (v: string) => {
    setOutput("calcul en cours...")
    setUnitTo(v)
    switch (v) {
      case "BCRYPT":
        setKey("12")
        break
      case "ARGON2":
        setKey("3")
        break
      case "SCRYPT":
        setKey("1024")
        break
      case "PBKDF2":
        setKey("1024")
        break
    }
    setKey2("65536")
  }

  useEffect(() => {
    const debouncedCalculation = debounce(async () => {
      if (input) {
        async function calculateResult() {
          let calculatedResult = ""
          if (converter && unitTo != "" && key != "") {
            dictionary[unitTo].key = key
            setOutput("calcul en cours...")
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
      }
    }, 150)

    debouncedCalculation()
    return () => {
      debouncedCalculation.cancel()
    }
  }, [input, dictionary, unitTo, key, converter, key2])

  useEffect(() => {
    const firstUnit = Object.keys(dictionary)[3] || ""
    if (dictionary[firstUnit]?.converter) {
      setConverter(dictionary[firstUnit].converter)
    }
    setUnitTo(firstUnit)
  }, [dictionary, converter])

  const BclassName = `mr-2 bloc rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500`

  const className = `${BclassName} ${!["BCRYPT", "ARGON2"].includes(unitTo) ? " max-w-40 min-w-40" : " max-w-12 min-w-12"}`
  const className2 = `${BclassName} ${!["BCRYPT", "ARGON2"].includes(unitTo) ? " max-w-40 min-w-40" : " max-w-20 min-w-20"}`

  return (
    <>
      <div className="m-3 mx-auto flex max-w-full min-w-full flex-col items-center justify-center md:max-w-[60%] md:min-w-[60%]">
        <div className="flex max-w-full min-w-full flex-col text-black dark:text-white">
          <div className="flex max-w-full min-w-full flex-col items-center text-black dark:text-white">
            <div className="mr-3 mb-1 ml-3 max-w-full min-w-full">Texte en clair : </div>
            <textarea
              className="mr-3 ml-3 block max-w-full min-w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              rows={4}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="mt-5 flex max-w-100 min-w-100 items-center gap-2">
            {unitTo === "morse" && <div className="w-40"></div>}

            <div className="mr-1">
              <UnitSelect unit={unitTo} setUnit={changeUnit} dictionary={dictionary} />
            </div>
            {["HMAC_SHA1", "HMAC_SHA256", "HMAC_SHA384", "HMAC_SHA512", "BCRYPT", "ARGON2", "AES", "SCRYPT"].includes(
              unitTo
            ) && (
              <>
                <span>{["BCRYPT", "ARGON2", "SCRYPT"].includes(unitTo) ? " coût" : " clef"}</span>

                <input
                  type="text"
                  min={0}
                  className={className}
                  value={key}
                  onChange={(e) => {
                    if (e.target.value == "") {
                      setKey("")
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
            <div className="flex max-w-full min-w-full align-middle">
              <textarea
                className="mr-3 block max-w-full min-w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                rows={unitTo === "AES" ? 11 : 4}
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

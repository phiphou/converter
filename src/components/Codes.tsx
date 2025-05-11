import {useEffect, useState} from "react"
import {Unit} from "../types/types"
import InfosBlock from "./InfosBlock"
import UnitSelect from "./UnitSelect"
import {initializeAudioContext, playSentence, stopAudioContext} from "../utils/morse"
import SwitchUnitButton from "./SwitchUnitButton"

interface UnitSelectProps {
  dictionary: Record<string, Unit>
}

function Codes({dictionary}: UnitSelectProps) {
  const [input, setInput] = useState<string>("")
  const [output, setOutput] = useState<string>("")
  const [key, setKey] = useState<string>("13")
  const [unitTo, setUnitTo] = useState<string>("")
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [decode, setDecode] = useState<boolean>(false)
  const [converter, setConverter] = useState<
    ((value: string | number, from: Unit, to: Unit, precision?: number) => string | number) | undefined
  >()

  const BclassName =
    "mr-3 block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"

  const className = `${BclassName} ${unitTo == "morse" ? " max-w-[80%] min-w-[80%]" : " max-w-full min-w-full"}`

  const switchUnits = () => {
    setDecode(!decode)
    setInput(output)
  }

  const changeUnit = async (v: string) => {
    await stopAudioContext()
    setUnitTo(v)
    setKey(v != "rotation" ? "ABC" : "13")
  }

  async function playMorse() {
    if (!isPlaying) {
      initializeAudioContext()
      setIsPlaying(true)
      const t = decode ? input : output
      await playSentence(t.split("/").map((w) => w.split("")))
      setIsPlaying(false)
    }
  }

  useEffect(() => {
    const firstUnit = Object.keys(dictionary)[2] || ""
    if (dictionary[firstUnit]?.converter) {
      setConverter(() => dictionary[firstUnit].converter)
    }
    setUnitTo(firstUnit)
  }, [dictionary, converter])

  useEffect(() => {
    async function calculateResult() {
      let calculatedResult = ""

      if (converter && unitTo != "" && key != "") {
        dictionary[unitTo].key = key
        try {
          if (decode) {
            calculatedResult = String(
              await converter(input, dictionary[unitTo], {label: "text", divisor: 1, converter: converter, key: key})
            )
          } else {
            calculatedResult = String(
              await converter(input, {label: "text", divisor: 1, converter: converter}, dictionary[unitTo])
            )
          }
        } catch (error) {
          console.log(error)
        }
        setOutput(calculatedResult)
      }
    }

    if (unitTo != "") calculateResult()
  }, [input, output, dictionary, unitTo, key, converter, decode])

  return (
    <>
      <div className="m-3 mx-auto flex max-w-[100%] min-w-[100%] flex-col items-center justify-center md:max-w-[60%] md:min-w-[60%]">
        <div className="flex w-full flex-col text-black dark:text-white">
          <div className="flex w-full flex-col items-center text-black dark:text-white">
            <div className="mr-3 mb-1 ml-3 max-w-full min-w-full">Texte en clair : </div>
            <textarea
              className="mr-3 ml-3 block max-w-full min-w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              rows={4}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="mt-5 flex max-w-full min-w-full items-center gap-2">
            {/* {unitTo === "morse" && <div className="md:w-40"></div>} */}

            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-3">
              <div className="mr-2 ml-3">
                <UnitSelect unit={unitTo} setUnit={changeUnit} dictionary={dictionary} />
              </div>
              {unitTo !== "morse" && (
                <div className="ml-2 flex items-center gap-2">
                  <span>{unitTo === "rotation" ? " valeur" : " clef"}</span>
                  <input
                    type="text"
                    min={0}
                    className="mr-2 block max-w-40 min-w-40 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={key}
                    onChange={(e) => {
                      if (e.target.value == "") {
                        setKey("")
                        return
                      }
                      if (unitTo !== "rotation" && !isNaN(parseInt(e.target.value))) {
                        setKey("ABC")
                      } else if (unitTo === "rotation" && isNaN(parseInt(e.target.value))) {
                        setKey("13")
                      } else if (unitTo === "rotation" && !isNaN(parseInt(e.target.value))) {
                        setKey(e.target.value)
                      } else if (unitTo !== "rotation" && isNaN(parseInt(e.target.value))) {
                        setKey(e.target.value)
                      }
                    }}
                  />
                </div>
              )}
            </div>
            {!dictionary[unitTo]?.noSwitch && !dictionary["input"] && !dictionary["noSwitch"] && (
              <SwitchUnitButton switchUnits={switchUnits} />
            )}
          </div>
          <div className="mt-6 flex max-w-full min-w-full flex-col items-center text-black dark:text-white">
            <div className="flex max-w-full min-w-full align-middle">
              <textarea className={className} rows={4} value={output} onChange={(e) => setOutput(e.target.value)} />

              {unitTo === "morse" && (
                <button
                  onClick={playMorse}
                  type="button"
                  className="m-1 h-9 w-9 cursor-pointer items-center rounded-full border border-blue-700 p-2 text-center text-sm font-medium text-sky-600 ring-2 focus:ring-2 focus:ring-blue-300 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>sound-loud</title>
                    <g>
                      <g id="icon" fill="currentColor" transform="translate(42.666667, 85.333333)">
                        <path
                          d="M361.299413,341.610667 L328.014293,314.98176 C402.206933,233.906133 402.206933,109.96608 328.013013,28.8906667 L361.298133,2.26304 C447.910187,98.97536 447.908907,244.898347 361.299413,341.610667 Z M276.912853,69.77216 L243.588693,96.4309333 C283.38432,138.998613 283.38304,204.87488 243.589973,247.44256 L276.914133,274.101333 C329.118507,215.880107 329.118507,127.992107 276.912853,69.77216 Z M191.749973,1.42108547e-14 L80.8957867,87.2292267 L7.10542736e-15,87.2292267 L7.10542736e-15,257.895893 L81.0208,257.895893 L191.749973,343.35424 L191.749973,1.42108547e-14 L191.749973,1.42108547e-14 Z M42.6666667,129.895893 L95.6874667,129.895893 L149.083307,87.8749867 L149.083307,256.520747 L95.5624533,215.229227 L42.6666667,215.229227 L42.6666667,129.895893 Z"
                          id="Shape"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </button>
              )}
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

export default Codes

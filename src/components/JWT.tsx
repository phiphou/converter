import {useEffect, useState} from "react"
import InfosBlock from "./InfosBlock"
import ErrorBlock from "./ErrorBlock"
import jwt_converter from "../converters/jwt_converter"
import {Unit} from "../types/types"

interface UnitSelectProps {
  dictionary: Record<string, Unit>
}

function JWT({dictionary}: UnitSelectProps) {
  const [header, setHeader] = useState<string>(JSON.stringify({alg: "HS256", typ: "JWT"}, null, 2))
  const [payload, setPayload] = useState<string>(
    JSON.stringify(
      {
        sub: "1234567890",
        name: "John Doe",
        admin: true,
        iat: 1516239022,
      },
      null,
      2
    )
  )
  const [secret, setSecret] = useState<string>("a-string-secret-at-least-256-bits-long")
  const [output, setOutput] = useState<string>("")

  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setError(null)
    async function calculateResult() {
      let calculatedResult = ""

      if (header.length >= 0 && payload.length >= 0 && secret.length >= 0) {
        try {
          calculatedResult = String(await jwt_converter(`${header}|||${payload}|||${secret}`))
        } catch (error) {
          setError(error as Error)
        }
        setOutput(calculatedResult)
      }
    }

    calculateResult()
  }, [header, payload, secret, dictionary])

  return (
    <>
      <div className="m-3 mx-auto flex max-w-[100%] min-w-[100%] flex-col items-center justify-center md:max-w-[60%] md:min-w-[60%]">
        <div className="flex w-full flex-col text-black dark:text-white">
          <div className="flex w-full items-center text-black dark:text-white">
            <textarea
              data-testid="header-input"
              rows={4}
              className="mr-3 ml-3 block max-w-[100%] min-w-[100%] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={header}
              placeholder={dictionary["jwt"]?.placeHolder || "Entête JWT"}
              onChange={(e) => setHeader(e.target.value)}
            />{" "}
          </div>

          <div className="mt-6 flex w-full items-center text-black dark:text-white">
            <textarea
              data-testid="payload-intput"
              rows={6}
              className="mr-3 ml-3 block max-w-[100%] min-w-[100%] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={payload}
              onChange={(e) => setPayload(e.target.value)}
            />
          </div>

          <div className="mt-6 flex w-full items-center text-black dark:text-white">
            <input
              type="text"
              data-testid="secret-input"
              className="mr-3 ml-3 block max-w-[100%] min-w-[100%] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <div className="mt-6 flex w-full items-center text-black dark:text-white">
            <textarea
              data-testid="jwt-output"
              rows={4}
              className="mr-3 ml-3 block max-w-[100%] min-w-[100%] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={output}
              readOnly
            />
          </div>
        </div>
      </div>

      {error && <ErrorBlock info={error.message} />}
      {dictionary["jwt"]?.info && <InfosBlock label={dictionary["jwt"].label} info={dictionary["jwt"].info} />}
      {dictionary["jwt"]?.info && dictionary["jwt"]?.info !== dictionary["jwt"]?.info && (
        <InfosBlock label={dictionary["jwt"].label} info={dictionary["jwt"].info} />
      )}

      <div className="mt-20 pb-6">
        {" "}
        {typeof dictionary["infos"] === "object" && (dictionary["infos"] as {label: string})?.label && (
          <InfosBlock label={"JSON Web Token"} info={(dictionary["infos"] as {label: string}).label} />
        )}
      </div>
    </>
  )
}

export default JWT

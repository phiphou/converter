import {Unit} from "../types"

export const currency_converter = async (value: number, unitFrom: Unit, unitTo: Unit): Promise<number> => {
  const now: Date = new Date()
  const date: string = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}`
  const cacheKey = `currency-data-${date}`

  const cachedData = localStorage.getItem(cacheKey)
  if (cachedData) {
    const jsonResponse = JSON.parse(cachedData)

    if (!unitFrom.code || !unitTo.code) {
      throw new Error("unitFrom.code or unitTo.code is undefined")
    }
    const from2Euro = jsonResponse["eur"][unitFrom.code.toLowerCase()]
    const euro2To = jsonResponse["eur"][unitTo.code.toLowerCase()]

    return (euro2To / from2Euro) * value
  }

  const response = await window.fetch(
    `https://${date}.currency-api.pages.dev/v1/currencies/${unitFrom.label.toLowerCase()}.json`
  )
  const jsonResponse = await response.json()

  if (response.ok) {
    if (!unitFrom.code || !unitTo.code) {
      throw new Error("unitFrom.code or unitTo.code is undefined")
    }

    localStorage.setItem(cacheKey, JSON.stringify(jsonResponse))

    return jsonResponse[unitFrom.code.toLowerCase()][unitTo.code.toLowerCase()] * value
  } else {
    const {errors} = jsonResponse
    const error = new Error(errors?.map((e: {message: string}) => e.message).join("\n") ?? "unknown")
    return Promise.reject(error)
  }
}

export default currency_converter

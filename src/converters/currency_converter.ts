import {Unit} from "../types/types"

export const currency_converter = async (
  value: number,
  unitFrom: Unit,
  unitTo: Unit,
  precision: number
): Promise<number> => {
  const now: Date = new Date()
  const date: string = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}`
  const cacheKey = `currency-data`
  const cacheDateKey = `currency-data-date`

  const cachedData = localStorage.getItem(cacheKey)
  const cachedDate = localStorage.getItem(cacheDateKey)

  if (cachedDate !== date) {
    localStorage.removeItem(cacheKey)
    localStorage.removeItem(cacheDateKey)
  }

  if (cachedData && cachedDate === date) {
    const jsonResponse = JSON.parse(cachedData)

    if (!unitFrom.code || !unitTo.code) {
      throw new Error("unitFrom.code or unitTo.code is undefined")
    }
    const from2Euro = jsonResponse["eur"][unitFrom.code.toLowerCase()]
    const euro2To = jsonResponse["eur"][unitTo.code.toLowerCase()]
    return Number(((euro2To / from2Euro) * value).toFixed(precision))
  }

  const response = await window.fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`
  )
  const jsonResponse = await response.json()
  if (response.ok) {
    if (!unitFrom.code || !unitTo.code) {
      throw new Error("unitFrom.code or unitTo.code is undefined")
    }

    localStorage.setItem(cacheKey, JSON.stringify(jsonResponse))
    localStorage.setItem(cacheDateKey, date)

    const from2Euro = jsonResponse["eur"][unitFrom.code.toLowerCase()]
    const euro2To = jsonResponse["eur"][unitTo.code.toLowerCase()]

    return Number(((euro2To / from2Euro) * value).toFixed(precision))
  } else {
    const {errors} = jsonResponse
    const error = new Error(errors?.map((e: {message: string}) => e.message).join("\n") ?? "unknown")
    return Promise.reject(error)
  }
}

export default currency_converter

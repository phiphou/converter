import {ConversionType, Unit} from "../types/types"

const values: Record<string, number> = {
  "2025": 1,
  "2024": 2.0,
  "2023": 4.9,
  "2022": 5.2,
  "2021": 1.6,
  "2020": 0.5,
  "2019": 1.1,
  "2018": 1.8,
  "2017": 1,
  "2016": 0.2,
  "2015": 0,
  "2014": 0.5,
  "2013": 0.9,
  "2012": 2,
  "2011": 2.1,
  "2010": 1.5,
  "2009": 0.1,
  "2008": 2.8,
  "2007": 1.5,
  "2006": 1.6,
  "2005": 1.9,
  "2004": 2.1,
  "2003": 2.1,
  "2002": 2,
  "2001": 1.6,
  "2000": 1.7,
  "1999": 0.5,
  "1998": 0.6,
  "1997": 1.2,
  "1996": 2,
  "1995": 1.9,
  "1994": 1.7,
  "1993": 2.1,
  "1992": 2.3,
  "1991": 3.3,
  "1990": 3.4,
  "1989": 3.6,
  "1988": 2.7,
  "1987": 3.1,
  "1986": 2.7,
  "1985": 5.8,
  "1984": 7.4,
  "1983": 9.6,
  "1982": 11.8,
  "1981": 13.4,
  "1980": 13.6,
  "1979": 10.8,
  "1978": 9.1,
  "1977": 9.4,
  "1976": 9.6,
  "1975": 11.8,
  "1974": 13.7,
  "1973": 9.2,
  "1972": 6.2,
  "1971": 5.7,
  "1970": 5.2,
  "1969": 6.5,
  "1968": 4.5,
  "1967": 2.7,
  "1966": 2.7,
  "1965": 2.5,
  "1964": 3.4,
  "1963": 4.8,
  "1962": 4.8,
  "1961": 3.3,
  "1960": 3.6,
  "1959": 6.2,
  "1958": 15.1,
  "1957": 3,
  "1956": 4.2,
  "1955": 1,
  "1954": 0.4,
  "1953": -1.7,
  "1952": 11.9,
  "1951": 16.2,
  "1950": 10,
  "1949": 13.2,
  "1948": 58.7,
  "1947": 49.2,
  "1946": 52.6,
  "1945": 48.5,
  "1944": 22.2,
  "1943": 24.1,
  "1942": 20.3,
  "1941": 17.5,
  "1940": 17.8,
  "1939": 7,
  "1938": 13.7,
  "1937": 25.7,
  "1936": 7.7,
  "1935": -8.5,
  "1934": -4.1,
  "1933": -3.9,
  "1932": -8.3,
  "1931": -4.5,
  "1930": 1.1,
  "1929": 6.1,
  "1928": 0,
  "1927": 3.8,
  "1926": 31.7,
  "1925": 7.2,
  "1924": 14.2,
  "1923": 8.9,
  "1922": -2.1,
  "1921": -13.3,
  "1920": 39.5,
  "1919": 22.6,
  "1918": 29.2,
  "1917": 20,
  "1916": 11.2,
  "1915": 19.8,
  "1914": 0,
  "1913": 0,
  "1912": 0,
  "1911": 15.5,
  "1910": 0,
  "1909": 0,
  "1908": 0,
  "1907": 8.5,
  "1906": -7.9,
  "1905": 0,
  "1904": 0,
  "1903": 0,
  "1902": 0,
  "1901": 0,
  "1900": 0,
}

const CONVERSION_RATES = {
  FRANC_TO_EURO: 6.55957,
  ANCIEN_FRANC_TO_FRANC: 100,
}

function convertCurrency(value: number, type: ConversionType): number {
  switch (type) {
    case ConversionType.OFE:
      return value / CONVERSION_RATES.ANCIEN_FRANC_TO_FRANC / CONVERSION_RATES.FRANC_TO_EURO
    case ConversionType.FE:
      return value / CONVERSION_RATES.FRANC_TO_EURO
    case ConversionType.EE:
      return value
    case ConversionType.EF:
      return value * CONVERSION_RATES.FRANC_TO_EURO
    case ConversionType.EDF:
      return value * CONVERSION_RATES.FRANC_TO_EURO * CONVERSION_RATES.ANCIEN_FRANC_TO_FRANC
    default:
      return value
  }
}

function applyInflation(startYear: number, endYear: number, value: number): number {
  let result = value
  if (startYear > endYear) {
    for (let year = startYear - 1; year > endYear; year--) {
      const rate = values[year.toString()]
      if (rate !== undefined) result /= 1 + rate / 100
    }
  } else {
    for (let year = startYear; year <= endYear; year++) {
      const rate = values[year.toString()]
      if (rate !== undefined) result *= 1 + rate / 100
    }
  }
  return result
}

/**
 * Calcule le facteur d'inflation cumulée entre deux années (ex : 1.25 pour +25%)
 */
function getCumulativeInflationFactor(startYear: number, endYear: number): number {
  let factor = 1
  if (startYear > endYear) {
    for (let year = startYear - 1; year > endYear; year--) {
      const rate = values[year.toString()]
      if (rate !== undefined) factor /= 1 + rate / 100
    }
  } else {
    for (let year = startYear; year <= endYear; year++) {
      const rate = values[year.toString()]
      if (rate !== undefined) factor *= 1 + rate / 100
    }
  }
  return factor
}

/**
 * Retourne la conversion ET l'inflation cumulée en pourcentage
 */
export const inflation_converter = async (
  value: string | number,
  unitFrom: Unit,
  unitTo: Unit
): Promise<{result: string; cumulativeInflation: string}> => {
  if (!unitFrom || !unitTo) return {result: "", cumulativeInflation: ""}

  const startYear = unitFrom.key?.toString() ?? "1990"
  const endYear = unitTo.key?.toString() ?? "2014"
  const conversionType = (unitTo.key2 as ConversionType) ?? ConversionType.FE
  const numericValue = typeof value === "string" ? parseFloat(value) : value

  const start = parseInt(startYear)
  const end = parseInt(endYear)

  let result = convertCurrency(numericValue, conversionType)
  result = applyInflation(start, end, result)

  const inflationFactor = getCumulativeInflationFactor(start, end)
  const cumulativeInflation = ((inflationFactor - 1) * 100).toFixed(2) // en %

  return {
    result: result.toString(),
    cumulativeInflation: cumulativeInflation,
  }
}

// result : valeur convertie
// cumulativeInflation : pourcentage d'inflation cumulée (ex: "25.00" pour +25%)

export default inflation_converter

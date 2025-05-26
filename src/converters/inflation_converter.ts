import {ConversionType, Unit} from "../types/types"

const UsValues: Record<string, number> = {
  "2024": 2.9,
  "2023": 4.1,
  "2022": 8.1,
  "2021": 4.7,
  "2020": 1.2,
  "2019": 1.8,
  "2018": 2.4,
  "2017": 2.1,
  "2016": 1.3,
  "2015": 0.1,
  "2014": 1.6,
  "2013": 1.5,
  "2012": 2.1,
  "2011": 3.2,
  "2010": 1.6,
  "2009": -0.4,
  "2008": 3.8,
  "2007": 2.8,
  "2006": 3.2,
  "2005": 3.4,
  "2004": 2.7,
  "2003": 2.3,
  "2002": 1.6,
  "2001": 2.8,
  "2000": 3.4,
  "1999": 2.2,
  "1998": 1.6,
  "1997": 2.3,
  "1996": 3.0,
  "1995": 2.8,
  "1994": 2.6,
  "1993": 3.0,
  "1992": 3.0,
  "1991": 4.2,
  "1990": 5.4,
  "1989": 4.8,
  "1988": 4.1,
  "1987": 3.6,
  "1986": 1.9,
  "1985": 3.6,
  "1984": 4.3,
  "1983": 3.2,
  "1982": 6.2,
  "1981": 10.3,
  "1980": 13.5,
  "1979": 11.3,
  "1978": 7.6,
  "1977": 6.5,
  "1976": 5.8,
  "1975": 9.1,
  "1974": 11.0,
  "1973": 6.2,
  "1972": 3.2,
  "1971": 4.4,
  "1970": 5.7,
  "1969": 5.5,
  "1968": 3.2,
  "1967": 4.1,
  "1966": 2.9,
  "1965": 1.6,
  "1964": 1.3,
  "1963": 1.3,
  "1962": 1.0,
  "1961": 1.0,
  "1960": 1.7,
  "1959": 0.7,
  "1958": 2.8,
  "1957": 3.3,
  "1956": 1.1,
  "1955": -0.4,
  "1954": 0.7,
  "1953": 0.8,
  "1952": 1.9,
  "1951": 7.9,
  "1950": 1.3,
  "1949": -1.2,
  "1948": 8.1,
  "1947": 14.4,
  "1946": 8.3,
  "1945": 2.3,
  "1944": 1.7,
  "1943": 6.9,
  "1942": 10.9,
  "1941": 5.0,
  "1940": 0.7,
  "1939": -1.4,
  "1938": -2.1,
  "1937": 3.6,
  "1936": 1.5,
  "1935": 2.2,
  "1934": 3.1,
  "1933": -5.1,
  "1932": -9.9,
  "1931": -9.0,
  "1930": -2.3,
  "1929": 0,
  "1928": -1.7,
  "1927": -1.7,
  "1926": 1.1,
  "1925": 2.3,
  "1924": 0,
  "1923": 1.3,
  "1922": -6.1,
  "1921": -10.5,
  "1920": 15.6,
  "1919": 14.6,
  "1918": 18.0,
  "1917": 17.4,
  "1916": 7.9,
  "1915": 1,
  "1914": 1,
}

const values: Record<string, number> = {
  "2024": 2,
  "2023": 4.87,
  "2022": 5.22,
  "2021": 1.64,
  "2020": 0.48,
  "2019": 1.11,
  "2018": 1.85,
  "2017": 1.04,
  "2016": 0.18,
  "2015": 0.04,
  "2014": 0.5,
  "2013": 0.87,
  "2012": 1.95,
  "2011": 2.11,
  "2010": 1.52,
  "2009": 0.09,
  "2008": 2.81,
  "2007": 1.49,
  "2006": 1.63,
  "2005": 1.85,
  "2004": 2.13,
  "2003": 2.05,
  "2002": 1.97,
  "2001": 1.63,
  "2000": 1.65,
  "1999": 0.51,
  "1998": 0.64,
  "1997": 1.17,
  "1996": 1.99,
  "1995": 1.89,
  "1994": 1.65,
  "1993": 2.11,
  "1992": 2.3,
  "1991": 3.26,
  "1990": 3.37,
  "1989": 3.61,
  "1988": 2.69,
  "1987": 3.15,
  "1986": 2.66,
  "1985": 5.81,
  "1984": 7.4,
  "1983": 9.62,
  "1982": 11.82,
  "1981": 13.4,
  "1980": 13.55,
  "1979": 10.79,
  "1978": 9.06,
  "1977": 9.34,
  "1976": 9.65,
  "1975": 11.74,
  "1974": 13.76,
  "1973": 9.23,
  "1972": 6.15,
  "1971": 5.66,
  "1970": 5.22,
  "1969": 6.42,
  "1968": 4.5,
  "1967": 2.78,
  "1966": 2.68,
  "1965": 2.48,
  "1964": 3.48,
  "1963": 4.8,
  "1962": 4.72,
  "1961": 3.32,
  "1960": 3.66,
  "1959": 6.17,
  "1958": 14.98,
  "1957": 3.12,
  "1956": 4.09,
  "1955": 1,
  "1954": 0.43,
  "1953": -1.99,
  "1952": 11.97,
  "1951": 16.09,
  "1950": 10.06,
  "1949": 13.21,
  "1948": 58.48,
  "1947": 49.73,
  "1946": 52.89,
  "1945": 47.56,
  "1944": 22.39,
  "1943": 24.07,
  "1942": 20,
  "1941": 18.42,
  "1940": 18.75,
  "1939": 6.67,
  "1938": 11.11,
  "1937": 28.57,
  "1936": 5,
  "1935": -9.09,
  "1934": 0,
  "1933": -4.35,
  "1932": -8.0,
  "1931": -7.41,
  "1930": 3.85,
  "1929": 4,
  "1928": 0,
  "1927": 4.17,
  "1926": 33.33,
  "1925": 5.88,
  "1924": 13.33,
  "1923": 7.14,
  "1922": 0,
  "1921": -12.12,
  "1920": 33.33,
  "1919": 33.33,
  "1918": 28.57,
  "1917": 16.67,
  "1916": 20,
  "1915": 0,
  "1914": 0,
  "1913": 0,
  "1912": 0,
  "1911": 25,
  "1910": 0,
  "1909": 0,
  "1908": 0,
  "1907": 0,
  "1906": 0,
  "1905": 0,
  "1904": 0,
  "1903": 0,
  "1902": 0,
  "1901": 0,
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
    case ConversionType.DD:
      return value
    case ConversionType.EF:
      return value * CONVERSION_RATES.FRANC_TO_EURO
    case ConversionType.EDF:
      return value * CONVERSION_RATES.FRANC_TO_EURO * CONVERSION_RATES.ANCIEN_FRANC_TO_FRANC
    default:
      return value
  }
}

function applyInflation(startYear: number, endYear: number, value: number, dollar: boolean): number {
  let result = value
  if (startYear > endYear) {
    for (let year = startYear; year > endYear; year--) {
      const rate = dollar ? UsValues[year.toString()] : values[year.toString()]
      if (rate !== undefined) result /= 1 + rate / 100
    }
  } else {
    for (let year = startYear; year <= endYear; year++) {
      const rate = dollar ? UsValues[year.toString()] : values[year.toString()]
      if (rate !== undefined) result *= 1 + rate / 100
    }
  }
  return result
}

function getCumulativeInflationFactor(startYear: number, endYear: number, dollar: boolean): number {
  let factor = 1
  if (startYear > endYear) {
    for (let year = startYear; year > endYear; year--) {
      const rate = dollar ? UsValues[year.toString()] : values[year.toString()]
      if (rate !== undefined) factor /= 1 + rate / 100
    }
  } else {
    for (let year = startYear; year <= endYear; year++) {
      const rate = dollar ? UsValues[year.toString()] : values[year.toString()]
      if (rate !== undefined) factor *= 1 + rate / 100
    }
  }
  return factor
}

function getGraphDatas(startYear: number, endYear: number, dollar: boolean): object {
  const datas = []
  const labels = []
  if (startYear > endYear) {
    for (let year = startYear; year > endYear; year--) {
      const rate = dollar ? UsValues[year.toString()] : values[year.toString()]
      if (rate !== undefined) {
        labels.push(year)
        datas.push(rate)
      }
    }
  } else {
    for (let year = startYear; year <= endYear; year++) {
      const rate = dollar ? UsValues[year.toString()] : values[year.toString()]
      if (rate !== undefined) {
        labels.push(year)
        datas.push(rate)
      }
    }
  }
  return {labels, datas}
}

export const inflation_converter = async (
  value: string | number,
  unitFrom: Unit,
  unitTo: Unit
): Promise<{result: string; cumulativeInflation: string; graphDatas: object}> => {
  if (!unitFrom || !unitTo) return {result: "", cumulativeInflation: "", graphDatas: {}}
  const startYear = unitFrom.key?.toString() ?? "1990"
  const endYear = unitTo.key?.toString() ?? "2014"
  const conversionType = (unitTo.key2 as ConversionType) ?? ConversionType.FE
  console.log("inflation_converter", {value, startYear, endYear, conversionType})
  const numericValue = typeof value === "string" ? parseFloat(value) : value
  const start = parseInt(startYear)
  const end = parseInt(endYear)
  let result = convertCurrency(numericValue, conversionType)
  result = applyInflation(start, end, result, conversionType === ConversionType.DD)
  const inflationFactor = getCumulativeInflationFactor(start, end, conversionType === ConversionType.DD)
  const cumulativeInflation = ((inflationFactor - 1) * 100).toFixed(2)
  const graphDatas = getGraphDatas(start, end, conversionType === ConversionType.DD)
  return {
    result: result.toString(),
    cumulativeInflation: cumulativeInflation,
    graphDatas,
  }
}

export default inflation_converter

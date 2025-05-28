import {ConversionType, Unit} from "../types/types"

const values: Record<number, {usValue: number; value: number; parity: number}> = {
  "1914": {
    usValue: 1,
    value: 0,
    parity: -1,
  },
  "1915": {
    usValue: 1,
    value: 0,
    parity: -1,
  },
  "1916": {
    usValue: 7.9,
    value: 20,
    parity: -1,
  },
  "1917": {
    usValue: 17.4,
    value: 16.67,
    parity: -1,
  },
  "1918": {
    usValue: 18,
    value: 28.57,
    parity: -1,
  },
  "1919": {
    usValue: 14.6,
    value: 33.33,
    parity: -1,
  },
  "1920": {
    usValue: 15.6,
    value: 33.33,
    parity: -1,
  },
  "1921": {
    usValue: -10.5,
    value: -12.12,
    parity: -1,
  },
  "1922": {
    usValue: -6.1,
    value: 0,
    parity: -1,
  },
  "1923": {
    usValue: 1.3,
    value: 7.14,
    parity: -1,
  },
  "1924": {
    usValue: 0,
    value: 13.33,
    parity: -1,
  },
  "1925": {
    usValue: 2.3,
    value: 5.88,
    parity: -1,
  },
  "1926": {
    usValue: 1.1,
    value: 33.33,
    parity: -1,
  },
  "1927": {
    usValue: -1.7,
    value: 4.17,
    parity: -1,
  },
  "1928": {
    usValue: -1.7,
    value: 0,
    parity: -1,
  },
  "1929": {
    usValue: 0,
    value: 4,
    parity: -1,
  },
  "1930": {
    usValue: -2.3,
    value: 3.85,
    parity: -1,
  },
  "1931": {
    usValue: -9,
    value: -7.41,
    parity: -1,
  },
  "1932": {
    usValue: -9.9,
    value: -8,
    parity: -1,
  },
  "1933": {
    usValue: -5.1,
    value: -4.35,
    parity: -1,
  },
  "1934": {
    usValue: 3.1,
    value: 0,
    parity: -1,
  },
  "1935": {
    usValue: 2.2,
    value: -9.09,
    parity: -1,
  },
  "1936": {
    usValue: 1.5,
    value: 5,
    parity: -1,
  },
  "1937": {
    usValue: 3.6,
    value: 28.57,
    parity: -1,
  },
  "1938": {
    usValue: -2.1,
    value: 11.11,
    parity: -1,
  },
  "1939": {
    usValue: -1.4,
    value: 6.67,
    parity: -1,
  },
  "1940": {
    usValue: 0.7,
    value: 18.75,
    parity: -1,
  },
  "1941": {
    usValue: 5,
    value: 18.42,
    parity: -1,
  },
  "1942": {
    usValue: 10.9,
    value: 20,
    parity: -1,
  },
  "1943": {
    usValue: 6.9,
    value: 24.07,
    parity: -1,
  },
  "1944": {
    usValue: 1.7,
    value: 22.39,
    parity: -1,
  },
  "1945": {
    usValue: 2.3,
    value: 47.56,
    parity: -1,
  },
  "1946": {
    usValue: 8.3,
    value: 52.89,
    parity: -1,
  },
  "1947": {
    usValue: 14.4,
    value: 49.73,
    parity: -1,
  },
  "1948": {
    usValue: 8.1,
    value: 58.48,
    parity: -1,
  },
  "1949": {
    usValue: -1.2,
    value: 13.21,
    parity: -1,
  },
  "1950": {
    usValue: 1.3,
    value: 10.06,
    parity: -1,
  },
  "1951": {
    usValue: 7.9,
    value: 16.09,
    parity: -1,
  },
  "1952": {
    usValue: 1.9,
    value: 11.97,
    parity: -1,
  },
  "1953": {
    usValue: 0.8,
    value: -1.99,
    parity: 1.047586,
  },
  "1954": {
    usValue: 0.7,
    value: 0.43,
    parity: 1.048667,
  },
  "1955": {
    usValue: -0.4,
    value: 1,
    parity: 1.048005,
  },
  "1956": {
    usValue: 1.1,
    value: 4.09,
    parity: 1.045891,
  },
  "1957": {
    usValue: 3.3,
    value: 3.12,
    parity: 1.023928,
  },
  "1958": {
    usValue: 2.8,
    value: 14.98,
    parity: 0.990864,
  },
  "1959": {
    usValue: 0.7,
    value: 6.17,
    parity: 0.951933,
  },
  "1960": {
    usValue: 1.7,
    value: 3.66,
    parity: 0.952619,
  },
  "1961": {
    usValue: 1,
    value: 3.32,
    parity: 0.963781,
  },
  "1962": {
    usValue: 1,
    value: 4.72,
    parity: 0.966116,
  },
  "1963": {
    usValue: 1.3,
    value: 4.8,
    parity: 0.966156,
  },
  "1964": {
    usValue: 1.3,
    value: 3.48,
    parity: 0.965735,
  },
  "1965": {
    usValue: 1.6,
    value: 2.48,
    parity: 0.964932,
  },
  "1966": {
    usValue: 2.9,
    value: 2.68,
    parity: 0.963365,
  },
  "1967": {
    usValue: 4.1,
    value: 2.78,
    parity: 0.962686,
  },
  "1968": {
    usValue: 3.2,
    value: 4.5,
    parity: 0.946667,
  },
  "1969": {
    usValue: 5.5,
    value: 6.42,
    parity: 0.937533,
  },
  "1970": {
    usValue: 5.7,
    value: 5.22,
    parity: 0.941126,
  },
  "1971": {
    usValue: 4.4,
    value: 5.66,
    parity: 0.963878,
  },
  "1972": {
    usValue: 3.2,
    value: 6.15,
    parity: 1.040447,
  },
  "1973": {
    usValue: 6.2,
    value: 9.23,
    parity: 1.165681,
  },
  "1974": {
    usValue: 11,
    value: 13.76,
    parity: 1.131471,
  },
  "1975": {
    usValue: 9.1,
    value: 11.74,
    parity: 1.194235,
  },
  "1976": {
    usValue: 5.8,
    value: 9.65,
    parity: 1.092055,
  },
  "1977": {
    usValue: 6.5,
    value: 9.34,
    parity: 1.123231,
  },
  "1978": {
    usValue: 7.6,
    value: 9.06,
    parity: 1.25705,
  },
  "1979": {
    usValue: 11.3,
    value: 10.79,
    parity: 1.346609,
  },
  "1980": {
    usValue: 13.5,
    value: 13.55,
    parity: 1.351982,
  },
  "1981": {
    usValue: 10.3,
    value: 13.4,
    parity: 1.072767,
  },
  "1982": {
    usValue: 6.2,
    value: 11.82,
    parity: 0.943923,
  },
  "1983": {
    usValue: 3.2,
    value: 9.62,
    parity: 0.863673,
  },
  "1984": {
    usValue: 4.3,
    value: 7.4,
    parity: 0.764744,
  },
  "1985": {
    usValue: 3.6,
    value: 5.81,
    parity: 0.738132,
  },
  "1986": {
    usValue: 1.9,
    value: 2.66,
    parity: 0.972087,
  },
  "1987": {
    usValue: 3.6,
    value: 3.15,
    parity: 1.148627,
  },
  "1988": {
    usValue: 4.1,
    value: 2.69,
    parity: 1.169898,
  },
  "1989": {
    usValue: 4.8,
    value: 3.61,
    parity: 1.09195,
  },
  "1990": {
    usValue: 5.4,
    value: 3.37,
    parity: 1.271003,
  },
  "1991": {
    usValue: 4.2,
    value: 3.26,
    parity: 1.236353,
  },
  "1992": {
    usValue: 3,
    value: 2.3,
    parity: 1.301715,
  },
  "1993": {
    usValue: 3,
    value: 2.11,
    parity: 1.184672,
  },
  "1994": {
    usValue: 2.6,
    value: 1.65,
    parity: 1.201994,
  },
  "1995": {
    usValue: 2.8,
    value: 1.89,
    parity: 1.332457,
  },
  "1996": {
    usValue: 3,
    value: 1.99,
    parity: 1.290422,
  },
  "1997": {
    usValue: 2.3,
    value: 1.17,
    parity: 1.131451,
  },
  "1998": {
    usValue: 1.6,
    value: 0.64,
    parity: 1.114781,
  },
  "1999": {
    usValue: 2.2,
    value: 0.51,
    parity: 1.065929,
  },
  "2000": {
    usValue: 3.4,
    value: 1.65,
    parity: 0.923612,
  },
  "2001": {
    usValue: 2.8,
    value: 1.63,
    parity: 0.895571,
  },
  "2002": {
    usValue: 1.6,
    value: 1.97,
    parity: 0.945574,
  },
  "2003": {
    usValue: 2.3,
    value: 2.05,
    parity: 1.131148,
  },
  "2004": {
    usValue: 2.7,
    value: 2.13,
    parity: 1.243943,
  },
  "2005": {
    usValue: 3.4,
    value: 1.85,
    parity: 1.244114,
  },
  "2006": {
    usValue: 3.2,
    value: 1.63,
    parity: 1.255623,
  },
  "2007": {
    usValue: 2.8,
    value: 1.49,
    parity: 1.370478,
  },
  "2008": {
    usValue: 3.8,
    value: 2.81,
    parity: 1.470755,
  },
  "2009": {
    usValue: -0.4,
    value: 0.09,
    parity: 1.394759,
  },
  "2010": {
    usValue: 1.6,
    value: 1.52,
    parity: 1.325695,
  },
  "2011": {
    usValue: 3.2,
    value: 2.11,
    parity: 1.39193,
  },
  "2012": {
    usValue: 2.1,
    value: 1.95,
    parity: 1.284789,
  },
  "2013": {
    usValue: 1.5,
    value: 0.87,
    parity: 1.328118,
  },
  "2014": {
    usValue: 1.6,
    value: 0.5,
    parity: 1.328501,
  },
  "2015": {
    usValue: 0.1,
    value: 0.04,
    parity: 1.109513,
  },
  "2016": {
    usValue: 1.3,
    value: 0.18,
    parity: 1.106903,
  },
  "2017": {
    usValue: 2.1,
    value: 1.04,
    parity: 1.129686,
  },
  "2018": {
    usValue: 2.4,
    value: 1.85,
    parity: 1.180955,
  },
  "2019": {
    usValue: 1.8,
    value: 1.11,
    parity: 1.119475,
  },
  "2020": {
    usValue: 1.2,
    value: 0.48,
    parity: 1.142196,
  },
  "2021": {
    usValue: 4.7,
    value: 1.64,
    parity: 1.18274,
  },
  "2022": {
    usValue: 8.1,
    value: 5.22,
    parity: 1.053049,
  },
  "2023": {
    usValue: 4.1,
    value: 4.87,
    parity: 1.081269,
  },
  "2024": {
    usValue: 2.9,
    value: 2,
    parity: 1.082393,
  },
}

const CONVERSION_RATES = {
  FRANC_TO_EURO: 6.55957,
  ANCIEN_FRANC_TO_FRANC: 100,
}

function convertCurrency(value: number, type: ConversionType): number {
  switch (type) {
    case ConversionType.OFE:
      return value / CONVERSION_RATES.ANCIEN_FRANC_TO_FRANC / CONVERSION_RATES.FRANC_TO_EURO
    case ConversionType.OFD:
      return value / CONVERSION_RATES.ANCIEN_FRANC_TO_FRANC / CONVERSION_RATES.FRANC_TO_EURO
    case ConversionType.FE:
      return value / CONVERSION_RATES.FRANC_TO_EURO
    case ConversionType.FD:
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
      const rate = dollar ? values[year]["usValue"] : values[year]["value"]
      if (rate !== undefined) result /= 1 + rate / 100
    }
  } else {
    for (let year = startYear; year <= endYear; year++) {
      const rate = dollar ? values[year]["usValue"] : values[year]["value"]
      if (rate !== undefined) result *= 1 + rate / 100
    }
  }
  return result
}

function getCumulativeInflationFactor(startYear: number, endYear: number, dollar: boolean): number {
  let factor = 1
  if (startYear > endYear) {
    for (let year = startYear; year > endYear; year--) {
      const rate = dollar ? values[year]["usValue"] : values[year]["value"]
      if (rate !== undefined) factor /= 1 + rate / 100
    }
  } else {
    for (let year = startYear; year <= endYear; year++) {
      const rate = dollar ? values[year]["usValue"] : values[year]["value"]
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
      const rate = dollar ? values[year]["usValue"] : values[year]["value"]
      if (rate !== undefined) {
        labels.push(year)
        datas.push(rate)
      }
    }
  } else {
    for (let year = startYear; year <= endYear; year++) {
      const rate = dollar ? values[year]["usValue"] : values[year]["value"]
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

  const numericValue = typeof value === "string" ? parseFloat(value) : value
  const start = parseInt(startYear)
  const end = parseInt(endYear)
  let result = convertCurrency(numericValue, conversionType)
  result = applyInflation(
    start,
    end,
    result,
    conversionType === ConversionType.DD || conversionType === ConversionType.DE
  )
  if (
    conversionType === ConversionType.DE ||
    conversionType === ConversionType.DF ||
    conversionType === ConversionType.DOF
  ) {
    result /= values[end]["parity"] || 1
  } else if (
    conversionType === ConversionType.ED ||
    conversionType === ConversionType.FD ||
    conversionType === ConversionType.OFD
  ) {
    result *= values[end]["parity"] || 1
  }
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

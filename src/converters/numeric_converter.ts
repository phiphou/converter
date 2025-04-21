import {Unit} from "../types"

function integerToRoman(number: string): string {
  let num = parseInt(number)
  const romanValues = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }
  let roman = ""
  for (const key in romanValues) {
    const romanKey = key as keyof typeof romanValues
    while (num >= romanValues[romanKey]) {
      roman += key
      num -= romanValues[romanKey]
    }
  }
  return roman
}

function romanToInteger(s: string): string {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let result = 0

  for (let i = 0; i < s.length; i++) {
    const cur = sym[s[i] as keyof typeof sym]
    const next = sym[s[i + 1] as keyof typeof sym]

    if (cur < next) {
      result += next - cur
      i++
    } else {
      result += cur
    }
  }

  return result.toString()
}

function decimalToBinary(decimalNumber: string) {
  return parseInt(decimalNumber).toString(2)
}

function decimalToOctal(decimalNumber: string) {
  return parseInt(decimalNumber).toString(8)
}

function decimalToHexadecimal(decimalNumber: string) {
  return parseInt(decimalNumber).toString(16)
}

function binaryToDecimal(binaryNumber: string) {
  return parseInt(binaryNumber, 2).toString()
}

function binaryToHexadecimal(binaryNumber: string) {
  return parseInt(binaryNumber, 16).toString()
}

function decimalToSexagesimal(decimalNumber: string) {
  const value = parseFloat(decimalNumber)
  const hours = Math.floor(value)
  const minutesDecimal = (value - hours) * 60
  const minutes = Math.floor(minutesDecimal)
  const seconds = ((minutesDecimal - minutes) * 60).toFixed(2)

  return `${hours}° ${minutes}' ${seconds}"`
}

function sexagesimalToDecimal(sexaStr: string): string {
  const [hours, minutes, seconds] = sexaStr.split(":").map(Number)
  return (hours + minutes / 60 + seconds / 3600).toString()
}

const conversionMap: Record<string, (v: string) => string> = {
  "décimal:romain": (v) => integerToRoman(v),
  "décimal:binaire": (v) => decimalToBinary(v),
  "décimal:octal": (v) => decimalToOctal(v),
  "décimal:hexadécimal": (v) => decimalToHexadecimal(v),
  "décimal:sexagésimal": (v) => decimalToSexagesimal(v),
  "romain:décimal": (v) => romanToInteger(v),
  "romain:binaire": (v) => decimalToBinary(romanToInteger(v)),
  "romain:octal": (v) => decimalToOctal(romanToInteger(v)),
  "romain:hexadécimal": (v) => decimalToBinary(romanToInteger(v)),
  "binaire:décimal": (v) => binaryToDecimal(v),
  "binaire:romain": (v) => integerToRoman(binaryToDecimal(v)),
  "binaire:octal": (v) => decimalToOctal(binaryToDecimal(v)),
  "binaire:hexadécimal": (v) => binaryToHexadecimal(v),
  "sexagésimal:décimal": (v) => sexagesimalToDecimal(v.toString()),
}

export const numeric_converter = (value: string, unitFrom: Unit, unitTo: Unit): string => {
  if (unitFrom.label === unitTo.label) return value.toString()

  const key = `${unitFrom.label}:${unitTo.label}`

  const conversionFunction = conversionMap[key]

  if (!conversionFunction) throw new Error(`Unsupported conversion from ${unitFrom.label} to ${unitTo.label}`)

  return conversionFunction(value)
}

import {Unit} from "../types"

function integerToRoman(number: string): string {
  let num = parseInt(number.toString())
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
  return parseInt(decimalNumber).toString(16).toUpperCase()
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

const digitCipher = {
  "𓏺": 1,
  "𓎆": 10,
  "𓍢": 100,
  "𓆼": 1000,
  "𓂭": 10000,
  "𓆐": 100000,
  "𓁨": 1000000,
}

const reverseCipher: Record<number, string> = {}
for (const [glyph, value] of Object.entries(digitCipher)) {
  reverseCipher[value] = glyph
}

// function hieroglyphs2number(hieroglyphs:string) {
//   let res = 0;
//   for (const char of hieroglyphs) {
//     res += digitCipher[char as keyof typeof digitCipher] || 0;
//   }
//   return res;
// }

function integerTohieroglyphs(number: string) {
  let n = parseInt(number)
  let res = ""
  const powers = Object.keys(reverseCipher)
    .map(Number)
    .sort((a, b) => b - a)

  for (const power of powers) {
    while (n >= power) {
      res += reverseCipher[power]
      n -= power
    }
  }
  return res
}

const numeralDict = {
  "\u{1D2E0}": 0,
  "\u{1D2E1}": 1,
  "\u{1D2E2}": 2,
  "\u{1D2E3}": 3,
  "\u{1D2E4}": 4,
  "\u{1D2E5}": 5,
  "\u{1D2E6}": 6,
  "\u{1D2E7}": 7,
  "\u{1D2E8}": 8,
  "\u{1D2E9}": 9,
  "\u{1D2EA}": 10,
  "\u{1D2EB}": 11,
  "\u{1D2EC}": 12,
  "\u{1D2ED}": 13,
  "\u{1D2EE}": 14,
  "\u{1D2EF}": 15,
  "\u{1D2F0}": 16,
  "\u{1D2F1}": 17,
  "\u{1D2F2}": 18,
  "\u{1D2F3}": 19,
}

// Inversion : chiffre => glyphe
const reverseDict: Record<number, string> = {}
for (const [glyph, value] of Object.entries(numeralDict)) {
  reverseDict[value] = glyph
}

// Convertisseur nombre vers glyphes mayas
function convertToMayaGlyphs(number: string) {
  const num: number = parseInt(number)
  if (num < 0) return ""

  const numeralStack = []
  let n = num

  while (n > 0) {
    const remainder = n % 20
    numeralStack.push(remainder)
    n = Math.floor(n / 20)
  }

  if (numeralStack.length === 0) numeralStack.push(0)

  return (
    "<span>" +
    numeralStack
      .map((num) => reverseDict[num])
      .reverse()
      .join(" </span><span>") +
    "</span>"
  )
}

// function convertFromMayaGlyphs(glyphList) {
//   let total = 0
//   let power = glyphList.length - 1

//   for (const glyph of glyphList) {
//     const value = numeralDict[glyph] !== undefined ? numeralDict[glyph] : 0
//     total += value * Math.pow(20, power)
//     power--
//   }

//   return total
// }

function integerToBabylonian(number: string): string {
  let num = parseInt(number)
  if (num < 0) return "Le nombre doit être positif."

  const result = []
  while (num > 0) {
    const remainder = num % 60
    const tens = Math.floor(remainder / 10)
    const units = remainder % 10

    result.unshift([tens, units].toString())
    num = Math.floor(num / 60)
  }

  return result.join("-")
}

const conversionMap: Record<string, (v: string) => string> = {
  "décimal:romain": (v) => integerToRoman(v),
  "décimal:égyptien": (v) => integerTohieroglyphs(v),
  "décimal:maya": (v) => convertToMayaGlyphs(v),
  "décimal:babylonien": (v) => integerToBabylonian(v),
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

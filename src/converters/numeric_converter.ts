/* eslint-disable local/no-double-space-in-strings */
import {Unit} from "../types/types"

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

// function romanToInteger(s: string): string {
//   const sym = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   }
//   let result = 0
//   for (let i = 0; i < s.length; i++) {
//     const cur = sym[s[i] as keyof typeof sym]
//     const next = sym[s[i + 1] as keyof typeof sym]
//     if (cur < next) {
//       result += next - cur
//       i++
//     } else {
//       result += cur
//     }
//   }
//   return result.toString()
// }

// function binaryToDecimal(binaryNumber: string) {
//   return parseInt(binaryNumber, 2).toString()
// }

// function binaryToHexadecimal(binaryNumber: string) {
//   return parseInt(binaryNumber, 16).toString()
// }

function decimalToSexagesimal(decimalNumber: string) {
  const value = parseFloat(decimalNumber)
  const hours = Math.floor(value)
  const minutesDecimal = (value - hours) * 60
  const minutes = Math.floor(minutesDecimal)
  return `${hours}° ${minutes}' ${((minutesDecimal - minutes) * 60).toFixed(2)}"`
}

// function sexagesimalToDecimal(sexaStr: string): string {
//   const [hours, minutes, seconds] = sexaStr.split(":").map(Number)
//   return (hours + minutes / 60 + seconds / 3600).toString()
// }

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
  "𝋠": 0,
  "𝋡": 1,
  "𝋢": 2,
  "𝋣": 3,
  "𝋤": 4,
  "𝋥": 5,
  "𝋦": 6,
  "𝋧": 7,
  "𝋨": 8,
  "𝋩": 9,
  "𝋪": 10,
  "𝋫": 11,
  "𝋬": 12,
  "𝋭": 13,
  "𝋮": 14,
  "𝋯": 15,
  "𝋰": 16,
  "𝋱": 17,
  "𝋲": 18,
  "𝋳": 19,
}

const reverseDict: Record<number, string> = {}
for (const [glyph, value] of Object.entries(numeralDict)) {
  reverseDict[value] = glyph
}

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

function convertToKaktovik_digit(number: string) {
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
  return numeralStack.join("-")
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

async function integerToBabylonian(number: string): Promise<string> {
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

const POINTS = [
  "0,0 0,3",
  "0,0 1,0",
  "0,1 1,1",
  "0,0 1,1",
  "0,1 1,0",
  "0,0 1,0 0,1",
  "1,0 1,1",
  "0,0 1,0 1,1",
  "1,0 1,1 0,1",
  "0,0 1,0 1,1 0,1",
]

const Digit = (value: number, magnitude: number) => {
  const getTransform = () => {
    switch (magnitude) {
      case 1:
        return "scale(-1, 1)"
      case 2:
        return "translate(0, 3) scale(1, -1)"
      case 3:
        return "translate(0, 3) scale(-1, -1)"
      default:
        return ""
    }
  }
  return `<polyline  ${getTransform() != "" ? "transform='" + getTransform() + "'" : "transform"} points="${POINTS[value]}"></polyline>`
}

function decimalToCistercian(number: string): string {
  const num = parseInt(number)
  if (num < 0) return ""
  if (num > 9999) return ""

  let result = `<svg viewBox="-1.5 -0.5 3 4" xmlns="http://www.w3.org/2000/svg">
  <style>
    polyline {
      fill: none;
      stroke: currentColor;
      stroke-width: 0.25;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  </style>`

  result += `${Digit(0, 0)}`

  num
    .toString()
    .split("")
    .reverse()
    .map((value, i) => {
      result += `${Digit(parseInt(value), i)}`
    })

  result += `</svg>`
  return result
}

const conversionMap: Record<string, (v: string) => Promise<string> | string> = {
  "décimal:romain": (v) => integerToRoman(v),
  "décimal:égyptien": (v) => integerTohieroglyphs(v),
  "décimal:maya": (v) => convertToMayaGlyphs(v),
  "décimal:babylonien": (v) => integerToBabylonian(v),
  "décimal:binaire": (v) => parseInt(v).toString(2).toUpperCase(),
  "décimal:octal": (v) => parseInt(v).toString(8).toUpperCase(),
  "décimal:hexadécimal": (v) => parseInt(v).toString(16).toUpperCase(),
  "décimal:sexagésimal": (v) => decimalToSexagesimal(v),
  "décimal:cistercien": (v) => decimalToCistercian(v),
  "décimal:kaktovik": (v) => convertToKaktovik_digit(v),
  // "romain:décimal": (v) => romanToInteger(v),
  // "romain:binaire": (v) => decimalToBinary(romanToInteger(v)),
  // "romain:octal": (v) => decimalToOctal(romanToInteger(v)),
  // "romain:hexadécimal": (v) => decimalToBinary(romanToInteger(v)),
  // "binaire:décimal": (v) => binaryToDecimal(v),
  // "binaire:romain": (v) => integerToRoman(binaryToDecimal(v)),
  // "binaire:octal": (v) => decimalToOctal(binaryToDecimal(v)),
  // "binaire:hexadécimal": (v) => binaryToHexadecimal(v),
  // "sexagésimal:décimal": (v) => sexagesimalToDecimal(v.toString()),
}

export const numeric_converter = async (
  value: string,
  unitFrom: Unit,
  unitTo: Unit
): Promise<string | number | Promise<string>> => {
  if (unitFrom.label === unitTo.label) return value.toString()

  const key = `${unitFrom.label}:${unitTo.label}`
  const conversionFunction = conversionMap[key]
  if (!conversionFunction)
    throw new Error(`La convertion de ${unitFrom.label} vers ${unitTo.label} n'est pas supportée.`)

  return await conversionFunction(value)
}

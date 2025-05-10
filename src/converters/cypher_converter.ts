import {Unit} from "../types/types"

const MORSE_MAP: Record<string, string> = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "/": " ",
  "--..--": ",",
  "..--..": "?",
  "-.-.-.": ";",
  "---...": ":",
  "-....-": "-",
  "-..-.": "/",
  ".----.": "'",
  "-.-.--": "!",
}

function morse(text: string, decode: boolean): string {
  const REVERSE_MORSE_MAP: Record<string, string> = {}

  for (const key in MORSE_MAP) {
    REVERSE_MORSE_MAP[String(MORSE_MAP[key as keyof typeof MORSE_MAP])] = key
  }

  return decode
    ? text
        .split(" ")
        .map((code) => MORSE_MAP[code])
        .join("")
    : text
        .toUpperCase()
        .split("")
        .map((text) => REVERSE_MORSE_MAP[text])
        .join(" ")
}

function ROT(text: string, decode: boolean, rotation: number): string {
  return text.toUpperCase().replace(/[a-zA-Z]/g, function (chr: string) {
    const start = chr <= "Z" ? 65 : 97
    return String.fromCharCode(start + ((chr.charCodeAt(0) - start + (decode ? 26 - rotation : rotation)) % 26))
  })
}

function replace(text: string, decode: boolean, key: string): string {
  const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let new_alphabet: string = ""

  alphabet
    .split("")
    .map((c) => {
      if (key.indexOf(c) === -1) {
        new_alphabet += c
      }
    })
    .join("")

  new_alphabet = key + new_alphabet

  return text
    .split("")
    .map((c) => (decode ? alphabet[new_alphabet.indexOf(c)] : new_alphabet[alphabet.indexOf(c)]))
    .join("")
}

function vigenere(text: string, decode: boolean, key: string): string {
  let result = ""

  for (let i = 0, j = 0; i < text.length; i++) {
    const c = text.charAt(i)

    if (decode) {
      result += String.fromCharCode(90 - ((25 - (c.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26))
    } else {
      result += String.fromCharCode(((c.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26) + 65)
    }

    j = ++j % key.length
  }
  return result.toUpperCase()
}

const conversionMap: Record<string, (t: string, k: string) => string> = {
  "text:rotation": (t, k) => ROT(t, false, parseInt(k)),
  "rotation:text": (t, k) => ROT(t, true, parseInt(k)),
  "text:vigenere": (t, k) => vigenere(t.toUpperCase(), false, k.toUpperCase()),
  "vigenere:text": (t, k) => vigenere(t.toUpperCase(), true, k.toUpperCase()),
  "text:morse": (t) => morse(t, false),
  "morse:text": (t) => morse(t, true),
  "substitution:text": (t, k) => replace(t.toUpperCase(), true, k.toUpperCase()),
  "text:substitution": (t, k) => replace(t.toUpperCase(), false, k.toUpperCase()),
}

export const cypher_converter = (value: string, unitFrom: Unit, unitTo: Unit): string => {
  if (!unitFrom && !unitTo) return value

  const key = `${unitFrom.label}:${unitTo.label}`
  const conversionFunction = conversionMap[key]

  if (!conversionFunction) throw new Error(`Unsupported conversion from ${unitFrom.label} to ${unitTo.label}`)

  return conversionFunction(
    value,
    unitTo.key === undefined || unitTo.key === "" ? (unitFrom.key ?? "").toString() : unitTo.key.toString()
  )
}

export default cypher_converter

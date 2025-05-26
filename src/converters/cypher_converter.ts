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
  return text.replace(/[a-zA-Z]/g, function (chr: string) {
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
  return result
}

function beaufort(text: string, decode: boolean, key: string): string {
  let result = ""

  for (let i = 0, j = 0; i < text.length; i++) {
    const c = text.charAt(i)

    if (decode) {
      result += String.fromCharCode(90 - ((25 - (c.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26))
    } else {
      result += String.fromCharCode(65 + ((key.toUpperCase().charCodeAt(j) - c.charCodeAt(0) + 26) % 26))
    }

    j = ++j % key.length
  }
  return result
}

const braille_encode = function (message: string) {
  const map: Record<string, string> = " A1B'K2L@CIF/MSP\"E3H9O6R^DJG>NTQ,*5<-U8V.%[$+X!&;:4\\0Z7(_?W]#Y)="
    .split("")
    .reduce(
      (o, n, i) => {
        return (
          (o[n] = "⠀⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿"[i]), (o[n.toLowerCase()] = o[n]), o
        )
      },
      {} as Record<string, string>
    )

  return message
    .split("")
    .map((c) => map[c])
    .join("")
}

const bacon_encode = function (message: string) {
  const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVW"
  let index = -1
  const length = message.length
  let alphabetIndex
  let result = ""
  while (++index < length) {
    alphabetIndex = alphabet.indexOf(message.charAt(index))
    if (alphabetIndex > -1) {
      result +=
        (alphabetIndex & 0x10 ? "B" : "A") +
        (alphabetIndex & 0x08 ? "B" : "A") +
        (alphabetIndex & 0x04 ? "B" : "A") +
        (alphabetIndex & 0x02 ? "B" : "A") +
        (alphabetIndex & 0x01 ? "B" : "A")
    }
  }
  return result.replace(/(?<=^(?:.{5})+)(?!$)/g, " ")
}

const polybe_square = function (message: string) {
  const alphabet: string = "ABCDEFGHIKLMNOPQRSTUVWXYZ"
  const square: string[][] = []
  let index = -1
  const length = alphabet.length

  while (++index < length) {
    if (index % 5 === 0) square.push([])
    square[square.length - 1].push(alphabet[index])
  }

  return message
    .split("")
    .map((c) => {
      if (c === "J") c = "I"
      const i = alphabet.indexOf(c)
      if (i === -1) return c

      const row = Math.floor(i / 5) + 1
      const col = (i % 5) + 1
      return `${row}${col}`
    })
    .join(" ")
}

const conversionMap: Record<string, (t: string, k: string) => string> = {
  "text:rotation": (t, k) => ROT(t, false, parseInt(k)),
  "rotation:text": (t, k) => ROT(t, true, parseInt(k)),
  "text:chiffre de Vigenère": (t, k) => vigenere(t, false, k),
  "Vigenère:text": (t, k) => vigenere(t, true, k),
  "text:code Morse": (t) => morse(t, false),
  "morse:text": (t) => morse(t, true),
  "substitution:text": (t, k) => replace(t, true, k),
  "text:substitution": (t, k) => replace(t, false, k),
  "text:code de Bacon": (t) => bacon_encode(t),
  "text:code Braille": (t) => braille_encode(t),
  "text:code Pigpen": (t) => t.toLocaleUpperCase(),
  "text:code de Chappe": (t) => t.replace("J", "I"),
  "text:code de Beaufort": (t, k) => beaufort(t, false, k),
  "text:carré de Polybe": (t) => polybe_square(t),
}

function cleanText(text: string): string {
  return text
    .normalize("NFD") // Décompose les caractères accentués en caractères de base + diacritiques
    .replace(/[\u0300-\u036f]/g, "") // Supprime les diacritiques
    .replace(/[^a-zA-Z0-9]/g, "")
    .toUpperCase() // Supprime tout ce qui n'est pas alphanumérique
}

export const cypher_converter = (value: string, unitFrom: Unit, unitTo: Unit): string => {
  if (!unitFrom && !unitTo) return value

  const key = `${unitFrom.label}:${unitTo.label}`
  const conversionFunction = conversionMap[key]

  if (!conversionFunction) throw new Error(`Conversion impossible de ${unitFrom.label} vers ${unitTo.label}`)

  return conversionFunction(
    cleanText(value),
    unitTo.key === undefined || unitTo.key === ""
      ? (unitFrom.key ?? "").toString().toUpperCase()
      : unitTo.key.toString().toUpperCase()
  )
}

export default cypher_converter

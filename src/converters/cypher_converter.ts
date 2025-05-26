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

function gcd(a: number, b: number) {
  while (b !== 0) {
    ;[a, b] = [b, a % b]
  }
  return a
}

function isInvertibleMod26(n: number) {
  return gcd(n, 26) === 1
}

export async function generateHillMatrix(): Promise<number[][]> {
  let a: number, b: number, c: number, d: number, det: number
  const maxAttempts = 1000 // Limite de tentatives
  let attempts = 0

  do {
    a = Math.floor(Math.random() * 26)
    b = Math.floor(Math.random() * 26)
    c = Math.floor(Math.random() * 26)
    d = Math.floor(Math.random() * 26)

    det = (a * d - b * c) % 26
    attempts++

    if (attempts > maxAttempts) {
      throw new Error("Impossible de générer une matrice inversible après plusieurs tentatives.")
    }
  } while (!isInvertibleMod26(det))

  return [
    [a, b],
    [c, d],
  ]
}

export async function hillEncrypt(plainText: string, matrix: number[][]): Promise<string> {
  if (plainText.length % 2 !== 0) {
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26))
    plainText += randomLetter
  }

  const charToNum = (char: string) => char.charCodeAt(0) - 65
  const numToChar = (num: number) => String.fromCharCode((((num % 26) + 26) % 26) + 65)

  let cipherText = ""

  for (let i = 0; i < plainText.length; i += 2) {
    const vector = [charToNum(plainText[i]), charToNum(plainText[i + 1])]
    const x = (matrix[0][0] * vector[0] + matrix[0][1] * vector[1]) % 26
    const y = (matrix[1][0] * vector[0] + matrix[1][1] * vector[1]) % 26
    cipherText += numToChar(x) + numToChar(y)
  }

  return `Matrice utilisée : [${matrix[0].join(", ")}; ${matrix[1].join(", ")}]\n\nTexte chiffré : ${cipherText}`
}

const hillEncryptWorker = (message: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL("../workers/Hill.worker.ts", import.meta.url), {type: "module"})

    worker.postMessage({plainText: message})
    worker.onmessage = (event) => {
      if (event.data.error) {
        reject(new Error(event.data.error))
      } else {
        resolve(event.data)
      }
      worker.terminate()
    }
    worker.onerror = (error) => {
      reject(error)
    }
  })
}

const conversionMap: Record<string, (t: string, k: string) => string | Promise<string>> = {
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
  "text:chiffre de Hill": (t) => hillEncryptWorker(t),
}

function cleanText(text: string): string {
  return text
    .normalize("NFD") // Décompose les caractères accentués en caractères de base + diacritiques
    .replace(/[\u0300-\u036f]/g, "") // Supprime les diacritiques
    .replace(/[^a-zA-Z0-9]/g, "")
    .toUpperCase() // Supprime tout ce qui n'est pas alphanumérique
}

export const cypher_converter = async (value: string, unitFrom: Unit, unitTo: Unit): Promise<string> => {
  if (!unitFrom && !unitTo) return value

  const key = `${unitFrom.label}:${unitTo.label}`
  const conversionFunction = conversionMap[key]

  if (!conversionFunction) throw new Error(`Conversion impossible de ${unitFrom.label} vers ${unitTo.label}`)

  return await conversionFunction(
    cleanText(value),
    unitTo.key === undefined || unitTo.key === ""
      ? (unitFrom.key ?? "").toString().toUpperCase()
      : unitTo.key.toString().toUpperCase()
  )
}

export default cypher_converter

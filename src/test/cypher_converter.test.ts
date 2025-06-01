import {describe, expect, it} from "vitest"
import {cypher_converter} from "../converters/cypher_converter.ts"
import {Unit} from "../types/types.ts"

const text_unit: Unit = {
  label: "text",
}

const rotation_unit: Unit = {
  label: "rotation",
  key: "13",
}

const vigenere_unit: Unit = {
  label: "chiffre de Vigenère",
  key: "KEY",
}

const morse_unit: Unit = {
  label: "code Morse",
}

const substitution_unit: Unit = {
  label: "substitution",
  key: "NEWYORK",
}

const bacon_unit: Unit = {
  label: "code de Bacon",
}

const braille_unit: Unit = {
  label: "code Braille",
}

const beaufort_unit: Unit = {
  label: "code de Beaufort",
  key: "KEY",
}

const polybe_unit: Unit = {
  label: "carré de Polybe",
}

const no_unit: Unit = {
  label: "unknown",
}

describe("Cypher Converter its", () => {
  it("should return the same value for the same unit", async () => {
    expect(await cypher_converter("HELLO", text_unit, text_unit)).toEqual("HELLO")
    expect(await cypher_converter("HELLO", rotation_unit, rotation_unit)).toEqual("HELLO")
  })

  it("should return an error if no conversion available", async () => {
    await expect(cypher_converter("HELLO", no_unit, rotation_unit)).rejects.toThrow(
      `Conversion impossible de ${no_unit.label} vers ${rotation_unit.label}`
    )
    await expect(cypher_converter("HELLO", no_unit, braille_unit)).rejects.toThrow(
      `Conversion impossible de ${no_unit.label} vers ${braille_unit.label}`
    )
  })

  it("converts text to rotation", async () => {
    expect(await cypher_converter("HELLO", text_unit, rotation_unit)).toEqual("URYYB")
  })

  it("converts rotation to text", async () => {
    expect(await cypher_converter("URYYB", rotation_unit, text_unit)).toEqual("HELLO")
  })

  it("converts text to Vigenère cipher", async () => {
    expect(await cypher_converter("HELLO", text_unit, vigenere_unit)).toEqual("RIJVS")
  })

  it("converts Vigenère cipher to text", async () => {
    expect(await cypher_converter("RIJVS", vigenere_unit, text_unit)).toEqual("HELLO")
  })

  it("converts text to Morse code", async () => {
    expect(await cypher_converter("HELLO", text_unit, morse_unit)).toEqual(".... . .-.. .-.. ---")
  })

  it("converts Morse code to text", async () => {
    expect(await cypher_converter(".... . .-.. .-.. ---", morse_unit, text_unit)).toEqual("HELLO")
  })

  it("converts text to substitution cipher", async () => {
    expect(await cypher_converter("HELLO", text_unit, substitution_unit)).toEqual("AOFFI")
  })

  it("converts substitution cipher to text", async () => {
    expect(await cypher_converter("AOFFI", substitution_unit, text_unit)).toEqual("HELLO")
  })

  it("converts text to Bacon code", async () => {
    expect(await cypher_converter("HELLO", text_unit, bacon_unit)).toEqual("AABBB AABAA ABABB ABABB ABBBA")
  })

  it("converts text to Braille code", async () => {
    expect(await cypher_converter("HELLO", text_unit, braille_unit)).toEqual("⠓⠑⠇⠇⠕")
  })

  it("converts text to Beaufort code", async () => {
    expect(await cypher_converter("HELLO", text_unit, beaufort_unit)).toEqual("DANZQ")
  })

  it("converts text to Polybe square", async () => {
    expect(await cypher_converter("HELLO", text_unit, polybe_unit)).toEqual("23 15 31 31 34")
  })
})

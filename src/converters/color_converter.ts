import convert from "color-convert"
import {Unit} from "../types/types"

const toRGB = (t: string): [number, number, number] => {
  const rgb = t.split(",").map((v: string) => parseInt(v.trim()))
  if (rgb.length === 3) {
    return [rgb[0], rgb[1], rgb[2]]
  } else {
    throw new Error("Format invalide")
  }
}

const toCMYK = (t: string): [number, number, number, number] => {
  const cmyk = t.split(",").map((v: string) => parseInt(v.trim()))
  if (cmyk.length === 4) {
    return [cmyk[0], cmyk[1], cmyk[2], cmyk[3]]
  } else {
    throw new Error("Format invalide")
  }
}

const conversionMap: Record<string, (t: string) => Promise<object>> = {
  "HEX:HEX": async (t) => ({result: t}),
  "HEX:RGB": async (t) => convert.hex.rgb(t),
  "HEX:HSL": async (t) => convert.hex.hsl(t),
  "HEX:CMYK": async (t) => convert.hex.cmyk(t),
  "HEX:HSV": async (t) => convert.hex.hsv(t),
  "HEX:LAB": async (t) => convert.hex.lab(t),
  "HEX:XYZ": async (t) => convert.hex.xyz(t),

  "RGB:RGB": async (t) => ({result: t}),
  "RGB:HEX": async (t) => ({result: convert.rgb.hex(toRGB(t))}),
  "RGB:HSL": async (t) => convert.rgb.hsl(toRGB(t)),
  "RGB:CMYK": async (t) => convert.rgb.cmyk(toRGB(t)),
  "RGB:HSV": async (t) => convert.rgb.hsv(toRGB(t)),
  "RGB:LAB": async (t) => convert.rgb.lab(toRGB(t)),
  "RGB:XYZ": async (t) => convert.rgb.xyz(toRGB(t)),

  "HSL:HSL": async (t) => ({result: t}),
  "HSL:HEX": async (t) => ({result: convert.hsl.hex(toRGB(t))}),
  "HSL:RGB": async (t) => convert.hsl.rgb(toRGB(t)),
  "HSL:CMYK": async (t) => convert.hsl.cmyk(toRGB(t)),
  "HSL:HSV": async (t) => convert.hsl.hsv(toRGB(t)),
  "HSL:LAB": async (t) => convert.hsl.lab(toRGB(t)),
  "HSL:XYZ": async (t) => convert.hsl.xyz(toRGB(t)),

  "CMYK:CMYK": async (t) => ({result: t}),
  "CMYK:HEX": async (t) => ({result: convert.cmyk.hex(toCMYK(t))}),
  "CMYK:RGB": async (t) => convert.cmyk.rgb(toCMYK(t)),
  "CMYK:HSL": async (t) => convert.cmyk.hsl(toCMYK(t)),
  "CMYK:HSV": async (t) => convert.cmyk.hsv(toCMYK(t)),
  "CMYK:LAB": async (t) => convert.cmyk.lab(toCMYK(t)),
  "CMYK:XYZ": async (t) => convert.cmyk.xyz(toCMYK(t)),

  "HSV:HSV": async (t) => ({result: t}),
  "HSV:HEX": async (t) => ({result: convert.hsv.hex(toRGB(t))}),
  "HSV:RGB": async (t) => convert.hsv.rgb(toRGB(t)),
  "HSV:HSL": async (t) => convert.hsv.hsl(toRGB(t)),
  "HSV:CMYK": async (t) => convert.hsv.cmyk(toRGB(t)),
  "HSV:LAB": async (t) => convert.hsv.lab(toRGB(t)),
  "HSV:XYZ": async (t) => convert.hsv.xyz(toRGB(t)),

  "LAB:LAB": async (t) => ({result: t}),
  "LAB:HEX": async (t) => ({result: convert.lab.hex(toRGB(t))}),
  "LAB:RGB": async (t) => convert.lab.rgb(toRGB(t)),
  "LAB:HSL": async (t) => convert.lab.hsl(toRGB(t)),
  "LAB:CMYK": async (t) => convert.lab.cmyk(toRGB(t)),
  "LAB:HSV": async (t) => convert.lab.hsv(toRGB(t)),
  "LAB:XYZ": async (t) => convert.lab.xyz(toRGB(t)),

  "XYZ:XYZ": async (t) => ({result: t}),
  "XYZ:HEX": async (t) => ({result: convert.xyz.hex(toRGB(t))}),
  "XYZ:RGB": async (t) => convert.xyz.rgb(toRGB(t)),
  "XYZ:HSL": async (t) => convert.xyz.hsl(toRGB(t)),
  "XYZ:CMYK": async (t) => convert.xyz.cmyk(toRGB(t)),
  "XYZ:HSV": async (t) => convert.xyz.hsv(toRGB(t)),
  "XYZ:LAB": async (t) => convert.xyz.lab(toRGB(t)),
}

export const color_converter = async (value: string | number, unitFrom: Unit, unitTo: Unit): Promise<string> => {
  if (!unitFrom && !unitTo) return "" + value

  const key = `${unitFrom.label}:${unitTo.label}`
  const conversionFunction = conversionMap[key]

  if (!conversionFunction) throw new Error(`Conversion impossible de ${unitFrom.label} vers ${unitTo.label}`)
  const result: object = await conversionFunction(value.toString())
  if (Object.prototype.hasOwnProperty.call(result, "result")) {
    return (result as {result: string}).result.toString()
  }
  return (await conversionFunction(value.toString())).toString()
}

export default color_converter

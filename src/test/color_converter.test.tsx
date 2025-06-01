import React, {Suspense} from "react"
import {color_converter} from "../converters/color_converter.ts"
import {Unit} from "../types/types.ts"
import {describe, it, expect} from "vitest"
import {render, fireEvent, waitFor} from "@testing-library/react"

const LazyColors = React.lazy(() => import("../components/Colors.tsx"))

const rgb_unit: Unit = {
  label: "RGB",
}

const hex_unit: Unit = {
  label: "HEX",
}

const hsl_unit: Unit = {
  label: "HSL",
}

const lab_unit: Unit = {
  label: "LAB",
}

const hsv_unit: Unit = {
  label: "HSV",
}

const cmyk_unit: Unit = {
  label: "CMYK",
}

const xyz_unit: Unit = {
  label: "XYZ",
}

const no_unit: Unit = {
  label: "unknown",
}

describe("Color Converter", () => {
  it("should return the same value for the same unit", async () => {
    expect(await color_converter("255,0,0", rgb_unit, rgb_unit)).toEqual("255,0,0")
    expect(await color_converter("FF0000", hex_unit, hex_unit)).toEqual("FF0000")
    expect(await color_converter("0,100,50", hsl_unit, hsl_unit)).toEqual("0,100,50")
    expect(await color_converter("FF0000", hex_unit, hex_unit)).toEqual("FF0000")
  })

  it("should return an error if no conversion available", async () => {
    await expect(color_converter("255,0,0", no_unit, rgb_unit)).rejects.toThrow()
    await expect(color_converter("FF0000", no_unit, hex_unit)).rejects.toThrow(
      "Conversion impossible de unknown vers HEX"
    )
  })

  it("should return an error if invalid format", async () => {
    await expect(color_converter("255 0 0", rgb_unit, hex_unit)).rejects.toThrow("Format invalide")
    await expect(color_converter("255 0 0", cmyk_unit, rgb_unit)).rejects.toThrow("Format invalide")
  })

  it("should not return an error if valid format", async () => {
    await expect(color_converter("255,0,0", rgb_unit, hex_unit)).resolves.toBeDefined()
    await expect(color_converter("0,100,100,0", cmyk_unit, rgb_unit)).resolves.toBeDefined()
  })

  it("should always return a string", async () => {
    expect(typeof (await color_converter("255,0,0", rgb_unit, rgb_unit))).toBe("string")
    expect(typeof (await color_converter("FF0000", hex_unit, hex_unit))).toBe("string")
    expect(typeof (await color_converter("0,100,50", hsl_unit, hsl_unit))).toBe("string")
    expect(typeof (await color_converter("FF0000", hex_unit, hex_unit))).toBe("string")
  })

  it("converts from hex", async () => {
    expect(await color_converter("0421A5", hex_unit, rgb_unit)).toEqual("4,33,165")
    expect(await color_converter("0421A5", hex_unit, hsl_unit)).toEqual("229,95,33")
    expect(await color_converter("0421A5", hex_unit, lab_unit)).toEqual("23,45,-71")
    expect(await color_converter("0421A5", hex_unit, hsv_unit)).toEqual("229,98,65")
    expect(await color_converter("0421A5", hex_unit, cmyk_unit)).toEqual("98,80,0,35")
    expect(await color_converter("0421A5", hex_unit, xyz_unit)).toEqual("7,4,36")
  })

  it("converts from rgb", async () => {
    expect(await color_converter("4,33,165", rgb_unit, hex_unit)).toEqual("0421A5")
    expect(await color_converter("4,33,165", rgb_unit, hsl_unit)).toEqual("229,95,33")
    expect(await color_converter("4,33,165", rgb_unit, lab_unit)).toEqual("23,45,-71")
    expect(await color_converter("4,33,165", rgb_unit, hsv_unit)).toEqual("229,98,65")
    expect(await color_converter("4,33,165", rgb_unit, cmyk_unit)).toEqual("98,80,0,35")
    expect(await color_converter("4,33,165", rgb_unit, xyz_unit)).toEqual("7,4,36")
  })

  it("converts from hsl", async () => {
    expect(await color_converter("229,95,33", hsl_unit, hex_unit)).toEqual("0422A4")
    expect(await color_converter("229,95,33", hsl_unit, rgb_unit)).toEqual("4,34,164")
    expect(await color_converter("229,95,33", hsl_unit, lab_unit)).toEqual("23,44,-70")
    expect(await color_converter("229,95,33", hsl_unit, hsv_unit)).toEqual("229,97,64")
    expect(await color_converter("229,95,33", hsl_unit, cmyk_unit)).toEqual("97,80,0,36")
    expect(await color_converter("229,95,33", hsl_unit, xyz_unit)).toEqual("7,4,36")
  })

  it("converts from lab", async () => {
    expect(await color_converter("23,44,-70", lab_unit, hex_unit)).toEqual("0421A3")
    expect(await color_converter("23,44,-70", lab_unit, rgb_unit)).toEqual("4,33,163")
    expect(await color_converter("23,44,-70", lab_unit, hsl_unit)).toEqual("229,95,33")
    expect(await color_converter("23,44,-70", lab_unit, hsv_unit)).toEqual("229,97,64")
    expect(await color_converter("23,44,-70", lab_unit, cmyk_unit)).toEqual("97,80,0,36")
    expect(await color_converter("23,44,-70", lab_unit, xyz_unit)).toEqual("7,4,35")
  })

  it("converts from hsv", async () => {
    expect(await color_converter("229,98,64", hsv_unit, hex_unit)).toEqual("0321A3")
    expect(await color_converter("229,98,64", hsv_unit, rgb_unit)).toEqual("3,33,163")
    expect(await color_converter("229,98,64", hsv_unit, hsl_unit)).toEqual("229,96,33")
    expect(await color_converter("229,98,64", hsv_unit, lab_unit)).toEqual("23,44,-70")
    expect(await color_converter("229,98,64", hsv_unit, cmyk_unit)).toEqual("98,80,0,36")
    expect(await color_converter("229,98,64", hsv_unit, xyz_unit)).toEqual("7,4,35")
  })

  it("converts from cmyk", async () => {
    expect(await color_converter("98,80,0,36", cmyk_unit, hex_unit)).toEqual("0321A3")
    expect(await color_converter("98,80,0,36", cmyk_unit, rgb_unit)).toEqual("3,33,163")
    expect(await color_converter("98,80,0,36", cmyk_unit, hsl_unit)).toEqual("229,96,33")
    expect(await color_converter("98,80,0,36", cmyk_unit, hsv_unit)).toEqual("229,98,64")
    expect(await color_converter("98,80,0,36", cmyk_unit, lab_unit)).toEqual("23,44,-70")
    expect(await color_converter("98,80,0,36", cmyk_unit, xyz_unit)).toEqual("7,4,35")
  })

  it("converts from xyz", async () => {
    expect(await color_converter("7,4,35", xyz_unit, hex_unit)).toEqual("0029A3")
    expect(await color_converter("7,4,35", xyz_unit, rgb_unit)).toEqual("0,41,163")
    expect(await color_converter("7,4,35", xyz_unit, hsl_unit)).toEqual("225,100,32")
    expect(await color_converter("7,4,35", xyz_unit, hsv_unit)).toEqual("225,100,64")
    expect(await color_converter("7,4,35", xyz_unit, cmyk_unit)).toEqual("100,75,0,36")
    expect(await color_converter("7,4,35", xyz_unit, lab_unit)).toEqual("24,39,-69")
  })

  it("should load and render the Colors component dynamically", async () => {
    const dictionaryModule = await import(`../data/dictionaries/colors.ts`)
    const dictionary = dictionaryModule.default

    const unitDictionary = Object.fromEntries(
      Object.entries(dictionary).filter(([, value]) => typeof value === "object" && value !== null && "label" in value)
    ) as Record<string, Unit>

    const {getByTestId} = render(
      <Suspense fallback={<div>Loading...</div>}>
        <LazyColors dictionary={unitDictionary} />
      </Suspense>
    )

    await waitFor(() => {
      expect(getByTestId("color-input")).toBeInTheDocument()
    })

    fireEvent.change(getByTestId("color-input"), {target: {value: "#00FF00"}})
    fireEvent.change(getByTestId("unit-from-select"), {target: {value: "HEX"}})
    fireEvent.change(getByTestId("unit-to-select"), {target: {value: "RGB"}})

    await waitFor(() => {
      expect(getByTestId("color-output")).toHaveValue("0,255,0")
    })

    fireEvent.click(getByTestId("switch-button"))

    await waitFor(() => {
      expect(getByTestId("color-input")).toHaveValue("0,255,0")
      expect(getByTestId("color-output")).toHaveValue("00FF00")
    })
  })
})

import { Unit } from '../types'

const c2f = (v: number) => {
  return (v * 9) / 5 + 32
}

const f2c = (v: number) => {
  return ((v - 32) * 5) / 9
}

const f2k = (v: number) => {
  return ((v - 32) * 5) / 9 + 273.15
}

const c2k = (v: number) => {
  return v + 273.15
}

const k2c = (v: number) => {
  return v - 273.15
}

const k2f = (v: number) => {
  return ((v - 273.15) * 9) / 5 + 32
}

const c2r = (v: number) => {
  return v * 0.8
}

const f2r = (v: number) => {
  return (f2k(v) * 5) / 4
}

const k2r = (v: number) => {
  return (k2c(v) * 4) / 5
}

const r2c = (v: number) => {
  return v * 1.25
}

const r2f = (v: number) => {
  return v * 2.25 + 32
}

const r2k = (v: number) => {
  return v * 1.25 + 273.15
}

export const temp_converter = (value: number, unitFrom: Unit, unitTo: Unit): number => {
  console.log(value, unitFrom, unitTo)
  if (unitFrom.label === 'degré Celsius' && unitTo.label === 'degré Fahrenheit') {
    return c2f(value)
  } else if (unitFrom.label === 'degré Celsius' && unitTo.label === 'Kelvin') {
    return c2k(value)
  } else if (unitFrom.label === 'degré Celsius' && unitTo.label === 'degré Réaumur') {
    return c2r(value)
  } else if (unitFrom.label === 'degré Fahrenheit' && unitTo.label === 'degré Celsius') {
    return f2c(value)
  } else if (unitFrom.label === 'degré Fahrenheit' && unitTo.label === 'Kelvin') {
    return f2k(value)
  } else if (unitFrom.label === 'degré Fahrenheit' && unitTo.label === 'degré Réaumur') {
    return f2r(value)
  } else if (unitFrom.label === 'Kelvin' && unitTo.label === 'degré Celsius') {
    return k2c(value)
  } else if (unitFrom.label === 'Kelvin' && unitTo.label === 'degré Fahrenheit') {
    return k2f(value)
  } else if (unitFrom.label === 'Kelvin' && unitTo.label === 'degré Réaumur') {
    return k2r(value)
  } else if (unitFrom.label === 'degré Réaumur' && unitTo.label === 'degré Celsius') {
    return r2c(value)
  } else if (unitFrom.label === 'degré Réaumur' && unitTo.label === 'degré Fahrenheit') {
    return r2f(value)
  } else if (unitFrom.label === 'degré Réaumur' && unitTo.label === 'Kelvin') {
    return r2k(value)
  } else if (unitFrom.label === unitTo.label) {
    return 1
  }
  throw new Error(`Unsupported conversion from ${unitFrom.label} to ${unitTo.label}`)
}

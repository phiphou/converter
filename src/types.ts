export interface Unit {
  label: string
  divisor: number
  code?: string
  formater?: (value: number) => string
  pluralize?: boolean
  quote?: boolean
  pluralize_all?: boolean
  converter?: (value: number, from: Unit, to: Unit, precision: number) => number
  info?: string
}

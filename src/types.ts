export interface Unit {
  label: string
  divisor: number
  formater?: (value: number) => string
  pluralize?: boolean
  pluralize_all?: boolean
  converter?: (value: number, from: Unit, to: Unit) => number
}

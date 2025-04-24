export interface Unit {
  notUnit?: boolean
  label: string
  divisor: number
  code?: string
  formater?: (value: number | string) => string
  pluralize?: boolean
  quote?: string
  pluralize_all?: boolean
  converter?: (value: number, from: Unit, to: Unit, precision: number) => number
  info?: string
  plural?: string
  noSwitch?: boolean
}

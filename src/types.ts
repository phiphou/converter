export interface Unit {
  notUnit?: boolean
  label: string
  divisor: number
  code?: string
  formater?: (value: number | string) => string
  pluralize?: boolean
  quote?: string
  pluralize_all?: boolean
  converter?: (value: number | string, from: Unit, to: Unit, precision?: number) => number | string
  info?: string
  plural?: string
  noSwitch?: boolean
  max?: number
  group?: number
  key?: string
}

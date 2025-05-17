export interface Unit {
  notUnit?: boolean
  label: string
  divisor: number
  code?: string
  formater?: (value: number | string) => string
  pluralize?: boolean
  quote?: string
  pluralize_all?: boolean
  converter?: converterType
  info?: string
  plural?: string
  noSwitch?: boolean
  max?: number
  group?: number
  key?: string | number
  key2?: number | ConversionType
}

export type converterType = (
  value: string | number,
  from: Unit,
  to: Unit,
  precision?: number,
  conversionType?: ConversionType
) => string | number | Promise<string> | Promise<number> | Promise<{result: string; cumulativeInflation: string}>

export enum ConversionType {
  OFE = "Ancien Franc vers Euro",
  FE = "Franc vers Euro",
  EE = "Euro vers Euro",
  EF = "Euro vers Franc",
  EDF = "Euro vers Ancien Franc",
}

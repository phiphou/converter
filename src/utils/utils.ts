import { Unit } from '../types'

export const pluralize = (result: number | null, label: string, unit: Unit): string => {
  if (unit?.pluralize_all) {
    return result !== null && result >= 2
      ? label
          .split(' ')
          .map((v) => (!v.endsWith('s') ? v + 's' : v))
          .join(' ')
      : label
          .split(' ')
          .map((v) => (v.endsWith('s') ? v.slice(0, -1) : v))
          .join(' ')
  }
  if (unit?.pluralize) {
    return result !== null && result >= 2
      ? label
          .split(' ')
          .map((v, i) => (i === 0 && !v.endsWith('s') ? v + 's' : v))
          .join(' ')
      : label
          .split(' ')
          .map((v, i) => (i === 0 && v.endsWith('s') ? v.slice(0, -1) : v))
          .join(' ')
  }
  return label
}

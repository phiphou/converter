export const ymd_formater = (v: number): string => {
  const SECONDS_IN_YEAR = 31557600
  const MONTHS_IN_YEAR = 12
  const DAYS_IN_MONTH = 30.4375

  const y = Math.floor(v / SECONDS_IN_YEAR)
  const m = Math.floor((v % SECONDS_IN_YEAR) / (SECONDS_IN_YEAR / MONTHS_IN_YEAR))
  const d = Math.floor((v % (SECONDS_IN_YEAR / MONTHS_IN_YEAR)) / (SECONDS_IN_YEAR / MONTHS_IN_YEAR / DAYS_IN_MONTH))

  return `${y} années ${m} mois ${d} jours`
}

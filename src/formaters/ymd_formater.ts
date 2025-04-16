export const ymd_formater = (v: number): string => {
  const y = Math.floor(v / 31557600)
  const m = Math.floor((v / 31557600 - y) * 12)
  const d = Math.floor(((v / 31557600 - y) * 12 - m) * 30.4375)
  return `${y} années ${m} mois ${d} jours`
}

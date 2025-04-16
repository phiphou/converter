export const hms_formater = (v: number): string => {
  const h = Math.floor(v / 3600)
  const m = Math.floor((v / 3600 - h) * 60)
  const s = Math.floor(((v / 3600 - h) * 60 - m) * 60)
  return `${h < 10 ? "0" + h : h}h${m < 10 ? "0" + m : m}m${s < 10 ? "0" + s : s}s`
}

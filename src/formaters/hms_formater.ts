export const hms_formater = (v: number): string => {
  const pad = (n: number): string => n.toString().padStart(2, "0")
  const h = Math.floor(v / 3600)
  const m = Math.floor((v % 3600) / 60)
  const s = Math.floor(v % 60)
  return `${pad(h)}h${pad(m)}m${pad(s)}s`
}

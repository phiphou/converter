import {Unit} from "../types/types"

function toDate(date: number, format: string) {
  const formatter = new Intl.DateTimeFormat(format, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return formatter.format(new Date(date))
}

const conversionMap: Record<string, string> = {
  gregorien: "fr-u-ca-fr",
  arabe: "ar-u-ca-islamic-umalqura",
  juif: "he-u-ca-hebrew",
  indien: "hi-u-ca-indian",
  perse: "ar-u-ca-persian",
  chinois: "zh-u-ca-chinese",
  japonais: "ja-JP-u-ca-japanese",
}

export const date_converter = (value: number, unitTo: Unit): string => {
  return `${toDate(value, conversionMap[unitTo.label.replace("calendrier ", "")])}`
}

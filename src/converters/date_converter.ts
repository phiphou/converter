const myDate = new Date(Date.now()) // today's date

function toDate(format: string) {
  const formatter = new Intl.DateTimeFormat(format, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return formatter.format(myDate)
}

console.log("calendrier français : ", toDate("fr-u-ca-fr"))
console.log("calendrier juif : ", toDate("he-u-ca-hebrew"))
console.log("calendrier arabe : ", toDate("ar-u-ca-islamic-umalqura"))
console.log("calendrier indien : ", toDate("hi-u-ca-indian"))
console.log("calendrier perse : ", toDate("ar-u-ca-persian"))
console.log("calendrier chinois : ", toDate("zh-u-ca-chinese"))

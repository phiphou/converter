import Bab1 from "../assets/icons/Babylonian/1.svg"
import Bab2 from "../assets/icons/Babylonian/2.svg"
import Bab3 from "../assets/icons/Babylonian/3.svg"
import Bab4 from "../assets/icons/Babylonian/4.svg"
import Bab5 from "../assets/icons/Babylonian/5.svg"
import Bab6 from "../assets/icons/Babylonian/6.svg"
import Bab7 from "../assets/icons/Babylonian/7.svg"
import Bab8 from "../assets/icons/Babylonian/8.svg"
import Bab9 from "../assets/icons/Babylonian/9.svg"
import Bab10 from "../assets/icons/Babylonian/10.svg"
import Bab20 from "../assets/icons/Babylonian/20.svg"
import Bab30 from "../assets/icons/Babylonian/30.svg"
import Bab40 from "../assets/icons/Babylonian/40.svg"
import Bab50 from "../assets/icons/Babylonian/50.svg"

const symbols = {
  tens: [Bab10, Bab20, Bab30, Bab40, Bab50],
  units: [Bab1, Bab2, Bab3, Bab4, Bab5, Bab6, Bab7, Bab8, Bab9],
}

export const babylonian_formater = (v: string): string => {
  let result: string = ""
  if (typeof v === "string") {
    const nums: string[] = v.split("-").map((n) => n)
    nums.forEach((n) => {
      const tens = parseInt(n.split(",")[0])
      const units = parseInt(n.split(",")[1])
      if (tens > 0) {
        result += `<img class="filter-dark-light h-8" src="${tens > 0 ? symbols.tens[tens - 1] : ""}" />`
      }
      if (units > 0) {
        result += `<img class="filter-dark-light h-8" src="${units > 0 ? symbols.units[units - 1] : ""}" />`
      }
      result += "&nbsp;&nbsp;"
    })
  }
  return `<div class="flex items-start leading-[14px] text-1xl">${result}</div>`
}

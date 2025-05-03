import k0 from "../assets/icons/Kaktovik_digit_0.svg"
import k1 from "../assets/icons/Kaktovik_digit_1.svg"
import k2 from "../assets/icons/Kaktovik_digit_2.svg"
import k3 from "../assets/icons/Kaktovik_digit_3.svg"
import k4 from "../assets/icons/Kaktovik_digit_4.svg"
import k5 from "../assets/icons/Kaktovik_digit_5.svg"
import k6 from "../assets/icons/Kaktovik_digit_6.svg"
import k7 from "../assets/icons/Kaktovik_digit_7.svg"
import k8 from "../assets/icons/Kaktovik_digit_8.svg"
import k9 from "../assets/icons/Kaktovik_digit_9.svg"
import k10 from "../assets/icons/Kaktovik_digit_10.svg"
import k11 from "../assets/icons/Kaktovik_digit_11.svg"
import k12 from "../assets/icons/Kaktovik_digit_12.svg"
import k13 from "../assets/icons/Kaktovik_digit_13.svg"
import k14 from "../assets/icons/Kaktovik_digit_14.svg"
import k15 from "../assets/icons/Kaktovik_digit_15.svg"
import k16 from "../assets/icons/Kaktovik_digit_16.svg"
import k17 from "../assets/icons/Kaktovik_digit_17.svg"
import k18 from "../assets/icons/Kaktovik_digit_18.svg"
import k19 from "../assets/icons/Kaktovik_digit_19.svg"

const symbols = [k0, k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12, k13, k14, k15, k16, k17, k18, k19]

export const kaktovik_formater = (v: string): string => {
  let result: string = ""
  if (typeof v === "string") {
    const nums: string[] = v
      .split("-")
      .reverse()
      .map((n) => n)
    nums.forEach((n) => {
      const t = parseInt(n)
      result += `<img class="filter-dark-light h-9 mr-1" src="${symbols[t]}" />`

      result += ""
    })
  }
  return `<div class="flex items-start leading-[14px] text-1xl">${result}</div>`
}

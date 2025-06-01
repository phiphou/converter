import A from "../assets/icons/Pigpen/A.svg"
import B from "../assets/icons/Pigpen/B.svg"
import C from "../assets/icons/Pigpen/C.svg"
import D from "../assets/icons/Pigpen/D.svg"
import E from "../assets/icons/Pigpen/E.svg"
import F from "../assets/icons/Pigpen/F.svg"
import G from "../assets/icons/Pigpen/G.svg"
import H from "../assets/icons/Pigpen/H.svg"
import I from "../assets/icons/Pigpen/I.svg"
import J from "../assets/icons/Pigpen/J.svg"
import K from "../assets/icons/Pigpen/K.svg"
import L from "../assets/icons/Pigpen/L.svg"
import M from "../assets/icons/Pigpen/M.svg"
import N from "../assets/icons/Pigpen/N.svg"
import O from "../assets/icons/Pigpen/O.svg"
import P from "../assets/icons/Pigpen/P.svg"
import Q from "../assets/icons/Pigpen/Q.svg"
import R from "../assets/icons/Pigpen/R.svg"
import S from "../assets/icons/Pigpen/S.svg"
import T from "../assets/icons/Pigpen/T.svg"
import U from "../assets/icons/Pigpen/U.svg"
import V from "../assets/icons/Pigpen/V.svg"
import W from "../assets/icons/Pigpen/W.svg"
import X from "../assets/icons/Pigpen/X.svg"
import Y from "../assets/icons/Pigpen/Y.svg"
import Z from "../assets/icons/Pigpen/Z.svg"

const MAP: Record<string, string> = {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
  Z,
}
export const pigpen_formater = (v: string): string => {
  if (!v) return ""
  return `<div class="text-black dark:text-white">${v
    .toUpperCase()
    .split("")
    .map((c) => {
      if (c === " ") return `<span style="display:inline-block;width:16px"></span>`
      if (c === "\n") return "<br/>"
      if (MAP[c])
        return `<img src="${MAP[c]}" alt="${c}" class="filter-dark-light inline h-6 text-black dark:text-white" />`
      return ""
    })
    .join("")}</div>`
}

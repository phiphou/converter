import A from "../assets/icons/Templiers/A.svg"
import B from "../assets/icons/Templiers/B.svg"
import C from "../assets/icons/Templiers/C.svg"
import D from "../assets/icons/Templiers/D.svg"
import E from "../assets/icons/Templiers/E.svg"
import F from "../assets/icons/Templiers/F.svg"
import G from "../assets/icons/Templiers/G.svg"
import H from "../assets/icons/Templiers/H.svg"
import I from "../assets/icons/Templiers/I.svg"
import J from "../assets/icons/Templiers/J.svg"
import K from "../assets/icons/Templiers/K.svg"
import L from "../assets/icons/Templiers/L.svg"
import M from "../assets/icons/Templiers/M.svg"
import N from "../assets/icons/Templiers/N.svg"
import O from "../assets/icons/Templiers/O.svg"
import P from "../assets/icons/Templiers/P.svg"
import Q from "../assets/icons/Templiers/Q.svg"
import R from "../assets/icons/Templiers/R.svg"
import S from "../assets/icons/Templiers/S.svg"
import T from "../assets/icons/Templiers/T.svg"
import U from "../assets/icons/Templiers/U.svg"
import V from "../assets/icons/Templiers/V.svg"
import W from "../assets/icons/Templiers/W.svg"
import X from "../assets/icons/Templiers/X.svg"
import Y from "../assets/icons/Templiers/Y.svg"
import Z from "../assets/icons/Templiers/Z.svg"

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
export const templars_formater = (v: string): string => {
  if (!v) return ""
  return `<div text-black dark:text-white">${v
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

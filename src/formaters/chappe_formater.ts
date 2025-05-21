import A from "../assets/icons/Chappe/A.svg?raw"
import B from "../assets/icons/Chappe/B.svg?raw"
import C from "../assets/icons/Chappe/C.svg?raw"
import D from "../assets/icons/Chappe/D.svg?raw"
import E from "../assets/icons/Chappe/E.svg?raw"
import F from "../assets/icons/Chappe/F.svg?raw"
import G from "../assets/icons/Chappe/G.svg?raw"
import H from "../assets/icons/Chappe/H.svg?raw"
import I from "../assets/icons/Chappe/I.svg?raw"
import K from "../assets/icons/Chappe/K.svg?raw"
import L from "../assets/icons/Chappe/L.svg?raw"
import M from "../assets/icons/Chappe/M.svg?raw"
import N from "../assets/icons/Chappe/N.svg?raw"
import O from "../assets/icons/Chappe/O.svg?raw"
import P from "../assets/icons/Chappe/P.svg?raw"
import Q from "../assets/icons/Chappe/Q.svg?raw"
import R from "../assets/icons/Chappe/R.svg?raw"
import S from "../assets/icons/Chappe/S.svg?raw"
import T from "../assets/icons/Chappe/T.svg?raw"
import U from "../assets/icons/Chappe/U.svg?raw"
import V from "../assets/icons/Chappe/V.svg?raw"
import W from "../assets/icons/Chappe/W.svg?raw"
import X from "../assets/icons/Chappe/X.svg?raw"
import Y from "../assets/icons/Chappe/Y.svg?raw"
import Z from "../assets/icons/Chappe/Z.svg?raw"
import N1 from "../assets/icons/Chappe/1.svg?raw"
import N2 from "../assets/icons/Chappe/2.svg?raw"
import N3 from "../assets/icons/Chappe/3.svg?raw"
import N4 from "../assets/icons/Chappe/4.svg?raw"
import N5 from "../assets/icons/Chappe/5.svg?raw"
import N6 from "../assets/icons/Chappe/6.svg?raw"
import N7 from "../assets/icons/Chappe/7.svg?raw"
import N8 from "../assets/icons/Chappe/8.svg?raw"
import N9 from "../assets/icons/Chappe/9.svg?raw"
import N10 from "../assets/icons/Chappe/10.svg?raw"

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
  N1,
  N2,
  N3,
  N4,
  N5,
  N6,
  N7,
  N8,
  N9,
  N10,
}
export const chappe_formater = (v: string): string => {
  if (!v) return ""
  return `<div class="flex items-center flex-wrap gap-1 w-fit gap-y-6 text-black dark:text-white">${v
    .toUpperCase()
    .split("")
    .map((c) => {
      //if (c === " ") return `<span style="display:inline-block;width:16px"></span>`
      if (MAP[c])
        return `<span class="inline h-8 w-8" style="display:inline-block;vertical-align:middle">${MAP[c]}</span>`
      if (MAP["N" + c])
        return `<span class="inline h-8 w-8" style="display:inline-block;vertical-align:middle">${MAP["N" + c]}</span>`
      return ""
    })
    .join("")}</div>`
}

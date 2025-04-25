import {hms_formater} from "../../formaters/hms_formater"
import {ymd_formater} from "../../formaters/ymd_formater"

const duration = {
  s: {
    label: "seconde",
    divisor: 1,
  },
  m: {
    label: "minute",
    divisor: 60,
  },
  h: {
    label: "heure",
    divisor: 3600,
  },
  j: {
    label: "jour",
    divisor: 86400,
  },
  w: {
    label: "semaine",
    divisor: 604800,
  },
  y: {
    label: "année",
    divisor: 31557600,
  },
  hms: {
    label: "hh:mm:ss",
    divisor: 1,
    formater: hms_formater,
  },
  jmy: {
    label: "aa:mm:jj",
    divisor: 1,
    formater: ymd_formater,
  },
  H60m: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
    label: "record du 60m H",
    divisor: 6.34,
    not_unit: true,
  },
  H100m: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
    label: "record du 100m H",
    divisor: 9.58,
    not_unit: true,
  },
  H200m: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
    label: "record du 200m H",
    divisor: 19.19,
    not_unit: true,
  },
  H4x100m: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
    label: "record du 4x100m H",
    divisor: 36.84,
    not_unit: true,
  },
  H400m: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
    label: "record du 400m H",
    divisor: 43.03,
    not_unit: true,
  },
  H800m: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
    label: "record du 800m H",
    divisor: 100.91,
    not_unit: true,
  },
  H4x400m: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
    label: "record du 4x400m H",
    divisor: 174.29,
    not_unit: true,
  },
  H1500m: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
    label: "record du 1500m H",
    divisor: 206,
    not_unit: true,
  },
  Hmile: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
    label: "record du mile H",
    divisor: 223.13,
    not_unit: true,
  },
  H3000m: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
    label: "record du 3000m steeple H",
    divisor: 472.11,
    not_unit: true,
  },
  H5000m: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
    label: "record du 5000m H",
    divisor: 755.36,
    not_unit: true,
  },
  H10000m: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
    label: "record du 10000m H",
    divisor: 1571,
    not_unit: true,
  },
  Hmarathon: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
    label: "record du Marathon H",
    divisor: 7235,
    not_unit: true,
  },
  H20kmWalk: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
    label: "record du 20km marche H",
    divisor: 4570,
    not_unit: true,
  },
  H50kmWalk: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
    label: "record du 50km marche H",
    divisor: 12753,
    not_unit: true,
  },
  H100km: {
    info: 'selon les données de <a href="https://fr.wikipedia.org/wiki/Records_du_monde_d%27athl%C3%A9tisme" target="_blank">Wikipedia</a>.',
    label: "record du 100km H",
    divisor: 21935,
    not_unit: true,
  },
}

export default duration

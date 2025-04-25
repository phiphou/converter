const angle = {
  degré: {
    label: "degré",
    divisor: 1,
  },
  radian: {
    label: "radian",
    divisor: 180 / Math.PI,
  },
  arc_m: {
    label: "minute d'arc",
    divisor: 1 / 60,
  },
  arc_s: {
    label: "seconde d'arc",
    divisor: 1 / 3600,
  },
  grade: {
    label: "grade",
    divisor: 0.9,
  },
  angular_mil_NATO: {
    label: "mil angulaire",
    info: 'le mil angulaire est utilisé en artillerie, notamment par l\'OTAN (<a href="https://fr.wikipedia.org/wiki/Mil_angulaire" target="_blank">source</a>)',
    divisor: (1 / 3600) * 202.5,
    pluralize_all: true,
  },
}

export default angle

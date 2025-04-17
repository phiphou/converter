import fs from "fs"
import path from "path"
import {fileURLToPath} from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filePath = path.resolve(__dirname, "../src/data/dictionaries.ts")

try {
  const fileContent = fs.readFileSync(filePath, "utf-8")

  const match = fileContent.match(/{\n[.\s\w:{}"',éèà<=/\->êë'(%\\âîï)°œ\*\+)ç]*/gim)

  if (!match) {
    throw new Error('Impossible de trouver "dictionaries" dans le fichier.')
  }

  const dictionariesCode = match[0]

  const dictionaries = eval(
    "(" +
      dictionariesCode
        .replaceAll(/formater: (.*)/gm, "")
        .replaceAll(/converter: (.*)/gm, "")
        .replaceAll(/pluralize: (.*)/gm, "") +
      ")"
  )

  let totalUnits = 0
  let countWithoutInfo = 0
  let unitsWithoutInfo = []

  for (const category in dictionaries) {
    const units = dictionaries[category]
    for (const unitKey in units) {
      totalUnits++
      const unit = units[unitKey]
      if (!unit.hasOwnProperty("not_unit") && !unit.hasOwnProperty("info")) {
        countWithoutInfo++
        unitsWithoutInfo.push(`${category}.${unitKey}`)
      }
    }
  }

  const percentageMissing = ((countWithoutInfo / totalUnits) * 100).toFixed(2)

  console.log(`Units : ${totalUnits}`)
  console.log(`Unit without "infos" field : ${countWithoutInfo}`)
  console.log(`Percentage of missing "info" field : ${percentageMissing}%`)
  // console.log(`\nListe des unités sans "info" :\n${unitsWithoutInfo.join("\n")}`)
} catch (error) {
  console.error("Erreur :", error.message)
}

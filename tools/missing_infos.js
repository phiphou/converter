import fs from "fs"
import path from "path"
import {exit} from "process"
import {fileURLToPath} from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filePath = path.resolve(__dirname, "../src/data/dictionaries.ts")

try {
  const fileContent = fs.readFileSync(filePath, "utf-8")

  const match = fileContent.match(/{\n[.\s\w:{}"',éèà<=/\->êë'(%\\âîï)°œ\*\+)çłóôʻÅ#³¹²]*/gim)

  if (!match) {
    throw new Error('Unable to find "dictionaries" in file.')
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
      if (unitKey == "list" || unitKey == "materials") {
        totalUnits += Object.keys(units[unitKey]).length
      } else if (unitKey != "infos") {
        totalUnits++
      }

      const unit = units[unitKey]
      if (unit.hasOwnProperty("not_unit") && !unit.hasOwnProperty("info")) {
        countWithoutInfo++
        unitsWithoutInfo.push(`${category}.${unitKey}`)
      }
    }
  }

  const percentageMissing = ((countWithoutInfo / totalUnits) * 100).toFixed(2)

  console.log(`\n Units : ${totalUnits}`)
  console.log(` Units without "info" field : ${countWithoutInfo}`)
  console.log(` % of missing "info" field : ${percentageMissing}%\n`)
  console.log(`\n Liste des unités sans "info" :\n${unitsWithoutInfo.join("\n")}`)
} catch (error) {
  console.error("Error :", error.message)
}

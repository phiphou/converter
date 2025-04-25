import fs from "fs"
import path from "path"
import {exit} from "process"
import {fileURLToPath} from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dataDir = path.resolve(__dirname, "../src/data/dictionaries")

try {
  // Lire tous les fichiers dans le dossier "../src/data/"
  const files = fs.readdirSync(dataDir).filter((file) => file.endsWith(".ts"))

  let totalUnits = 0
  let countWithoutInfo = 0
  let unitsWithoutInfo = []

  for (const file of files) {
    const filePath = path.join(dataDir, file)
    const fileContent = fs.readFileSync(filePath, "utf-8")

    const match = fileContent.match(/{\n[.\s\w:{}"',éèà<=/\->êë'(%\\âîï)°œ\*\+)çłóôʻÅ#³¹²_\-\?\!]*}/gim)

    if (!match) {
      console.warn(`Unable to find "dictionaries" in file: ${file}`)
      continue
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

    for (const category in dictionaries) {
      const units = dictionaries[category]

      if (typeof units == "object" && !units.hasOwnProperty("label")) {
        totalUnits += Object.keys(units).length
      } else {
        totalUnits++
      }

      for (const unitKey in units) {
        if (unitKey == "list" || unitKey == "materials") {
          totalUnits += Object.keys(units[unitKey]).length
        }
      }

      if (units.hasOwnProperty("not_unit")) {
        if (!units.hasOwnProperty("info")) {
          countWithoutInfo++
          unitsWithoutInfo.push(` ${file.replace(".ts", "")}.${category}`)
        }
      }
    }
  }
  const percentageMissing = ((countWithoutInfo / totalUnits) * 100).toFixed(2)

  console.log(`\n Units : ${totalUnits}`)
  console.log(` Units without "info" field : ${countWithoutInfo}`)
  console.log(` % of missing "info" field : ${percentageMissing}%\n`)
  console.log(`\n Liste des unités sans "info" :\n\n${unitsWithoutInfo.join("\n")}\n\n`)
} catch (error) {
  console.error("Error :", error.message)
}

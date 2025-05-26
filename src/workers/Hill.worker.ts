import {generateHillMatrix, hillEncrypt} from "../converters/cypher_converter"

self.onmessage = async (event) => {
  const {plainText} = event.data

  try {
    const matrix = await generateHillMatrix()
    // const matrix = [
    //   [3, 5],
    //   [6, 17],
    // ] //  test
    if (!matrix) {
      self.postMessage({error: "La matrice générée est invalide."})
      return
    }
    const result = await hillEncrypt(plainText, matrix)
    self.postMessage(result)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    self.postMessage({error: errorMessage})
  }
}

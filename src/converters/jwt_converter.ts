const base64urlEncode = (data: ArrayBuffer) => {
  // Convertir ArrayBuffer en Uint8Array puis en string base64
  const bytes = new Uint8Array(data)
  let binary = ""
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

async function hashHMACSHA256(key: string, message: string) {
  const encoder = new TextEncoder()
  const encodedKey = encoder.encode(key)
  const encodedMessage = encoder.encode(message)

  const cryptoKey = await crypto.subtle.importKey("raw", encodedKey, {name: "HMAC", hash: {name: "SHA-256"}}, false, [
    "sign",
  ])

  const signature = await crypto.subtle.sign("HMAC", cryptoKey, encodedMessage)

  return base64urlEncode(signature)
}

async function jwt(header: string, payload: string, secret: string): Promise<string> {
  // Enlever tous les espaces et retours à la ligne du header et payload

  const headerBase64 = base64urlEncode(new TextEncoder().encode(header))
  const payloadBase64 = base64urlEncode(new TextEncoder().encode(payload))
  const signature = await hashHMACSHA256(secret, headerBase64 + "." + payloadBase64)

  return `${headerBase64}.${payloadBase64}.${signature}`
}

export const jwt_converter = async (value: string): Promise<string> => {
  // Si l'entrée est un objet JSON avec header, payload et secret
  try {
    const parts = value.split("|||") // Utilisez un séparateur unique

    if (parts.length !== 3) {
      throw new Error("L'entrée doit contenir exactement 3 parties: header, payload et secret")
    }

    const [header, payload, secret] = parts
    const json_header = JSON.parse(header)
    const json_payload = JSON.parse(payload)

    if (!json_header || !json_payload || !secret) {
      throw new Error("L'entrée doit contenir header, payload et secret")
    }

    console.log("header", json_header)
    console.log("payload", json_payload)
    console.log("secret", secret)

    // Convertir en string si ce sont des objets
    const headerStr = typeof json_header === "object" ? JSON.stringify(json_header) : json_header
    const payloadStr = typeof json_payload === "object" ? JSON.stringify(json_payload) : json_payload

    return await jwt(headerStr, payloadStr, secret)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Format d'entrée invalide. Attendu: JSON avec header, payload et secret")
  }
}

export default jwt_converter

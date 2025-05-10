import {Unit} from "../types/types"
import {md5} from "js-md5"
import bcrypt from "bcryptjs"

const sha = async (text: string, type: string): Promise<string> => {
  const encoder = new TextEncoder()
  const data = encoder.encode(text)
  const hash = await crypto.subtle.digest(type, data)

  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
}

async function createHMAC(message: string, keyString: string, type: string) {
  const encoder = new TextEncoder()
  const keyData = encoder.encode(keyString)
  const messageData = encoder.encode(message)
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyData,
    {
      name: "HMAC",
      hash: type,
    },
    false,
    ["sign"]
  )

  const signature = await crypto.subtle.sign("HMAC", cryptoKey, messageData)

  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

async function hbcrypt(message: string, cost: number): Promise<string> {
  const salt = await bcrypt.genSalt(cost)
  const hash = await bcrypt.hash(message, salt)
  return hash
}

// async function hArgon2(message: string, time: number, mem: number): Promise<string> {
//   const result = await hash({
//     pass: message,
//     salt: crypto.getRandomValues(new Uint8Array(16)), // 16-byte random salt
//     time: time, // number of iterations
//     mem: mem, // memory in KiB (64 MiB)
//     hashLen: 32, // desired hash length
//     parallelism: 1, // number of threads,
//     type: ArgonType.Argon2id,
//   })

//   return result.encoded
// }

export async function hArgon2(message: string, time: number, mem: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL("../workers/argon2.worker.ts", import.meta.url), {type: "module"})

    worker.onmessage = (event) => {
      const {success, hash, error} = event.data
      if (success) {
        resolve(hash)
      } else {
        reject(new Error(error))
      }
      worker.terminate() // Terminer le worker après l'exécution
    }

    worker.onerror = (error) => {
      reject(error)
      worker.terminate()
    }

    worker.postMessage({message, time, mem})
  })
}

const conversionMap: Record<string, (t: string, k: string, k2: number) => Promise<string>> = {
  "text:MD5": async (t) => md5(t),
  "text:SHA-1": async (t) => sha(t, "SHA-1"),
  "text:SHA-256": async (t) => sha(t, "SHA-256"),
  "text:SHA-384": async (t) => sha(t, "SHA-384"),
  "text:SHA-512": async (t) => sha(t, "SHA-512"),
  "text:HMAC SHA-1": async (t, k) => createHMAC(t, k, "SHA-1"),
  "text:HMAC SHA-256": async (t, k) => createHMAC(t, k, "SHA-256"),
  "text:HMAC SHA-384": async (t, k) => createHMAC(t, k, "SHA-384"),
  "text:HMAC SHA-512": async (t, k) => createHMAC(t, k, "SHA-512"),
  "text:BCRYPT": async (t, k) => await hbcrypt(t, parseInt(k)),
  "text:ARGON2": async (t, k, k2) => await hArgon2(t, parseInt(k), k2),
}

export const hash_converter = async (value: string, unitFrom: Unit, unitTo: Unit): Promise<string> => {
  if (!unitFrom && !unitTo) return value

  const key = `${unitFrom.label}:${unitTo.label}`
  const conversionFunction = conversionMap[key]

  if (!conversionFunction) throw new Error(`Unsupported conversion from ${unitFrom.label} to ${unitTo.label}`)

  return await conversionFunction(
    value,
    unitTo.key === undefined || unitTo.key === "" ? (unitFrom.key ?? "").toString() : unitTo.key.toString(),
    unitTo.key2 === undefined ? (unitFrom.key2 ?? 65536) : unitTo.key2
  )
}

export default hash_converter

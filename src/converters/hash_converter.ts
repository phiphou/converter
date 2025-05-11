import {Unit} from "../types/types"
import bcrypt from "bcryptjs"
import {AES, MD5, SHA3, RIPEMD160, enc} from "crypto-js"
import {Whirlpool, encoders} from "whirlpool-hash"

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

async function whirlpoolHash(message: string): Promise<string> {
  const whirlpool = new Whirlpool()
  const hash: string = whirlpool.getHash(message).toString()
  return encoders.toHex(hash)
}

async function ripemd160(message: string): Promise<string> {
  return RIPEMD160(message).toString(enc.Hex)
}

async function aes(message: string, key: string): Promise<string> {
  return AES.encrypt(message, key).toString()
}

async function sha3(message: string): Promise<string> {
  return SHA3(message, {outputLength: 256}).toString(enc.Hex)
}

async function md5(message: string): Promise<string> {
  return MD5(message).toString(enc.Hex)
}

async function crc_32(message: string): Promise<string> {
  const toUnsignedInt32 = (n: number): number => {
    if (n >= 0) {
      return n
    }
    return 0xffffffff - n * -1 + 1
  }
  const crc32UnsignedFull = (input: string): number => {
    const encoder = new TextEncoder()
    const bytes = encoder.encode(input)
    const divisor = 0xedb88320
    let crc = 0xffffffff
    for (const byte of bytes) {
      crc = crc ^ byte
      for (let i = 0; i < 8; i++) {
        if (crc & 1) {
          crc = (crc >>> 1) ^ divisor
        } else {
          crc = crc >>> 1
        }
      }
    }
    return toUnsignedInt32(crc ^ 0xffffffff)
  }
  return "0x" + crc32UnsignedFull(message).toString().padStart(8, "0")
}

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
      worker.terminate()
    }

    worker.onerror = (error) => {
      reject(error)
      worker.terminate()
    }

    worker.postMessage({message, time, mem})
  })
}

const conversionMap: Record<string, (t: string, k: string, k2: number) => Promise<string>> = {
  "text:CRC32": async (t) => crc_32(t),
  "text:MD5": async (t) => md5(t),
  "text:SHA-1": async (t) => sha(t, "SHA-1"),
  "text:SHA-256": async (t) => sha(t, "SHA-256"),
  "text:SHA-384": async (t) => sha(t, "SHA-384"),
  "text:SHA-512": async (t) => sha(t, "SHA-512"),
  "text:SHA-3": async (t) => sha3(t),
  "text:RIPEMD-160": async (t) => ripemd160(t),
  "text:WHIRLPOOL": async (t) => whirlpoolHash(t),
  "text:HMAC SHA-1": async (t, k) => createHMAC(t, k, "SHA-1"),
  "text:HMAC SHA-256": async (t, k) => createHMAC(t, k, "SHA-256"),
  "text:HMAC SHA-384": async (t, k) => createHMAC(t, k, "SHA-384"),
  "text:HMAC SHA-512": async (t, k) => createHMAC(t, k, "SHA-512"),
  "text:AES": async (t, k) => aes(t, k),
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

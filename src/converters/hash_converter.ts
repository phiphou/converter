import {Tiger} from "fb-tiger-hash"
import {Unit} from "../types/types"
import {
  md4,
  adler32,
  xxhash128,
  md5,
  whirlpool,
  sha3,
  ripemd160,
  bcrypt,
  argon2id,
  blake3,
  crc64,
  scrypt,
  xxhash64,
  xxhash32,
  xxhash3,
} from "hash-wasm"

import {Buffer} from "buffer"
import {getHash} from "../utils/snefru.js"
import {md6} from "../utils/md6.js"
window.Buffer = Buffer

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
  const salt = new Uint8Array(16)
  window.crypto.getRandomValues(salt)
  return await bcrypt({password: message, costFactor: cost, salt})
}

async function crc_32(message: string): Promise<string> {
  const toUnsignedInt32 = (n: number): number => {
    if (n >= 0) return n
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
        crc = crc & 1 ? (crc >>> 1) ^ divisor : crc >>> 1
      }
    }
    return toUnsignedInt32(crc ^ 0xffffffff)
  }
  return "0x" + crc32UnsignedFull(message).toString(16)
}

export async function hArgon2(message: string, time: number, mem: number): Promise<string> {
  const salt = new Uint8Array(16)
  window.crypto.getRandomValues(salt)
  return await argon2id({
    password: message,
    salt,
    parallelism: 1,
    iterations: time,
    memorySize: mem,
    hashLength: 64,
    outputType: "encoded",
  })
}

async function scryptHash(t: string, k: string): Promise<string> {
  if (k === "") k = "1024"
  return await scrypt({
    password: t,
    salt: new TextEncoder().encode("MYSALT123"),
    costFactor: parseInt(k),
    blockSize: 8,
    parallelism: 2,
    hashLength: 32,
  })
}

async function pbkdf2Hash(t: string, k: string): Promise<string> {
  if (k === "") k = "65536"
  const salt = new Uint8Array(16)
  window.crypto.getRandomValues(salt)
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(t), {name: "PBKDF2"}, false, ["deriveBits"])
  const derivedKey = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations: parseInt(k),
      hash: "SHA-256",
    },
    key,
    256
  )
  return Array.from(new Uint8Array(derivedKey))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
}

async function snefruHash(message: string): Promise<string> {
  try {
    const hash = await getHash(message)
    console.log("Hash:", hash)
    return hash
  } catch (err) {
    console.error("Error:", err)
    throw err
  }
}

async function md6Hash(message: string): Promise<string> {
  return md6().hex(message)
}

async function aes(message: string) {
  try {
    const algorithm = {name: "AES-GCM", length: 256}
    const symmetricKey = await crypto.subtle.generateKey(algorithm, true, ["encrypt", "decrypt"])
    const keyPair = await crypto.subtle.generateKey(
      {
        name: "RSA-OAEP",
        modulusLength: 2048,
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
        hash: "SHA-256",
      },
      true,
      ["encrypt", "decrypt"]
    )
    const iv = crypto.getRandomValues(new Uint8Array(12)) // Generate 12-byte IV
    const encodedMessage = new TextEncoder().encode(message)
    const encryptedMessage = await crypto.subtle.encrypt({name: "AES-GCM", iv}, symmetricKey, encodedMessage)
    const symmetricKeyBytes = await crypto.subtle.exportKey("raw", symmetricKey)
    const encryptedSymmetricKey = await crypto.subtle.encrypt({name: "RSA-OAEP"}, keyPair.publicKey, symmetricKeyBytes)
    return `Clef : ${btoa(String.fromCharCode(...new Uint8Array(iv))) + btoa(String.fromCharCode(...new Uint8Array(encryptedSymmetricKey)))} \n\n Message : ${btoa(String.fromCharCode(...new Uint8Array(encryptedMessage)))}` // Convert to Base64
  } catch (error) {
    return `Error: ${error}`
  }
}

const conversionMap: Record<string, (t: string, k: string, k2: number) => Promise<string>> = {
  "text:CRC32": async (t) => crc_32(t),
  "text:MD4": async (t) => md4(t),
  "text:MD5": async (t) => md5(t),
  "text:TIGER-128": async (t) => new Tiger(Tiger.L128, 0, false).hash(t),
  "text:TIGER-160": async (t) => new Tiger(Tiger.L160, 0, false).hash(t),
  "text:TIGER-192": async (t) => new Tiger(Tiger.L192, 0, false).hash(t),
  "text:SHA-1": async (t) => sha(t, "SHA-1"),
  "text:SHA-256": async (t) => sha(t, "SHA-256"),
  "text:SHA-384": async (t) => sha(t, "SHA-384"),
  "text:SHA-512": async (t) => sha(t, "SHA-512"),
  "text:SHA-3-256": async (t) => sha3(t, 256),
  "text:SHA-3-384": async (t) => sha3(t, 384),
  "text:SHA-3-512": async (t) => sha3(t, 512),
  "text:RIPEMD-160": async (t) => ripemd160(t),
  "text:WHIRLPOOL": async (t) => whirlpool(t),
  "text:ADLER32": async (t) => adler32(t),
  "text:HMAC SHA-1": async (t, k) => createHMAC(t, k, "SHA-1"),
  "text:HMAC SHA-256": async (t, k) => createHMAC(t, k, "SHA-256"),
  "text:HMAC SHA-384": async (t, k) => createHMAC(t, k, "SHA-384"),
  "text:HMAC SHA-512": async (t, k) => createHMAC(t, k, "SHA-512"),
  "text:XXHash32": async (t) => xxhash32(t),
  "text:XXHash61": async (t) => xxhash64(t),
  "text:XXHash128": async (t) => xxhash128(t),
  "text:XXHash3": async (t) => xxhash3(t),
  "text:AES": async (t) => aes(t),
  "text:BCRYPT": async (t, k) => await hbcrypt(t, parseInt(k)),
  "text:ARGON2": async (t, k, k2) => await hArgon2(t, parseInt(k), k2),
  "text:BLAKE3": async (t) => await blake3(t),
  "text:CRC64": async (t) => await crc64(t),
  "text:SCRYPT": async (t, k) => scryptHash(t, k),
  "text:PBKDF2": async (t, k) => pbkdf2Hash(t, k),
  "text:SNEFRU": async (t) => snefruHash(t),
  "text:MD6": async (t) => md6Hash(t),
}

export const hash_converter = async (value: string, unitFrom: Unit, unitTo: Unit): Promise<string> => {
  if (!unitFrom && !unitTo) return value

  const key = `${unitFrom.label}:${unitTo.label}`
  const conversionFunction = conversionMap[key]

  if (!conversionFunction) throw new Error(`Conversion impossible de ${unitFrom.label} vers ${unitTo.label}`)

  return await conversionFunction(
    value,
    unitTo.key === undefined || unitTo.key === "" ? (unitFrom.key ?? "").toString() : unitTo.key.toString(),
    Number(unitTo.key2 === undefined ? (unitFrom.key2 ?? 65536) : unitTo.key2)
  )
}

export default hash_converter

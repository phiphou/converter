import {hash, ArgonType} from "argon2-browser/dist/argon2-bundled.min.js"

self.onmessage = async (event) => {
  const {message, time, mem} = event.data

  try {
    const result = await hash({
      pass: message,
      salt: crypto.getRandomValues(new Uint8Array(16)), // 16-byte random salt
      time: time, // number of iterations
      mem: mem, // memory in KiB
      hashLen: 32, // desired hash length
      parallelism: 1, // number of threads
      type: ArgonType.Argon2id,
    })

    self.postMessage({success: true, hash: result.encoded})
  } catch (error) {
    self.postMessage({success: false, error: error instanceof Error ? error.message : "An unknown error occurred"})
  }
}

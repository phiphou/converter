import hash_converter from "../../converters/hash_converter"

const hash = {
  custom: "hash",
  noSwitch: true,
  infos: {
    // label:
    //   "plus d'infos sur les systèmes de numération sur <a href='https://fr.wikipedia.org/wiki/Syst%C3%A8me_de_num%C3%A9ration' target='_blank'>Wikipedia</a>.",
  },
  CRC32: {
    label: "CRC32",
    converter: hash_converter,
    pluralize: true,
  },
  CRC64: {
    label: "CRC64",
    converter: hash_converter,
    pluralize: true,
  },
  ADLER32: {
    label: "ADLER32",
    converter: hash_converter,
    pluralize: true,
  },
  MD4: {
    label: "MD4",
    converter: hash_converter,
    pluralize: true,
  },
  MD5: {
    label: "MD5",
    converter: hash_converter,
    pluralize: true,
  },
  MD6: {
    label: "MD6",
    converter: hash_converter,
    pluralize: true,
  },
  TIGER160: {
    label: "TIGER-160",
    converter: hash_converter,
    pluralize: true,
  },
  TIGER192: {
    label: "TIGER-192",
    converter: hash_converter,
    pluralize: true,
  },
  RIPEMD160: {
    label: "RIPEMD-160",
    converter: hash_converter,
    pluralize: true,
  },
  SNEFRU: {
    label: "SNEFRU",
    converter: hash_converter,
    pluralize: true,
  },
  SHA1: {
    label: "SHA-1",
    converter: hash_converter,
    pluralize: true,
  },
  SHA256: {
    label: "SHA-256",
    converter: hash_converter,
    pluralize: true,
  },
  SHA384: {
    label: "SHA-384",
    converter: hash_converter,
    pluralize: true,
  },
  SHA512: {
    label: "SHA-512",
    converter: hash_converter,
    pluralize: true,
  },
  SHA3_256: {
    label: "SHA-3-256",
    converter: hash_converter,
    pluralize: true,
  },
  SHA3_384: {
    label: "SHA-3-384",
    converter: hash_converter,
    pluralize: true,
  },
  SHA3_512: {
    label: "SHA-3-512",
    converter: hash_converter,
    pluralize: true,
  },
  SCRYPT: {
    label: "SCRYPT",
    converter: hash_converter,
    pluralize: true,
  },
  WHIRLPOOL: {
    label: "WHIRLPOOL",
    converter: hash_converter,
    pluralize: true,
  },
  PBKDF2: {
    label: "PBKDF2",
    converter: hash_converter,
    pluralize: true,
  },
  BLAKE3: {
    label: "BLAKE3",
    converter: hash_converter,
    pluralize: true,
  },
  XXHASH32: {
    label: "XXHash32",
    converter: hash_converter,
    pluralize: true,
  },
  XXHASH64: {
    label: "XXHash64",
    converter: hash_converter,
    pluralize: true,
  },
  XXHASH128: {
    label: "XXHash128",
    converter: hash_converter,
    pluralize: true,
  },
  BCRYPT: {
    label: "BCRYPT",
    converter: hash_converter,
    pluralize: true,
  },
  ARGON2: {
    label: "ARGON2",
    converter: hash_converter,
    pluralize: true,
  },
  AES: {
    label: "AES",
    converter: hash_converter,
    pluralize: true,
  },
  HMAC_SHA1: {
    label: "HMAC SHA-1",
    converter: hash_converter,
    pluralize: true,
  },
  HMAC_SHA256: {
    label: "HMAC SHA-256",
    converter: hash_converter,
    pluralize: true,
  },
  HMAC_SHA384: {
    label: "HMAC SHA-384",
    converter: hash_converter,
    pluralize: true,
  },
  HMAC_SHA512: {
    label: "HMAC SHA-512",
    converter: hash_converter,
    pluralize: true,
  },
}

export default hash

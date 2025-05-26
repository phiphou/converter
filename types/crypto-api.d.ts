declare module "crypto-api" {
  export class Snefru {
    constructor()
    update(data: string): void
    finalize(): Uint8Array
  }

  export function toHex(data: Uint8Array): string
}

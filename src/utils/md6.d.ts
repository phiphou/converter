export interface MD6Instance {
  /**
   * Calcule le hash MD6 d'une chaîne en hexadécimal.
   * @param message - La chaîne à hacher.
   * @returns Le hash MD6 sous forme de chaîne hexadécimale.
   */
  hex(message: string): string
}

/**
 * Crée une nouvelle instance de MD6.
 * @returns Une instance de MD6 permettant de calculer des hashes.
 */
export function md6(): MD6Instance

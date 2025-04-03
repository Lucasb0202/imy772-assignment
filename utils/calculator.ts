function hexToDec(hex: string): number {
  return parseInt(hex, 16);
}

function decToHex(dec: number): string {
  return Math.min(dec, 0xFFFF).toString(16).toUpperCase(); 
}

export function add(hexA: string, hexB: string): string {
  return decToHex(hexToDec(hexA) + hexToDec(hexB));
}

export function subtract(hexA: string, hexB: string): string {
  return decToHex(Math.max(hexToDec(hexA) - hexToDec(hexB), 0));
}

export function multiply(hexA: string, hexB: string): string {
  return decToHex(hexToDec(hexA) * hexToDec(hexB));
}

export function divide(hexA: string, hexB: string): string {
  if (hexToDec(hexB) === 0) throw new Error("Cannot divide by zero");
  return decToHex(Math.floor(hexToDec(hexA) / hexToDec(hexB))); 
}

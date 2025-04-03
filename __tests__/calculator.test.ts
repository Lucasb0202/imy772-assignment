import { add, subtract, multiply, divide } from "../utils/calculator";
import { describe, test, expect } from "@jest/globals";

describe("Hexadecimal Calculator Arithmetic Operations", () => {
  test("Adds two hex numbers correctly", () => {
    expect(add("A", "5")).toBe("F"); 
  });

  test("Subtracts two hex numbers correctly", () => {
    expect(subtract("F", "A")).toBe("5"); 
  });

  test("Divides two hex numbers correctly", () => {
    expect(divide("10", "2")).toBe("8"); 
  });

  test("Multiplies two hex numbers correctly", () => {
    expect(multiply("3", "4")).toBe("C"); 
  });
});

describe("Hexadecimal Calculator Error Handling", () => {
  test("Does not return negative numbers", () => {
    expect(subtract("5", "A")).toBe("0"); 
  });

  test("Does not return decimals", () => {
    expect(divide("9", "4")).toBe("2"); 
  });

  test("Limits results to four hex digits", () => {
    expect(multiply("FFFF", "10")).toBe("FFFF"); 
  });

  test("Cannot divide by zero", () => {
    expect(() => divide("A", "0")).toThrow("Cannot divide by zero");
  });
});


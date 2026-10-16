// Unit test: we check one small function on its own.
import { describe, it, expect } from "vitest";
import { add, isEven } from "../../src/utils/math";

describe("add", () => {
  it("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("adds two negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it("adds a positive and a negative number", () => {
    expect(add(2, -3)).toBe(-1);
  });
});

describe("isEven", () => {
  it("says 4 is even", () => {
    expect(isEven(4)).toBe(true);
  });

  it("says 7 is not even", () => {
    expect(isEven(7)).toBe(false);
  });

  it("says 0 is even", () => {
    expect(isEven(0)).toBe(true);
  });
});

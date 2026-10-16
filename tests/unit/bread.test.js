import { describe, it, expect } from "vitest";
import { calculateBreadCost } from "../../src/utils/bread";

describe("calculateBreadCost", () => {
  it("calculates the price of five breads", () => {
    expect(calculateBreadCost(5, 10)).toBe(50);
  });

  it("returns zero when we buy no bread", () => {
    expect(calculateBreadCost(0, 10)).toBe(0);
  });

  it("shows an error when the number is negative", () => {
    expect(calculateBreadCost(-2, 10)).toBe("Numbers cannot be negative.");
  });
});

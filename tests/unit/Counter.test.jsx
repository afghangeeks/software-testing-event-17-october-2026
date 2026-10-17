// Unit test: we show one small component on screen and click it.
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Counter from "../../src/components/Counter";

describe("Counter", () => {
  test("starts at zero", () => {
    render(<Counter />);

    expect(screen.getByText("Count: 0")).toBeDefined();
  });

  test("counts up when clicked", () => {
    render(<Counter />);

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByText("Count: 1")).toBeDefined();
  });

  test("counts up to three after three clicks", () => {
    render(<Counter />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    

    expect(screen.getByText("Count: 3")).toBeDefined();
  });
});

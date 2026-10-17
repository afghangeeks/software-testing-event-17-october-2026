// Unit test: we check the chai counter on its own, without the rest of the app.
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import ChaiCounter from "../../src/components/ChaiCounter";

describe("ChaiCounter", () => {
  test("starts with zero cups", () => {
    render(<ChaiCounter onPlaceOrder={vi.fn()} />);

    expect(screen.getByLabelText("0 cups")).toBeDefined();
  });

  test("adds a cup of chai", () => {
    render(<ChaiCounter onPlaceOrder={vi.fn()} />);

    fireEvent.click(screen.getByRole("button", { name: /add chai/i }));

    expect(screen.getByLabelText("1 cup")).toBeDefined();
  });

  test("places the chai order", () => {
    // vi.fn() is a fake function. It remembers how it was called.
    const placeOrder = vi.fn();

    render(<ChaiCounter onPlaceOrder={placeOrder} />);

    fireEvent.click(screen.getByRole("button", { name: /add chai/i }));
    // fireEvent.click(screen.getByRole("button", { name: /add chai/i }));
    fireEvent.click(screen.getByRole("button", { name: /place your order/i }));

    expect(placeOrder).toHaveBeenCalledWith(1);
  });

  test("cannot place an empty order", () => {
    render(<ChaiCounter onPlaceOrder={vi.fn()} />);

    const button = screen.getByRole("button", { name: /place your order/i });

    expect(button.disabled).toBe(true);
  });
});

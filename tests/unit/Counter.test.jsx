import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import ChaiCounter from "../../src/components/Counter";

describe("ChaiCounter", () => {
  test("adds a cup of chai", () => {
    render(<ChaiCounter onPlaceOrder={vi.fn()} />);

    fireEvent.click(screen.getByRole("button", { name: /add chai/i }));

    expect(screen.getByLabelText("1 cup")).toBeDefined();
    expect(screen.getByText("cup")).toBeDefined();
  });

  test("places the chai order", () => {
    const placeOrder = vi.fn();

    render(<ChaiCounter onPlaceOrder={placeOrder} />);

    fireEvent.click(screen.getByRole("button", { name: /add chai/i }));
    fireEvent.click(screen.getByRole("button", { name: /place your order/i }));

    expect(placeOrder).toHaveBeenCalledWith(1);
  });

  test("cannot place an empty order", () => {
    render(<ChaiCounter onPlaceOrder={vi.fn()} />);

    const button = screen.getByRole("button", {
      name: /place your order/i,
    });

    expect(button.disabled).toBe(true);
  });
});

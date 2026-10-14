import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { beforeAll, afterAll, afterEach, test, expect } from "vitest";
import ChaiOrderApp from "../../src/components/ChaiOrderApp";

const server = setupServer(
  http.get("*/api/hello", () => {
    return HttpResponse.json({ name: "Zahra" });
  }),
);

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

test("complete chai ordering flow: add chai and place order", async () => {
  render(<ChaiOrderApp />);

  fireEvent.click(screen.getByRole("button", { name: /add chai/i }));
  fireEvent.click(screen.getByRole("button", { name: /add chai/i }));

  expect(screen.getByLabelText("2 cups")).toBeDefined();
  expect(screen.getByText("cups")).toBeDefined();

  fireEvent.click(screen.getByRole("button", { name: /place your order/i }));

  expect(
    await screen.findByRole("heading", { name: "Salam, Zahra!" }),
  ).toBeDefined();

  expect(screen.getByText(/your order of/i)).toBeDefined();

  expect(screen.getByText(/2 cups of chai/i)).toBeDefined();

  await waitFor(() => {
    expect(screen.queryByRole("alert")).toBeNull();
  });
});

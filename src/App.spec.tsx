import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import App from "./App";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);

    expect(screen.findByText(/initialized/i)).toBeTruthy();

    // check if App components renders headline
  });
});

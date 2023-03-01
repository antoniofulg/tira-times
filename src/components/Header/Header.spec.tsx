import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

vi.mock("@/presentation/components/Navbar/Navbar.tsx", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="navbar" />;
  },
}));

describe("<Header />", () => {
  it("Should render the component with Navbar component", () => {
    render(<Header />);

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
});

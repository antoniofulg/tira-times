import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Icons from "./Icons";

vi.mock("@/components/Icons/components/Bars/Bars.tsx", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="bars" />;
  },
}));

vi.mock("@/components/Icons/components/X/X.tsx", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="x" />;
  },
}));

vi.mock("@/components/Icons/components/Team/Team.tsx", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="team" />;
  },
}));

describe("<Icons />", () => {
  it("Should render the type bars with the correct Icon", () => {
    render(<Icons type="bars" />);

    expect(screen.getByTestId("bars")).toBeInTheDocument();
  });

  it("Should render the type x with the correct Icon", () => {
    render(<Icons type="x" />);

    expect(screen.getByTestId("x")).toBeInTheDocument();
  });

  it("Should render the type team with the correct Icon", () => {
    render(<Icons type="team" />);

    expect(screen.getByTestId("team")).toBeInTheDocument();
  });
});

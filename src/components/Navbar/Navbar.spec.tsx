import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import Navbar from "./Navbar";

const makeSut = () => {
  const pages = [
    {
      path: "",
      label: "Home",
    },
    {
      path: "",
      label: "About",
    },
  ];

  render(<Navbar pages={pages} />, { wrapper: BrowserRouter });
};

vi.mock("@/components/Icons/components/X/X.tsx", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="x" />;
  },
}));

vi.mock("@/components/Icons/components/Bars/Bars.tsx", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="bars" />;
  },
}));

describe("<Navbar />", () => {
  it("Should render navbar with navigation to correct pages", () => {
    makeSut();

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  });

  it("Should render navbar with default navigation and navigation passed as props", () => {
    makeSut();

    expect(screen.getAllByRole("link")).toHaveLength(3);
  });

  it("Should toggle open menu state on button click", async () => {
    makeSut();

    expect(screen.getByTestId("bars")).toBeInTheDocument();
    expect(screen.queryByTestId("x")).not.toBeInTheDocument();

    await act(() => {
      screen.getByRole("button").click();
    });

    expect(screen.getByTestId("x")).toBeInTheDocument();
    expect(screen.queryByTestId("bars")).not.toBeInTheDocument();
  });
});

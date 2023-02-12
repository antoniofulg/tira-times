import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
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

describe("<Navbar />", () => {
  it("Should render navbar with navigation to correct pages", () => {
    makeSut();

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  });

  it("Should render navbar with default navigation and navigation passed as props", () => {
    makeSut();

    expect(screen.getAllByRole("link")).toHaveLength(3);
  });
});

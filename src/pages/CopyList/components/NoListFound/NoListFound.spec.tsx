import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NoListFound from "./NoListFound";

const makeSut = () => {
  render(<NoListFound />, { wrapper: BrowserRouter });
};

describe("<NoListFound />", () => {
  it("Should render navbar with navigation to correct pages", () => {
    makeSut();

    expect(
      screen.getByRole("link", { name: /voltar para o início/i })
    ).toHaveAttribute("href", "/");

    expect(
      screen.getByRole("link", { name: /ir para criação de partida/i })
    ).toHaveAttribute("href", "/match-info");
  });
});

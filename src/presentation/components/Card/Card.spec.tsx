import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "./Card";

describe("<Card />", () => {
  it("Should render with correctly props", () => {
    const title = "Testing title";
    const description = "Testing description";
    const link = "testing-link";

    render(<Card title={title} description={description} link={link}></Card>, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByRole("heading", { name: title }));
    expect(screen.getByText(description));
    expect(screen.getByRole("link")).toHaveAttribute("href", `/${link}`);
  });
});

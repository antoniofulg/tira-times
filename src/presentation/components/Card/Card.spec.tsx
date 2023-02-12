import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "./Card";

describe("<Card />", () => {
  it("Should render with correctly props", () => {
    const title = "Testing title";
    const description = "Testing description";
    const link = "testing-link";
    const label = "Testing Label";

    render(
      <Card
        title={title}
        description={description}
        link={link}
        label={label}
      ></Card>,
      { wrapper: BrowserRouter }
    );

    screen.debug();

    expect(screen.getByRole("heading", { name: title }));
    expect(screen.getByText(description));
    expect(screen.getByText(label).closest("a")).toHaveAttribute(
      "href",
      `/${link}`
    );
  });
});

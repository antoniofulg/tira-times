import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  it('Should have `role="button"` by default', () => {
    render(<Button />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Should render a different role when passed as param", () => {
    render(<Button role="submit" />);

    expect(screen.getByRole("submit")).toBeInTheDocument();
  });

  it("Should render a disabled status button", () => {
    render(<Button disabled />);

    expect(screen.getByRole("button")).toHaveAttribute("disabled");
    expect(screen.getByRole("button")).toHaveClass("disabled");
  });

  it("Should render loading status button", () => {
    render(<Button loading />);

    expect(screen.getByRole("button")).toHaveAttribute("disabled");
    expect(screen.getByRole("button")).toHaveClass("loading");
  });

  it("Should render correct class when primary color is provided", () => {
    render(<Button color="primary" />);

    expect(screen.getByRole("button")).toHaveClass("primary");
  });

  it("Should render correct class when secondary color is provided", () => {
    render(<Button color="secondary" />);

    expect(screen.getByRole("button")).toHaveClass("secondary");
  });

  it("Should render no class when color is not provided", () => {
    render(<Button />);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("unstyled");
    expect(button).not.toHaveClass("primary");
    expect(button).not.toHaveClass("secondary");
  });
});

import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("<Input />", () => {
  it('Should have `role="textbox"` by default', () => {
    render(<Input label="Test" />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("Should presents error message when passed as prop", () => {
    render(<Input label="Test" error="error" />);

    expect(screen.getByRole("textbox")).toHaveClass("error");
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("Should not presents error message when passed message was not provided", () => {
    render(<Input label="Test" error />);

    expect(screen.getByRole("textbox")).toHaveClass("error");
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("Should have valid class when valid prop is provided", () => {
    render(<Input label="Test" valid />);

    expect(screen.getByRole("textbox")).toHaveClass("valid");
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("Should hide error message if valid prop is provided as true", () => {
    render(<Input label="Test" error="error" valid />);

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("Should have disabled class when disabled prop is provided", () => {
    render(<Input label="Test" disabled />);

    expect(screen.getByRole("textbox")).toHaveClass("disabled");
  });
});

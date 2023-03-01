import { render, screen } from "@testing-library/react";
import Textarea from "./Textarea";

describe("<Textarea />", () => {
  it('Should have `role="textbox"` by default', () => {
    render(<Textarea label="Test" />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("Should presents error message when passed as prop", () => {
    render(<Textarea label="Test" error="error" />);

    expect(screen.getByRole("textbox")).toHaveClass("error");
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("Should not presents error message when passed message was not provided", () => {
    render(<Textarea label="Test" error />);

    expect(screen.getByRole("textbox")).toHaveClass("error");
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("Should have valid class when valid prop is provided", () => {
    render(<Textarea label="Test" valid />);

    expect(screen.getByRole("textbox")).toHaveClass("valid");
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("Should hide error message if valid prop is provided as true", () => {
    render(<Textarea label="Test" error="error" valid />);

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("Should have disabled class when disabled prop is provided", () => {
    render(<Textarea label="Test" disabled />);

    expect(screen.getByRole("textbox")).toHaveClass("disabled");
  });

  it("Should presents hint message when passed as prop", () => {
    render(<Textarea label="Test" hint="hint" />);

    expect(screen.getByText("hint")).toBeInTheDocument();
  });

  it("Should presents required indicator when passed as prop", () => {
    render(<Textarea label="Test" required />);

    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("Should presents error message even if hint message was provided as prop", () => {
    render(<Textarea label="Test" hint="hint" error="error" />);

    expect(screen.getByText("error")).toBeInTheDocument();
    expect(screen.queryByText("hint")).not.toBeInTheDocument();
  });
});

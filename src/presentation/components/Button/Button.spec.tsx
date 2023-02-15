import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  it('Should have `role="button"` by default', () => {
    render(<Button color={"primary"} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

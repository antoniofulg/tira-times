import { render, screen } from "@testing-library/react";
import Stepper from "./Stepper";

const makeSut = () => {
  const steps = [
    { label: "Informações", concluded: true },
    { label: "Jogadores", concluded: false },
    { label: "Regras", concluded: false },
  ];

  render(<Stepper steps={steps} current={1} />);

  return {
    steps,
  };
};

describe("<Stepper />", () => {
  it("Should presents correct number of steps", () => {
    const { steps } = makeSut();

    expect(screen.getByText(steps[0].label)).toBeInTheDocument();
    expect(screen.getByText(steps[1].label)).toBeInTheDocument();
    expect(screen.getByText(steps[2].label)).toBeInTheDocument();
  });

  it("Should presents correct status of each step", () => {
    const { steps } = makeSut();

    expect(screen.getByText(steps[0].label).closest("li")).toHaveClass(
      "typo-concluded"
    );
    expect(screen.getByText(steps[1].label).closest("li")).toHaveClass(
      "typo-current"
    );
    expect(screen.getByText(steps[2].label).closest("li")).toHaveClass(
      "typo-pending"
    );
  });
});

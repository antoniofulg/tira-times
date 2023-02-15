import { render, screen, act } from "@testing-library/react";
import { vi } from "vitest";
import Stepper from "./Stepper";

const goToStepMock = vi.fn(() => null);

const makeSut = () => {
  const steps = [
    { label: "Informações", concluded: true },
    { label: "Jogadores", concluded: false },
    { label: "Regras", concluded: false },
  ];

  render(<Stepper steps={steps} current={1} goToStep={goToStepMock} />);

  return {
    steps,
  };
};

describe("<Stepper />", () => {
  beforeEach(() => vi.resetAllMocks());

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

  it("Should call goToStep with correct value on step click", () => {
    const { steps } = makeSut();

    const step = screen.getByText(steps[0].label).closest("li");

    act(() => {
      step?.click();
    });

    expect(goToStepMock).toHaveBeenCalledWith(0);
  });

  it("Should not call goToStep if step clicked is equal the current step", () => {
    const { steps } = makeSut();

    const step = screen.getByText(steps[1].label).closest("li");

    act(() => {
      step?.click();
    });

    expect(goToStepMock).not.toHaveBeenCalled();
  });

  it("Should not call goToStep if step clicked is greater the current step", () => {
    const { steps } = makeSut();

    const step = screen.getByText(steps[2].label).closest("li");

    act(() => {
      step?.click();
    });

    expect(goToStepMock).not.toHaveBeenCalled();
  });
});

import { act, fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import RulesForm from "./RulesForm";

const onSubmit = vi.fn(() => null);

const prevStep = vi.fn(() => null);

const makeSut = () => {
  render(<RulesForm onSubmit={onSubmit} prevStep={prevStep} />);
};

describe("<RulesForm />", () => {
  it("Should submit with empty form", async () => {
    makeSut();

    await act(() => {
      fireEvent.submit(screen.getByRole("button", { name: /concluir/i }));
    });

    expect(onSubmit).toBeCalled();
  });

  it("Should submit with filled form", async () => {
    makeSut();

    act(() => {
      fireEvent.input(screen.getByLabelText(/regras/i), {
        target: {
          value: "Payment should be concluded before the start of the game",
        },
      });
    });

    await act(() => {
      fireEvent.submit(screen.getByRole("button", { name: /concluir/i }));
    });

    expect(onSubmit).toBeCalled();
  });
});

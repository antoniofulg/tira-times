import { rulesFormInitialValues } from "@/validation/schemas/match-info";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import RulesForm from "./RulesForm";

const onSubmit = vi.fn(() => null);

const prevStep = vi.fn(() => null);

const makeSut = () => {
  render(
    <RulesForm
      onSubmit={onSubmit}
      prevStep={prevStep}
      defaultValues={rulesFormInitialValues}
    />
  );
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

  it("Should call prevStep on 'Voltar' button click", () => {
    makeSut();

    act(() => {
      screen.getByRole("button", { name: /voltar/i }).click();
    });

    expect(prevStep).toBeCalled();
  });
});

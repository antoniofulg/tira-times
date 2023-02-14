import { act, fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import PlayersForm from "./PlayersForm";

const onSubmit = vi.fn(() => null);

const prevStep = vi.fn(() => null);

const makeSut = () => {
  render(<PlayersForm onSubmit={onSubmit} prevStep={prevStep} />);
};

describe("<PlayersForm />", () => {
  beforeEach(() => vi.resetAllMocks());

  it("Should not submit with empty form", async () => {
    makeSut();

    await act(() => {
      fireEvent.submit(screen.getByRole("button", { name: /próximo/i }));
    });

    expect(onSubmit).not.toBeCalled();
  });

  it("Should submit with filled form", async () => {
    makeSut();

    act(() => {
      fireEvent.input(screen.getByLabelText(/jogadores/i), {
        target: {
          value: "16",
        },
      });
      fireEvent.input(screen.getByLabelText(/suplentes/i), {
        target: {
          value: "4",
        },
      });
    });

    await act(() => {
      fireEvent.submit(screen.getByRole("button", { name: /próximo/i }));
    });

    expect(onSubmit).toBeCalled();
  });

  it("Should submit even if substitutes is empty", async () => {
    makeSut();

    act(() => {
      fireEvent.input(screen.getByLabelText(/jogadores/i), {
        target: {
          value: "16",
        },
      });
    });

    await act(() => {
      fireEvent.submit(screen.getByRole("button", { name: /próximo/i }));
    });

    expect(onSubmit).toBeCalled();
  });

  it("Should not submit if players is less than 4", async () => {
    makeSut();

    act(() => {
      fireEvent.input(screen.getByLabelText(/jogadores/i), {
        target: {
          value: "3",
        },
      });
    });

    await act(() => {
      fireEvent.submit(screen.getByRole("button", { name: /próximo/i }));
    });

    expect(onSubmit).not.toBeCalled();
  });

  it("Should not submit if substitutes has a negative value", async () => {
    makeSut();

    await act(() => {
      fireEvent.input(screen.getByLabelText(/jogadores/i), {
        target: {
          value: "8",
        },
      });
      fireEvent.input(screen.getByLabelText(/suplentes/i), {
        target: {
          value: "-2",
        },
      });
    });

    await act(() => {
      fireEvent.submit(screen.getByRole("button", { name: /próximo/i }));
    });

    expect(onSubmit).not.toBeCalled();
  });
});

import { act, fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import {
  emptySimpleList,
  filledSimpleList,
  filledStyledList,
} from "@/pages/PasteList/consts/list-mock";
import PasteListForm from "./PasteListForm";

const onSubmit = vi.fn(() => null);

const makeSut = () => {
  render(<PasteListForm onSubmit={onSubmit} />);
};

describe("<PasteListForm />", () => {
  beforeEach(() => vi.resetAllMocks());

  it("Should not submit with empty form", async () => {
    makeSut();

    await act(() => {
      fireEvent.submit(
        screen.getByRole("button", { name: /Importar jogadores/i })
      );
    });

    expect(onSubmit).not.toBeCalled();
  });

  it("Should not submit when a simple list is provided without players", async () => {
    makeSut();

    act(() => {
      fireEvent.input(screen.getByLabelText(/lista do racha/i), {
        target: {
          value: emptySimpleList,
        },
      });
    });

    await act(() => {
      fireEvent.submit(
        screen.getByRole("button", { name: /Importar jogadores/i })
      );
    });

    expect(onSubmit).not.toBeCalled();
  });

  it("Should submit when a simple list is provided with players", async () => {
    makeSut();

    act(() => {
      fireEvent.input(screen.getByLabelText(/lista do racha/i), {
        target: {
          value: filledSimpleList,
        },
      });
    });

    await act(() => {
      fireEvent.submit(
        screen.getByRole("button", { name: /Importar jogadores/i })
      );
    });

    expect(onSubmit).toBeCalled();
  });

  it("Should submit when a styled list is provided with players", async () => {
    makeSut();

    act(() => {
      fireEvent.input(screen.getByLabelText(/lista do racha/i), {
        target: {
          value: filledStyledList,
        },
      });
    });

    await act(() => {
      fireEvent.submit(
        screen.getByRole("button", { name: /Importar jogadores/i })
      );
    });

    expect(onSubmit).toBeCalled();
  });
});

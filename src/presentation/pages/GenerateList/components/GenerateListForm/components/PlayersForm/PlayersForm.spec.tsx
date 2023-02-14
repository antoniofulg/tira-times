import { act, fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import PlayersForm from "./PlayersForm";

const submitMethod = vi.fn(() => {
  return undefined;
});

describe("<PlayersForm />", () => {
  beforeEach(() => vi.resetAllMocks());

  it("Should not submit with empty form", async () => {
    render(<PlayersForm onSubmit={submitMethod} />);

    await act(() => {
      fireEvent.submit(screen.getByRole("button", { name: /próximo/i }));
    });

    expect(submitMethod).not.toBeCalled();
  });

  it("Should submit with filled form", async () => {
    render(<PlayersForm onSubmit={submitMethod} />);

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

    expect(submitMethod).toBeCalled();
  });

  it("Should submit even if substitutes is empty", async () => {
    render(<PlayersForm onSubmit={submitMethod} />);

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

    expect(submitMethod).toBeCalled();
  });

  it("Should not submit if players is less than 4", async () => {
    render(<PlayersForm onSubmit={submitMethod} />);

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

    expect(submitMethod).not.toBeCalled();
  });

  it("Should not submit if substitutes has a negative value", async () => {
    render(<PlayersForm onSubmit={submitMethod} />);

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

    expect(submitMethod).not.toBeCalled();
  });
});

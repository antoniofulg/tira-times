import { act, fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import RulesForm from "./RulesForm";

const submitMethod = vi.fn(() => {
  return undefined;
});

describe("<RulesForm />", () => {
  it("Should submit with empty form", async () => {
    render(<RulesForm onSubmit={submitMethod} />);

    await act(() => {
      fireEvent.submit(screen.getByRole("button", { name: /concluir/i }));
    });

    expect(submitMethod).toBeCalled();
  });

  it("Should submit with filled form", async () => {
    render(<RulesForm onSubmit={submitMethod} />);

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

    expect(submitMethod).toBeCalled();
  });
});

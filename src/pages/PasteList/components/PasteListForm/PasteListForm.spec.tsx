import { act, fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import PasteListForm from "./PasteListForm";

const onSubmit = vi.fn(() => null);

const makeSut = () => {
  render(<PasteListForm onSubmit={onSubmit} />);
};

describe("<PasteListForm />", () => {
  it("Should submit with empty form", async () => {
    makeSut();

    await act(() => {
      fireEvent.submit(
        screen.getByRole("button", { name: /Importar jogadores/i })
      );
    });

    expect(onSubmit).toBeCalled();
  });
});

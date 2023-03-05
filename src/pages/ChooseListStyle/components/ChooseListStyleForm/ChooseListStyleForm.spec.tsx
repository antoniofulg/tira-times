import { act, fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { chooseListStyleInitialValues } from "@/pages/ChooseListStyle/schemas/choose-list-style-schemas";
import ChooseListStyleForm from "./ChooseListStyleForm";

const onSubmit = vi.fn(() => null);

const makeSut = () => {
  render(
    <ChooseListStyleForm
      onSubmit={onSubmit}
      defaultValues={chooseListStyleInitialValues}
    />
  );
};

describe("<ChooseListStyleForm />", () => {
  it("Should not submit if form is not filled", async () => {
    makeSut();

    await act(() => {
      fireEvent.submit(screen.getByRole("button"));
    });

    expect(onSubmit).not.toBeCalled();
  });

  it("Should submit when simple option is selected", async () => {
    makeSut();

    await act(() => {
      screen.getAllByRole("radio")[0].click();

      fireEvent.submit(screen.getByRole("button"));
    });

    expect(onSubmit).toBeCalled();
  });

  it("Should submit when styled option is selected", async () => {
    makeSut();

    await act(() => {
      screen.getAllByRole("radio")[1].click();

      fireEvent.submit(screen.getByRole("button"));
    });

    expect(onSubmit).toBeCalled();
  });
});

import { act, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import ChooseListStyleForm from "./ChooseListStyleForm";
import { MatchInfo } from "../../schemas/match-info-schemas";

const onSubmit = vi.fn(() => null);

const matchInfo = {} as MatchInfo;

const makeSut = () => {
  render(<ChooseListStyleForm matchInfo={matchInfo} onSubmit={onSubmit} />);
};

describe("<ChooseListStyleForm />", () => {
  it("Should submit when simple option is selected", async () => {
    makeSut();

    await act(() => {
      screen.getAllByRole("button")[0].click();
    });

    expect(onSubmit).toBeCalled();
  });

  it("Should submit when styled option is selected", async () => {
    makeSut();

    await act(() => {
      screen.getAllByRole("button")[1].click();
    });

    expect(onSubmit).toBeCalled();
  });
});

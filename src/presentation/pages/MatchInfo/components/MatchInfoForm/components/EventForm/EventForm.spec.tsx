import { eventFormInitialValues } from "@/presentation/pages/MatchInfo/schemas/match-info-schemas";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import BasicInfoForm from "./EventForm";

const submitMethod = vi.fn(() => {
  return undefined;
});

const makeSut = () => {
  render(
    <BasicInfoForm
      onSubmit={submitMethod}
      defaultValues={eventFormInitialValues}
    />
  );
};

describe("<BasicInfoForm />", () => {
  beforeEach(() => vi.resetAllMocks());

  it("Should not submit with empty form", async () => {
    makeSut();

    await act(() => {
      fireEvent.submit(screen.getByRole("button", { name: /próximo/i }));
    });

    expect(submitMethod).not.toBeCalled();
  });

  it("Should submit when form is correctly filled", async () => {
    makeSut();

    act(() => {
      fireEvent.input(screen.getByLabelText(/nome do racha/i), {
        target: {
          value: "Event Name",
        },
      });
      fireEvent.input(screen.getByLabelText(/local/i), {
        target: {
          value: "Place",
        },
      });
      fireEvent.input(screen.getByLabelText(/data/i), {
        target: {
          value: "2023-02-17",
        },
      });
      fireEvent.input(screen.getByLabelText(/horário/i), {
        target: {
          value: "20:00",
        },
      });
      fireEvent.input(screen.getByLabelText(/duração/i), {
        target: {
          value: "60",
        },
      });
    });

    await act(() => {
      fireEvent.submit(screen.getByRole("button"));
    });

    expect(submitMethod).toBeCalled();
  });

  it("Should submit even if duration is empty", async () => {
    makeSut();

    act(() => {
      fireEvent.input(screen.getByLabelText(/nome do racha/i), {
        target: {
          value: "Event Name",
        },
      });
      fireEvent.input(screen.getByLabelText(/local/i), {
        target: {
          value: "Place",
        },
      });
      fireEvent.input(screen.getByLabelText(/data/i), {
        target: {
          value: "2023-02-17",
        },
      });
      fireEvent.input(screen.getByLabelText(/horário/i), {
        target: {
          value: "20:00",
        },
      });
    });

    await act(() => {
      fireEvent.submit(screen.getByRole("button"));
    });

    expect(submitMethod).toBeCalled();
  });

  it("Should not submit if duration is a negative value", async () => {
    makeSut();

    act(() => {
      fireEvent.input(screen.getByLabelText(/nome do racha/i), {
        target: {
          value: "Event Name",
        },
      });
      fireEvent.input(screen.getByLabelText(/local/i), {
        target: {
          value: "Place",
        },
      });
      fireEvent.input(screen.getByLabelText(/data/i), {
        target: {
          value: "2023-02-17",
        },
      });
      fireEvent.input(screen.getByLabelText(/horário/i), {
        target: {
          value: "20:00",
        },
      });
      fireEvent.input(screen.getByLabelText(/duração/i), {
        target: {
          value: "-20",
        },
      });
    });

    await act(() => {
      fireEvent.submit(screen.getByRole("button"));
    });

    expect(submitMethod).not.toBeCalled();
  });
});

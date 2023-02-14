import { act, fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import BasicInfoForm from "./BasicInfoForm";

const submitMethod = vi.fn(() => {
  return undefined;
});

describe("<BasicInfoForm />", () => {
  beforeEach(() => vi.resetAllMocks());

  it("Should not submit with empty form", async () => {
    render(<BasicInfoForm onSubmit={submitMethod} />);

    await act(() => {
      fireEvent.submit(screen.getByRole("button", { name: /próximo/i }));
    });

    expect(submitMethod).not.toBeCalled();
  });

  it("Should submit when form is correctly filled", async () => {
    render(<BasicInfoForm onSubmit={submitMethod} />);

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
    render(<BasicInfoForm onSubmit={submitMethod} />);

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
    render(<BasicInfoForm onSubmit={submitMethod} />);

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

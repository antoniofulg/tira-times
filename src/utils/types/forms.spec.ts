import { describe, it } from "vitest";
import { fieldTypeChecker, objectTypeChecker, typeChecker } from "./forms";

describe("utils/types/forms.ts -> typeChecker", () => {
  type Data = { field: boolean };

  const makeSut = (): Data => ({ field: true });

  it("Should return true when a field exists in the provided data", () => {
    const data = makeSut();

    expect(typeChecker<Data>(data, "field")).toBe(true);
  });

  it("Should return false when a field does not exists in the provided data", () => {
    const data = makeSut();

    expect(typeChecker<Data>(data, "invalid")).toBe(false);
  });
});

describe("utils/types/forms.ts -> objectTypeChecker", () => {
  type Data = { field: boolean; field2: string; field3: number };

  const makeSut = (
    data: { [keys: string]: unknown } = {
      field: false,
      field2: "testing",
      field3: 20,
    }
  ) => {
    const object: Data = { field: true, field2: "", field3: 0 };

    return { object, data };
  };

  it("Should return true when a all field of object exists in the provided data", () => {
    const { data, object } = makeSut();

    expect(objectTypeChecker(data, object)).toBe(true);
  });

  it("Should return false when some field of object does not exists in the provided data", () => {
    const { data, object } = makeSut({ field: true, field2: "" });

    expect(objectTypeChecker(data, object)).toBe(false);
  });

  it("Should return true even if some field in provided data does not exists in the object", () => {
    const { data, object } = makeSut({
      field: true,
      field2: "",
      field3: 0,
      field4: "",
    });

    expect(objectTypeChecker(data, object)).toBe(true);
  });
});

describe("utils/types/forms.ts -> fieldTypeChecker", () => {
  it("Should return true when field has the same type between provided objects", () => {
    expect(fieldTypeChecker({ field: true }, { field: false }, "field")).toBe(
      true
    );
  });

  it("Should return false when field has a different type between provided objects", () => {
    expect(fieldTypeChecker({ field: true }, { field: 0 }, "field")).toBe(
      false
    );
  });
});

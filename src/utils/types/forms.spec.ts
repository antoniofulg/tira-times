import { describe, it } from "vitest";
import { typeChecker } from "./forms";

describe("utils/types/forms.ts -> typeChecker", () => {
  it("Should return true when a field exists in the data provided", () => {
    type Data = { field: boolean };

    const data: Data = { field: true };

    expect(typeChecker<Data>(data, "field")).toBe(true);
  });

  it("Should return false when a field does not exists in the data provided", () => {
    type Data = { field: boolean };

    const data: Data = { field: true };

    expect(typeChecker<Data>(data, "invalid")).toBe(false);
  });
});

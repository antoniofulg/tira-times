import { intTransformer, updateFields } from "./forms";

describe("utils/transformation/forms.ts -> intTransformer", () => {
  it("Should return 0 when an unparsable value is provided", () => {
    expect(intTransformer("unparsable")).toBe(0);
  });

  it("Should return 0 when an empty value is provided", () => {
    expect(intTransformer("")).toBe(0);
  });

  it("Should return the parsed value when a numeric string is provided", () => {
    expect(intTransformer("2")).toBe(2);
  });
});

describe("utils/transformation/forms.ts -> updateFields", () => {
  it("Should return common fields of initialValues with values of updatedValues", () => {
    const initialValues = { field1: "", field2: "" };
    const updatedValues = {
      field1: "field1",
      field2: "field2",
      field3: "field3",
    };
    expect(updateFields(initialValues, updatedValues)).toEqual({
      field1: updatedValues.field1,
      field2: updatedValues.field2,
    });
  });

  it("Should return and empty string if fields of initialValues does not exists in updatedValues", () => {
    const initialValues = { field1: "", field2: "" };
    const updatedValues = { field1: "field1" };
    expect(updateFields(initialValues, updatedValues)).toEqual({
      ...updatedValues,
      field2: "",
    });
  });

  it("Should return the value of updatedValues even if the boolean cast of value is false", () => {
    const initialValues = { field1: "", field2: 0 };
    const updatedValues = {
      field1: "field1",
      field2: 0,
    };
    expect(updateFields(initialValues, updatedValues)).toEqual({
      field1: updatedValues.field1,
      field2: updatedValues.field2,
    });
  });
});

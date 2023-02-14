import { describe, it } from "vitest";
import { intTransformer } from "./forms";

describe("utils/math.ts", () => {
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

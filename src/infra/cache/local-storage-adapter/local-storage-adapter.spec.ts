import { LocalStorageAdapter } from "./local-storage-adapter";
import { faker } from "@faker-js/faker";
import { vi } from "vitest";

const makeSut = () => new LocalStorageAdapter();

vi.spyOn(Storage.prototype, "setItem").mockImplementationOnce(
  () => Promise<void>
);

vi.spyOn(Storage.prototype, "removeItem").mockImplementationOnce(
  () => Promise<void>
);

describe("LocalStorageAdapter", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Should call localStorage.setItem with correct values", async () => {
    const sut = makeSut();

    const key = faker.database.column();
    const value = faker.random.words();

    sut.set(key, value);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(value)
    );
  });

  test("Should call localStorage.removeItem if value is null", async () => {
    const sut = makeSut();
    const key = faker.database.column();

    sut.set(key, undefined);

    expect(localStorage.removeItem).toHaveBeenCalledWith(key);
  });

  test("Should call localStorage.getItem with correct value", async () => {
    const sut = makeSut();
    const key = faker.database.column();
    const value = faker.random.words();
    const getItemSpy = vi
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValueOnce(JSON.stringify(value));

    const obj = sut.get(key);

    expect(obj).toEqual(value);
    expect(getItemSpy).toHaveBeenCalledWith(key);
  });
});

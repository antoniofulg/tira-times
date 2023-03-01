import { ObjectExtender } from "@/shared/types";

export const typeChecker = <T extends ObjectExtender>(
  data: ObjectExtender,
  field: string
): data is T => {
  return (data as T)[field] !== undefined;
};

export const objectTypeChecker = <T extends ObjectExtender>(
  data: ObjectExtender,
  object: T
): data is T => {
  const keys = Object.keys(object);
  return keys.every((key) => fieldTypeChecker<T>(data, object, key));
};

export const fieldTypeChecker = <T extends ObjectExtender>(
  data: ObjectExtender,
  object: T,
  field: string
): data is T => typeof data[field] === typeof object[field];

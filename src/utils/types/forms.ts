type ObjectExtender = { [keys: string]: unknown };

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
  return keys.every((key) => typeChecker<T>(data, key));
};

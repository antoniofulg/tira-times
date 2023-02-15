import { ObjectExtender } from "@/utils/types";

export const intTransformer = (value: string) => {
  const parsedValue = parseInt(value);
  if (isNaN(parsedValue)) return 0;
  return parsedValue;
};

export const updateFields = <T extends ObjectExtender>(
  initialValues: ObjectExtender,
  updatedValues: ObjectExtender
): T => {
  const fields = Object.keys(initialValues);
  fields.forEach(
    (field) => (initialValues[field] = updatedValues[field] || "")
  );
  return initialValues as T;
};

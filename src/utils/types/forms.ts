export const typeChecker = <T extends { [keys: string]: unknown }>(
  data: { [keys: string]: unknown },
  field: string
): data is T => {
  return (data as T)[field] !== undefined;
};

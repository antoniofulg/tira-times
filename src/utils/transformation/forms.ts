export const intTransformer = (value: string) => {
  const parsedValue = parseInt(value);
  if (isNaN(parsedValue)) return 0;
  return parsedValue;
};

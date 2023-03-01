export const getStorageItem = <T>(key: string): T | null => {
  const data = localStorage.getItem(key);
  if (data === null) return null;
  return JSON.parse(data) as T;
};

export const setStorageItem = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeStorageItem = (key: string) => {
  localStorage.removeItem(key);
};

export const clearStorage = () => {
  localStorage.clear();
};

export const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isValidLength = (value: string, max: number) =>
  value.trim().length <= max;

export const isValidWordCount = (value: string, max: number) =>
  value.trim().split(/\s+/).filter(Boolean).length <= max;

export const isNonEmpty = (val: string) => val.trim() !== "";

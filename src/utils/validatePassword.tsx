export const validatePassword = (value: string) => {
  return value.length >= 4 && value.length <= 10;
}
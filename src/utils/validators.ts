import formatStringByPattern from "format-string-by-pattern";


export const validateEmail = (value: string): boolean => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(value))
    return true

  return false
}

export const validatePassword = (value: string): boolean => {
  const lettersAndnumberRegex = /^(?=.*\d)(?=.*[a-z])/

  if (!lettersAndnumberRegex.test(value))
    return true

  return false
}

export const formatPhone = (value: string): string => {
  const val = String(value).replace(/\D/g, '');
  let pattern = '(54) 9 9999-9999';

  return formatStringByPattern(pattern as string, val);
}

export const formatCpf = (value: string): string => {
  const val = String(value).replace(/\D/g, '');
  let pattern = '999.999.999-99';

  return formatStringByPattern(pattern as string, val);
}

export const formatBornDate = (value: string): string => {
  const val = String(value).replace(/\D/g, '');
  let pattern = '9999-99-99';

  return formatStringByPattern(pattern as string, val);
}
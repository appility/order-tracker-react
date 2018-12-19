
export function isEmpty(string) {
  return (string.length === 0 || !string.trim());
};

export function isValidPostcode(string) {
  let regex = RegExp('^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$')
  return regex.test(string)
}

export function isInvalidPostcode(string) {
  return !isValidPostcode(string)
}
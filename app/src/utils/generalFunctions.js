export function getDigitsSum(number) {
  let value = number;
  let sum = 0;

  while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
  }
  return sum;
}

export function getDigitsProduct(number) {
  let value = number;
  let product = 1;

  while (value) {
    const digit = value % 10;
    if (value) product *= digit;
    value = Math.floor(value / 10);
  }
  return product;
}

export function getDivisionRest(number) {
  return number % 7;
}

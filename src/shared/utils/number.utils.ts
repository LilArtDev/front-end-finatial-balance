export function toCurrency(
  value = 0,
  currencySymbol = "$",
  decimalSeparator = ".",
  thousandsSeparator = ","
) {
  let num = value.valueOf();

  if (isNaN(num) || num === null || num === undefined) {
    throw new Error("Invalid number");
  }

  let [integerPart, decimalPart] = num.toFixed(2).toString().split(".");

  integerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    thousandsSeparator
  );

  return currencySymbol + integerPart + decimalSeparator + decimalPart;
}

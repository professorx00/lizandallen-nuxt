let formatting_options = {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
};
export const formatDollars = (price) => {
  let dollarString = new Intl.NumberFormat("en-US", formatting_options);
  let finalString = dollarString.format(price);
  return finalString;
};

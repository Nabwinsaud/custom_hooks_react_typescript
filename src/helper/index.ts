export const calculateTime = (time: number): string => {
  const hours: number = Math.floor(time / 60);
  const mins: number = time % 60;
  return `${hours}h ${mins}m`;
};

// currency conveter

export const convertCurrency = (amount: number): string => {
  const formatter: Intl.NumberFormat = new Intl.NumberFormat("en-NP", {
    style: "currency",
    currency: "NPR",
    minimumFractionDigits: 2,
  });
  return formatter.format(amount);
};

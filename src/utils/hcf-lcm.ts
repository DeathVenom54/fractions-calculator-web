export const hcf = (num1: number, num2: number): number => {
  let larger = num1 > num2 ? num1 : num2;
  let smaller = num1 < num2 ? num1 : num2;

  while (larger % smaller !== 0) {
    const rem = larger % smaller;
    larger = smaller;
    smaller = rem;
  }
  return smaller;
};

export const lcm = (num1: number, num2: number): number => {
  return (num1 * num2) / hcf(num1, num2);
};

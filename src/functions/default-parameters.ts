const nextYearSalary = (currentSalary: number, rate: number = 1.1): number =>
  currentSalary * rate;

console.log(nextYearSalary(1000));

export {};

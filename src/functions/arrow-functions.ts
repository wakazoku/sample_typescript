let BMI: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

console.log(BMI(1.77, 95.5));

export {};

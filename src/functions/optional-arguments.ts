let BMI: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) console.log({ bmi });
  return bmi;
};

BMI(1.77, 95, true);

export {};

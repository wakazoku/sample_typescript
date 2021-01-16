function BMI(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(BMI(1.77, 95.5));

export {};

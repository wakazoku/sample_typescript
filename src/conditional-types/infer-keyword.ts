function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));

// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type ReturnTypeFromAdd = ReturnType<typeof add>;

// infer
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

export {};

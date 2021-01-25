const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('taro', 22);

// 引数の型を取り出す
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
type Profile = Parameters<typeof debugProfile>; // type Profile = [string, number]

const profile: Profile = ['jiro', 44];
debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

export {};

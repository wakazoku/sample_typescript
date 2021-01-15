type Mojiretsu = string;

const foo: string = '文字列';
const bar: Mojiretsu = '文字列';

const example1 = {
  name: 'taro',
  age: 23,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'jiro',
  age: 21,
};

// 型を流用することができる
// 間違いが発生しづらい、変化に追従できるので便利
type Profile2 = typeof example1;

export {};

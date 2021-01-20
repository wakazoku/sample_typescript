// const echo1 = (arg: number): number => {
//   return arg;
// };

// // 型違いで新たな関数を作成するのはだるい
// const echo2 = (arg: string): string => {
//   return arg;
// };

const echo = <T>(arg: T): T => {
  return arg;
};

// ジェネリクスに型を与えれば汎用的な関数が作れる
console.log(echo<number>(100));
console.log(echo<string>('Hello'));
console.log(echo<boolean>(true));

// クラスもジェネリクス使える
// class Mirror {
//   constructor(public value: number) {}
//   echo(): number {
//     return this.value;
//   }
// }

class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello, generics').echo());
console.log(new Mirror<boolean>(false).echo());

export {};

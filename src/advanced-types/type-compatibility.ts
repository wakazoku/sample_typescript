let fooCompatible: any;
let barCompatible: string = 'Typescript';

console.log(typeof fooCompatible); // undefined
fooCompatible = barCompatible; // 代入可能
console.log(typeof fooCompatible); // string

let fooInCompatible: string;
let barInCompatible: number = 1;
// fooInCompatible = barInCompatible; // 型に互換性がない

// 互換性あり
let fooString: string;
let barString: string = 'string';
fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1987 = 1987;
fooNumber = fooNumberLiteral;

// PersonとAnimalは関係がないが型の互換性がある
interface Animal {
  age: number;
  // name: string; // メンバーの過不足、型の不一致があるとコンパイルエラーになる
}

class Person {
  constructor(public age: number) {}
}

let me: Animal;
me = new Person(34);

export {};

class Person {
  name: string;
  age: number;

  // コンストラクターは戻り値の型は不要（言語仕様で決まっている）
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile = (): string => {
    return `name:${this.name}, age:${this.age}`;
  };
}
let taro = new Person('taro', 30);
console.log(taro.profile());
// let hanako = new Person();

export {};

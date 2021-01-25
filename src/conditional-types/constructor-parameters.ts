class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('taro', 22);
console.log(taro);

type PersonType = typeof Person;
// type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
type Profile = ConstructorParameters<PersonType>; // type Profile = [string, number]

const profile: Profile = ['jiro', 19];
const jiro = new Person(...profile);
console.log({ jiro });

type MyConstructorParameters<
  T extends new (...args: any) => any
> = T extends new (...args: infer P) => any ? P : never;

export {};

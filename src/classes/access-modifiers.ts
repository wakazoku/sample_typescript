class Person {
  public name: string; // publicは書いても書かなくても同じ
  private age: number;
  protected nationality: string; // 子孫クラスから参照可

  // コンストラクターは戻り値の型は不要（言語仕様で決まっている）
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile = (): string => {
    return `name:${this.name}, age:${this.age}`;
  };
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile = (): string => {
    return `name:${this.name}, age:ageはprivateなので参照不可, nationality:${this.nationality}`;
  };
}

let taro = new Person('taro', 30, 'Japan');
console.log(taro.name);
// console.log(taro.age); // privateプロパティには外部からアクセス不可
console.log(taro.profile()); // クラス内部ならprivateプロパティにアクセス可能
// let hanako = new Person();

let jiro = new Android('taro', 30, 'America');
console.log(jiro.profile());

export {};

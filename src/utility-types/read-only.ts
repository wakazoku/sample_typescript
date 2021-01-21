type Profile = {
  name: string;
  age: number;
};
const me: Profile = {
  name: 'taro',
  age: 22,
};
me.age++;
console.log(me);

// 全てのプロパティがreadonlyになる
type PersonalDataType = Readonly<Profile>;
const friend: PersonalDataType = {
  name: 'shigeru',
  age: 24,
};
// friend.age++ // readonlyなので不可

export {};

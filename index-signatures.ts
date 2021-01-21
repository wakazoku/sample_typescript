// index signatureの書き方
// { [index: typeForIndex] : typeForValue }
interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Jior', underTwenty: false };

// 様々なプロパティが設定できるようなった
profile.name = 'Taro';
profile.age = 20;
profile.nationality = 'Japan';

export {};

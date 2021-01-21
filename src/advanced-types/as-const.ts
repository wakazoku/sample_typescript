let name = 'Taro';
name = 'Jiro';

let nickName = 'Saburo' as const;
// nickName = 'Shiro';  // 文字列リテラル型に再代入は不可

let profile = {
  name: 'takeshi',
  height: 177,
};

profile.name = 'hiroshi';
profile.height = 198;

let profile2 = {
  name: 'takeshi2',
  height: 178,
} as const;

// profile2.name = 'hiroshi'; // ネストされているプロパティ全てがreadonlyになる
// profile2.height = 198; // ネストされているプロパティ全てがreadonlyになる

export {};

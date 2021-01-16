const func = (): number => 43;

let numberAny: any = func();

// 暫定的に型をつけたい場合
let numberUnknown: unknown = func();

let sumAny = numberAny + 10;

// 型ガード
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}

export {};

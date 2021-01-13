export {}; // module化しないとグローバル空間になる
let name = "TypeScript" // 上記exportすることで変数名が重複することを防ぐ

let isFinished: boolean = true; //型注釈・型アノテーション
// isFinished = 1;
console.log({ isFinished });

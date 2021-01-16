// シグネチャー
function double(value: number): number;
function double(value: string): string;

// 実態(オーバーロード)
// anyだけどシグネチャを宣言しているので
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') return value * 2;
  else if (typeof value === 'string') return value + value;
  // else throw 'numberかstringを入れてくださいまし'; // 型制約があるので不要
}

// function double(value: string):string {
//   return value + value;
// }

console.log(double(100));
console.log(double('Go '));
// console.log(double(true)); // 型制約でコンパイルエラーになる

export {};

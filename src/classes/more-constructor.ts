class Person {
  // アクセス修飾子をコンストラクタメソッドの引数につけると
  // 自動的にメンバ変数として初期化してくれる
  constructor(public name: string, protected age: number) {}
}

const me = new Person('taro', 26);
console.log(me);

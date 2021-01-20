abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry(): string {
    return 'ライオン「がおー」';
  }
}

// cry()を実装しないとエラーになる
// class Tiger extends Animal {
//   walk():string{
//     return "虎が歩きます"
//   }
// }

export {};

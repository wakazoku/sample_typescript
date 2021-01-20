class Me {
  static isProgrammer: boolean = true;
  static firstName: string = '太郎';
  static lastName: string = '田中';

  static work() {
    return `I am ${this.firstName}, now studying TypeScript`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer); // 静的メンバーへのアクセスは不可
console.log(Me.isProgrammer); // 静的メンバーへのアクセスはインスタンス化不要
console.log(Me.work());

export {};

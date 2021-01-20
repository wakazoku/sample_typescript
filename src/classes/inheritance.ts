class Animal {
  constructor(public name: string) {}
  run(): string {
    return `${this.name} can run.`;
  }
}

class Lion extends Animal {
  public speed: number;

  constructor(name: string, speed: number) {
    super(name); // 親クラスで初期化
    this.speed = speed; // 子クラスで初期化
  }

  run(): string {
    // const parentMessage = super.run(); // 親クラスのメソッドも呼び出せる
    // console.log({ parentMessage });
    return `${this.name} can run ${this.speed}km.`;
  }
}

let animal = new Animal('アニマル');
console.log(animal.run());

let lion = new Lion('ライオン', 80);
console.log(lion.run());

export {};

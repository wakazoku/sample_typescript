//  フォルダを作るような感覚で命名の衝突を防ぐ

namespace Japanese {
  // 外からアクセスできるようにexportが必要
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('太郎');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('大阪太郎');
console.log(me.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);

export {};

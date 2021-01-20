class VisaCard {
  constructor(public readonly owner: string) {} // readonlyの場合はpublicを書く必要はない
}
let myVisaCard = new VisaCard('太郎');
console.log(myVisaCard.owner);
// myVisaCard.owner('ベーコン'); // 読み取り専用のため変更不可

export {};

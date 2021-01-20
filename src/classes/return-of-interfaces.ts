class Mage {}
class Priest {}
// class Taro extends Mage, Priest {} // 単一継承なので複数は無理

interface Warrior {
  attack(): void; // シグネチャ（メソッドの形）
}
interface Sage {
  ionazun(): void;
}
class Jiro implements Warrior, Sage {
  // インターフェースは複数実装可能
  attack(): void {
    console.log('攻撃！');
  }
  ionazun(): void {
    console.log('イオナズン！');
  }
}

const jiro = new Jiro();
jiro.attack();
jiro.ionazun();

export {};

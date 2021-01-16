const error = (message: string): never => {
  throw new Error(message);
};

try {
  error('test');
} catch (e) {
  console.log(e);
}

// void型は呼び元に戻ってくる
// never型は呼び元に戻ってこない
// let foo: void = undefined;
// let bar: never = undefined;
// let bar: never = error('never型だけは入る');

export {};

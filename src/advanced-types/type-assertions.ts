let name: any = '太郎';

let length1 = name.length as number; // 型assertion
let length2 = (name as string).length; // 型assertion
let length3 = (<string>name).length; // 型assertion(jsx記法と混同するので非推奨)

console.log(length1);

export {};

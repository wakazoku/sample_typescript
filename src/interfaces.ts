type ObjectType = {
  name: string;
  age: number;
};

let object: ObjectType = {
  name: 'Taro',
  age: 20,
};

interface ObjectInterface {
  name: string;
  age: number;
}

let object2: ObjectInterface = {
  name: 'Jiro',
  age: 18,
};

export {};

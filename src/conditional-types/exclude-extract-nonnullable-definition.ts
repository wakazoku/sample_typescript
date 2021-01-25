type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// exclude
type FunctionType = Exclude<SomeTypes, string | number>; // string | numberが除外される
// type Exclude<T, U> = T extends U ? never : T;
type MyExclude =
  | (string extends string | number ? never : string) // never
  | (number extends string | number ? never : number) // never
  | (DebugType extends string | number ? never : DebugType); // DebugType
type MyFunctionType = MyExclude;

// extract
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>; // DebugType型だけ取り出す

// non nullable
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>; // null | undefinedが除外される

export {};

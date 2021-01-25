type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// exclude
type FunctionType = Exclude<SomeTypes, string | number>; // string | numberが除外される
type NonFunctionType = Exclude<SomeTypes, DebugType>; // DebugType型が除外される
type TypeExcludingFunction = Exclude<SomeTypes, Function>; // 関数全般を除外する

// extract
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>; // DebugType型だけ取り出す
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>; // string | numberを取り出す
type FunctionTypeByExtractingFunction = Extract<SomeTypes, Function>; // 関数全般を取り出す

// non nullable
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>; // null | undefinedが除外される

export {};

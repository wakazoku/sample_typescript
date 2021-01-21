type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile; // type PropertyTypes = "name" | "age"

// Partialの定義を流用してnullableにしてみる
type Optional<T> = {
  [P in keyof T]?: T[P] | null;
};
type OptionalProfile = Optional<Profile>;
// type OptionalProfile = {
//   name?: string | null | undefined;
//   age?: number | null | undefined;
// }

export {};

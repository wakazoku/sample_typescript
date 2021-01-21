type ProfileRequiredProperties = {
  name: string;
  age: number;
  zipCode: number
};

// あまりよくないやり方
type ProfileOptionalProperties = {
  name?: string;
  age?: number;
};

// プロパティがoprionalのProfile型が複製される
type PartialType = Partial<ProfileRequiredProperties>;

// プロパティがrequiredのProfile型が複製される
type RequiredType = Required<ProfileOptionalProperties>


export {};

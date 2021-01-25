type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type SmallProfile = Omit<DetailedProfile, 'height'>;

type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>;
type MySmallProfile = MyOmit;

export {};

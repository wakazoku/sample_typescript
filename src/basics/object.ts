// any型とあまり変わらない…
let profile1: object = { name: 'taro' };
profile1 = { birthday: 1988 };

let profile2: {} = { name: 'jiro' };
profile2 = { birthday: 1990 };

let profile3: { name: string; birthday: number } = {
  name: 'saburo',
  birthday: 1993,
};
// profile3 = { sex: 'male' };
profile3 = {
  name: 'saburo2',
  birthday: 1993,
};
profile3.name = 'saburo3';

console.log(profile1);
console.log(profile2);
console.log(profile3);

export {};

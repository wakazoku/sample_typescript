export {};

function returnNoting(): void {
  console.log("I don't return anything");
}

const returnNoting2: () => void = () => {
  console.log("I don't return anything");
};

console.log(returnNoting());

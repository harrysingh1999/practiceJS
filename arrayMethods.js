// Array Methods.................

//1. some(): Checks if at least one element satisfies the callback condition.

const arr = [1, 2, 4];
const result = arr.some((x) => x > 2);
console.log(result);

//2. every(callback): Checks if all elements satisfy the callback condition.

const arr2 = [1, 2, 3];
const result2 = arr.every((item) => item > 1);
console.log(result2);

//3. every(callback): Returns the index of the first element that satisfies the callback, or -1 if none do.

const arr3 = [1, 2, 3, 4];
const index = arr.findIndex((x) => x > 2);
console.log(index);

const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 75 },
];

let value = cart.reduce((acc, curr) => {
  return acc + curr.price;
  
}, 0 );
console.log(value);

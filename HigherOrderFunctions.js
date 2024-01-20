// Without Higher Order function, CallBack Function and Modularity.............
const radius = [3, 1, 2, 4];

const calculateArea = function (arr) {
  const output = arr.map((item, i) => {
    return Math.PI * arr[i] * arr[i];
  });
  return output;
};

console.log(calculateArea(radius));

const caluculateCircumference = function (arr) {
  const output = arr.map((item, i) => {
    return 2 * Math.PI * arr[i];
  });
  return output;
};

console.log(caluculateCircumference(radius));

const caluculateDiameter = function (arr) {
  const output = arr.map((item, i) => {
    return 2 * arr[i];
  });
  return output;
};

console.log(caluculateDiameter(radius));

// Using Higher Order Fucntion and Callback function, to make code More Modular,Readable,Resuable and Scalalble................
// const radius = [3, 1, 2, 4];

// const area = (radius) => {
//   return Math.PI * radius * radius;
// };
// const circumference = (radius) => {
//   return 2 * Math.PI * radius;
// };
// const diameter = (radius) => {
//   return 2 * radius;
// };

// const calculate = (arr, logic) => {
//     const output = arr.map((item, i) => {
//         return logic(arr[i])
//     })
//     return output
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

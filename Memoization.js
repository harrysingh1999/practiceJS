// Memoization.................................

// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// }

// const memoization = (func) => {
//   let cache = {};
//   console.log(cache);
//   return (num) => {
//     if (cache[num]) {
//       console.log("Retrieving Data from Cache");
//       return cache[num];
//     } else {
//       console.log("Calculating data again");
//       let result = func(num);
//       cache[num] = result;
//       return result;
//     }
//   };
// };

// const memoizedFunction = memoization(factorial);

// console.time();
// console.log(memoizedFunction(10));
// console.timeEnd();

// console.time();
// console.log(memoizedFunction(10));
// console.timeEnd();

// Q1. Find the second largest number in an Array.....................

// let arr = [700, 3, 32, 637, 730, 730, 400];

// const findSecondLargestNum = (array) => {
//   let largestNum = array[0];
//   let secondLargestNum = array[0];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > largestNum) {
//       secondLargestNum = largestNum;
//       largestNum = array[i];
//     } else if (array[i] > secondLargestNum && array[i] !== largestNum ) {
//       secondLargestNum = array[i];
//     }
//   }
//   return secondLargestNum;
// };

// console.log(findSecondLargestNum(arr));

// Q2. Find the second lowest number in an Array.....................

// let arr = [14, 22, 32, 35, 132, 453, 31, 10, 18]

// const findSecondLowestNum = (arr) => {
//     let lowestNum = arr[0]
//     let secondLowestNum = arr[0]

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < lowestNum ) {
//             secondLowestNum = lowestNum
//             lowestNum = arr[i]
//         }
//         else if (arr[i] < secondLowestNum && arr[i] !== lowestNum ) {
//             secondLowestNum = arr[i]
//         }
//     }
//     return secondLowestNum
// }

// console.log(findSecondLowestNum(arr));

// Promise.all()..........................

// const jsonPlaceholderURL = "https://jsonplaceholder.typicode.com/posts/1";
// const catFactsURL = "https://cat-fact.herokuapp.com/facts/random?amount=1";

// // Function to fetch data from a single endpoint
// const fetchData = async (url) => {
//   const response = await fetch(url);
//   return response.json();
// };

// Promise.all([fetchData(jsonPlaceholderURL), fetchData(catFactsURL)])
//   .then((output) => console.log("Data from JSONPlaceholder API and Cat Facts API:", output))
//   .catch((error) => console.error("Error fetching data:", error));

// Promise.allSettled()..........................
// Promise.allSettled([fetchData(jsonPlaceholderURL), fetchData(catFactsURL)])
//   .then((output) => console.log("Data from JSONPlaceholder API and Cat Facts API:", output))
//   .catch((error) => console.error("Error fetching data:", error));

// Fibonacci Series..............

const createFibonacciSeries = (num) => {
  const fibonaciSeries = [0, 1];

  for (let i = 2; i < num; i++) {
    fibonaciSeries[i] = fibonaciSeries[i - 1] + fibonaciSeries[i - 2];
  }
  return fibonaciSeries;
};

console.log(createFibonacciSeries(6));

// Q1. Find the second largest number in an Array.....................

let arr = [3, 32, 637, 730, 1000, 730, 400, 4353];

const findSecondLargestNum = (array) => {
  let largestNum = array[0];
  let secondLargestNum = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > largestNum) { 
      secondLargestNum = largestNum; 
      largestNum = array[i];  
    } else if (array[i] > secondLargestNum && array[i] !== largestNum ) {
      secondLargestNum = array[i];
    }
  }
  return secondLargestNum;
};

console.log(findSecondLargestNum(arr));

// Q2. Find the second lowest number in an Array.....................

// let arr = [132, 453, 33, 44, 36, 50, 40]

// const findSecondLowestNum = (arr) => {
//     let lowestNum = Infinity
//     let secondLowestNum = Infinity

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

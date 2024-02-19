// Q1. Find the largest number in an Array.....................

let arr = [3, 5, 32, 637, 343, 67];

const findLargestNum = (array) => {
  let maxNum = array[0];
  for (let i = 0; i < array.length; i++) {
    array[i] > maxNum ? (maxNum = array[i]) : null;
  }

  return maxNum;
};

console.log(findLargestNum(arr));

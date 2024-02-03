// Q1. Create a function to check if the data types of another function arguments is correct or not........................

// function formCheck(a, b) {
//     if (a == b) {
//         console.log("YES")
//     }else {
//         console.log("NO")
//     }
// }

// let strings = ['Harry', 'Harry']

// function checkParams (str, func) {
//     if (typeof str[0] === 'string' && typeof str[1] === 'string') {
//         func(...str)
//     }else{
//         console.log('Please use strings as arguments')
//     }
// }

// checkParams(strings, formCheck)

// Q2. Where you need to print no. using Loop. Without Closure and IIFE it's not recommendable........

// Bad Way and applicable to all JS Environments................
// for (let index = 0; index <= 5; index++) {
//     setTimeout(() => {
//         console.log(index);
//     }, 1000);
// }

//  Correct Way..........................
// for (let index = 0; index <= 5; index++) {
//   (function(index){
//         setTimeout(() => {
//              console.log(index)
//         }, 1000);
//     })(index)
// }

// Q3. Analyze the given output and provide the same output by using given variables.................
// let sbstr = "And"
// let x  = ["tom and Jerry", "wonderland", "hello and world", "And again it's a beautiful day"];

// output:
// ["And again it's a beautiful day", "hello and world", "tom and Jerry"]

// const solution = (x, substr) => {
//     let arr = x.filter(str => {
//         const splittedArr = str.split(" ");
//         let isFound = false;
//         splittedArr.forEach(el => {
//             if(el.toLowerCase() === sbstr.toLowerCase()) isFound = true;
//         })
//         return isFound;
//     });
//     arr.sort();
//     return arr;
// }
// const ans = solution(x, sbstr);
// console.log(ans);

// Q4. DOM manipulation when user Setting the password, Display the strength of password......................

// let password = document.querySelector("#password");
// let message = document.querySelector("#strengthIndicator");

// const checkPasswordStrength = (e) => {
//   let passcode = e.target.value;
//   let specialCharacters = ["@", "#", "%", "&", "$", "*", "!"];
//   let result = false;
//   for (let char of specialCharacters) {
//     if (passcode.includes(char)) result = true;
//   }
//   if (passcode.length > 12 && result) {
//     return (message.innerHTML = "Very Strong Password");
//   } else if (passcode.length > 10) {
//     return (message.innerHTML = "Strong Password");
//   } else {
//     return (message.innerHTML = "Weak Password");
//   }
// };

// password.addEventListener("input", (e) => checkPasswordStrength(e));

// Q5. Pollyfill of Map, Filter and Reduce Array Method...............................

// Map Pollyfill................
// const multiplyFunc = (number) => {
//     return number * 5
// }
//   Object.prototype.mapPollyfill = function(callbackfunc) {
//   const newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(callbackfunc(this[i]));
//   } 
//   return newArr;
// };

// let myArr = [2, 4, 43, 5, 34];
// console.log(myArr.mapPollyfill(multiplyFunc))
// console.log(myArr.map(multiplyFunc))

// Filter Pollyfill................

  // const compareNumFunc = (input) => {
  //      let passedCondition = input > 5
  //      if (passedCondition) return input
  // }

  //   Object.prototype.filterPollyfill = function(callbackfunc) {
  //   const newArr = [];
  //   for (let i = 0; i < this.length; i++) { 
  //      let output = callbackfunc(this[i]);
  //      output && newArr.push(output)
  //   }
  //   return newArr;
  // };
  
  // let myArr = [2, 4, 43, 5, 34];
  // console.log(myArr.filterPollyfill(compareNumFunc))
  // console.log(myArr.filter(compareNumFunc))

  // Reduce Pollyfill................

const addFunc = (x, y) => {
    // let num = x + y
    return x + y
}
  Object.prototype.mapPollyfill = function(callbackfunc) {
  let output
  for (let i = 0; i < this.length; i++) {
    let num = 1+i
    console.log(num)
    output = callbackfunc(this[i], this[num]);
  } 
  return output;
};

let myArr = [2, 4, 43, 5, 34];
console.log(myArr.mapPollyfill(addFunc))
console.log(myArr.reduce(addFunc))
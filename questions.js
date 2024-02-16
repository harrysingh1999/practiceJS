// Q1. Create a function to check if the data types of another function arguments is correct or not........................

// function formCheck(a, b) {
//     // if (a.toUpperCase() === b.toUpperCase()) {
//     //     console.log("YES, user is using the correct Data Type when calling the function")
//     // }else {
//     //     console.log("NO, user is not using the correct Data Type when calling the function ")
//     // }
//     console.log(`YES, user is using the correct Data Type of arguments when calling the function, Arguments: ${a} ${b}`)
// }

// let inputs = ['Harry', 'dre' ]

// function checkParams (str, func) {
//     if (typeof str[0] === 'string' && typeof str[1] === 'string') {
//         func(...str)
//     }else{
//         console.log('Please use strings as arguments')
//     }
// }

// checkParams(inputs, formCheck)

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

// Object.prototype.mapPollyfill = function (callbackfunc) {
//   if (typeof callbackfunc !== "function") {
//     throw new TypeError("CallbackFunc is not a function");
//   }

//   const newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(callbackfunc(this[i], i, this));
//   }
//   return newArr;
// };

// let myArr = [2, 4, 43, 5, 34];
// console.log(myArr.mapPollyfill((ele) => ele * 3));
// console.log(myArr.map((ele) => ele * 3));

// Filter Pollyfill................

// Object.prototype.filterPollyfill = function(callbackfunc) {
// if (typeof callbackfunc !== 'function') {
//   throw new TypeError('CallbackFunc is not a function');
// }

//   const newArr = [];
//   for (let i = 0; i < this.length; i++) {
//      let output = callbackfunc(this[i], i, this);
//      output && newArr.push(this[i])
//   }
//   return newArr;
// };

// let myArr = [2, 4, 43, 5, 34];

// console.log(myArr.filterPollyfill((item) => item < 5))
// console.log(myArr.filter(item => item < 5 ))

// Reduce Pollyfill................

//   Object.prototype.reducePollyfill = function(callbackfunc, initialValue) {
//     if (typeof callbackfunc !== 'function') {
//       throw new TypeError('callbackfunc is not a function');
//     }

//     let accumulator = initialValue === undefined ? this[0] : initialValue;
//     for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
//       accumulator = callbackfunc(accumulator, this[i], i, this);
//     }
//     return accumulator;
// };

// let myArr = [2, 4, 43, 5, 34];

// console.log(myArr.reducePollyfill((x,y) => x*y ))
// console.log(myArr.reduce((x,y) => x*y ))

// Q4. 
/*
const cricket = [
    {player: 1, score: 50, day: 1},
    {player: 1, score: 150, day: 1},
    {player: 2, score: 75, day: 3},
    {player: 5, score: 75, day: 3},
    {player: 7, score: 30, day: 1},
    {player: 5, score: 20, day: 3},
    {player: 1, score: 10, day: 2},
]

let ans = {};
cricket.forEach((currEl) => {
    if(ans[currEl.day]) {
        if(ans[currEl.day][currEl.player]) {
            ans[currEl.day][currEl.player] += currEl.score;
        } else {
            ans[currEl.day][currEl.player] = currEl.score;
        }
    } else {
        ans[currEl.day] = {};
        ans[currEl.day][currEl.player] = currEl.score;
    }
})

Object.keys(ans).forEach(dayEl => {
    Object.keys(ans[dayEl]).forEach(playerEl => {
        console.log(`Day: ${dayEl} of player: ${playerEl} of total score ${ans[dayEl][playerEl]}`);
    })
})
*/

// Q6. Make a Unique element array out of an Array with Multiple repeated elements..............
// const inpArr = [6,3,1,9,4,6,2,8,9,1,5,6,9];

// let count = {}
// let uniqueArr
// inpArr.map(item => {
//     count[item] =  count[item] ? count[item] + 1 : 1
    
//     let keysArr = Object.keys(count)
//     uniqueArr = data
// })

// console.log(uniqueArr)

// Q6. Find out the Most repeated Element from an Array..............

// const arr = [32, 3243, 6546, 332, 22, 433, 22, 32, 22, 32, 22]

// let count = {}
// let mostRepeatedElement
// arr.map(item => {
//     count[item] =  count[item] ? count[item] + 1 : 1
    
//     let keysArr = Object.keys(count)
//         let result = keysArr.reduce((acc, curr) => {
//         if (count[acc] > count[curr]) {
//             return acc
//         }
//         else {
//             return curr
//         }
//     })
//     mostRepeatedElement = result 
// })

// console.log(mostRepeatedElement)


// Q8. Reverse a String...................

let str = 'Harvinder'
let newStr = ""
 for(let i=1; i<=str.length; i++) {
     newStr += str[str.length - i]
 }
 console.log(newStr)


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
let sbstr = "And"
let x  = ["tom and Jerry", "wonderland", "hello and world", "And again it's a beautiful day"];

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

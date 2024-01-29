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
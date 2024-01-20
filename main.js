// Event Bubbling, Capturing and Event Delegation........................
// document.querySelector("#grandParent").addEventListener("click", (e) => {
//     console.log(`clicked on ${e.target.id} element`);
//   }, false)

// document.querySelector('#parent').addEventListener("click", (e) => {
//     console.log('I am parent')

// }, true )

// document.querySelector('#child').addEventListener("click", (e) => {
//     console.log('I am child')

// }, true)

//Call, Apply and Bind Methods..............................................
// const myName = {
//     firstName: 'Harvinder',
//     LastName: "Singh",
// }

// function printFullName (state, country) {
//     console.log(`${this.firstName} ${this.LastName} is from ${state}, ${country}`)
// }

// printFullName.apply(myName, ['Uttrakhand', "India"])

// const myName2 = {
//     firstName: 'Virat',
//     LastName: "Kohli",
// }

// printFullName.call(myName2, 'Delhi', "India")

// const printMyName = printFullName.bind(myName, 'Mumbai', "India")
// printMyName()

// Currying in Javascript.................

// Example 1 or 1st way...............
// const add = (a) => (b) => (d) => console.log(a+b+d)
// add(4)(5)(8)

// Example 2 or 2nd way...............

// const printFullName = (firstName) => (middleName) => (lastName) => console.log ( firstName + middleName + lastName )

// let firstName = printFullName('Harvinder')
// let middleName = firstName('Singh')
// middleName('Shahu')

// Debouncing..........................
// const getSearchValue = (e) => {
//     console.log(`${e.target.value}`)
//  }

// const debounce = (func, delay) => {
//     let timer
//     return (e) => {
//         clearTimeout(timer)
//         timer = setTimeout(() => {
//             func(e)
//         }, delay);
//     }
// }

//  document.querySelector('#search').addEventListener('input', debounce(getSearchValue, 500) )


// Throttling..........................
// const buttonClicked = () => {
//   console.log(`Clicked`);
// };

// const Throttling = (func, delay) => {
//   let throttle = true
//   return () => {
//     if(!throttle) return

//     func();
//     throttle = false;
//     setTimeout(() => {
//       throttle = true;
//     }, delay);
//   };
// };

// document.querySelector("#button").addEventListener("click", Throttling(buttonClicked, 500));

// Prototypal Inheritance............................
// const arr = ['Harry', 'Singh']  
// const arr2 = ['harvinder']

// const obj1 = {
//     Name: "Harvinder",
//     city: 'Delhi'
// }
// const obj2 = {
//     Name: "Harry"
// }

// Object.setPrototypeOf(arr2, obj1)
// Object.setPrototypeOf(obj2, obj1)

// Cookie................

// document.cookie = "name=Harry";

// Mutability and Immutability........................

// Primitive Data Types are Immutable by Default, They follow Deep Copy Concept
// Non-Primitive Data Types are Mutable by Default, They follow Shallow Copy Concept

// Mutability........................
let myObject1 = {
    name: "Harvinder",
    age: 32,
}

let myObject2 = myObject1 //Doing Shallow Copy......
myObject2.age = 25

console.log(myObject1)
console.log(myObject2)

// Immutability.......................
let myObject3 = {
    name: "Harvinder",
    age: 35,
}

let myObject4 = {...myObject2} //Doing Deep Copy
myObject4.age = 65

console.log(myObject3)
console.log(myObject4)




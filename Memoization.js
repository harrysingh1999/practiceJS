// Memoization.................................

let multiple = 1
const multiply = (n) => {
    for (let i = 1; i <= n; i++) {
          multiple = i*multiple      
    }
    return multiple
}

const memoization = (func) => {
    let cache = {}
    return (num) => {
        if(cache[num]) {
            console.log('Getting Data from Cache')
            return cache[num]
        } else {
             console.log('Calculating new Data')   
             const result = func(num) 
             cache[num] = result
             return result
        }
    }
}

const memoizedFunction = memoization(multiply)

console.time()
console.log(memoizedFunction(5))
console.timeEnd()

console.time()
console.log(memoizedFunction(5))
console.timeEnd()

console.time()
console.log(memoizedFunction(6))
console.timeEnd()

console.time()
console.log(memoizedFunction(6))
console.timeEnd()
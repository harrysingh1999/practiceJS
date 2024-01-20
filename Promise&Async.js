// Promise Creation and Its Solution...........................................
const createPromise = () => {
    const myPromise = new Promise((response, reject) => {
            setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * 10 + 1);
        
            if (randomNumber > 5) {
              response(`Random Number is: ${randomNumber}`);
            } else {
              reject("Random Number is smaller than 5");
            }
          });
        }, 4000);
        return myPromise;
};

const promise = createPromise()
promise.then( (response) => console.log(response))
.catch((err) => console.log(`Promise Rejected: ${err}`))


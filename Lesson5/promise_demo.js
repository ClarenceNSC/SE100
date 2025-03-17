// a promise represents the eventual completion or failure of an 
// asynchronous operation and its resulting value

function myFunc(param1, param2) {
    // do something
}

const myArrowFunc = (param1, param2) => {
    // do something
}

const myConciseArrowFunc = (param1, param2) => "some data"

// structure of a promise

// new Promise() takes in an executor function,
// which receives two functions as parameters: resolveFunc and rejectFunc.
const genericPromise = new Promise((resolveFunc, rejectFunc) => {
    // do something

    // this promise will become resolved when either of the 
    // functions resolveFunc or rejectFunc are invoked

    // any errors thrown within this executor function
    // will cause the promise to be rejected, and the return value
    // will be neglected
})

// structure of then() for chaining promises
// then() accepts two functions as parameters for the fulfilled and rejected cases respectively,
// and returns a Promise. This is what allows its to chain multiple Promises.
const onFulfilled = (value) => { 
    // do something
    return value 
}
const onRejected = (value) => { 
    // do something
    return value 
}
genericPromise.then(onFulfilled, onRejected)

/* ========================================================================== */

// promise demo

console.log('starting promise demo')

const myPromise = new Promise((resolve, reject) => {
    // simulate some asynchronous operation
    // pretend to fetch data from another server that takes 2 seconds to respond
    setTimeout(() => {
        resolve("some random data") // return the data after we received it
    }, 2000)
})

// use the promise together with other operations

myPromise.then((value => {
    // show the fetched data once it's available
    console.log("fetched data: ", value)
    console.log("promise demo completed")
}))

// do something else in the meantime
console.log("executing other operations...")
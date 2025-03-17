console.log('hello')

// send a message some time later
setTimeout(() => {
    console.log('three seconds have passed...')
}, 3000)

// do something else instead of waiting for previous operation to complete
console.log('doing something else in the meantime...')

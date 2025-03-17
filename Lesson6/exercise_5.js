const names = [['John', 'Doe'], ['Jane', 'Doe']];

const fullNames = names.map((current) => {
    return current[0] + " " + current[1]
})

console.log(fullNames); // Output: ['John Doe', 'Jane Doe']
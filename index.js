const user = process.env.USER

if (process.argv[2] === 'web-49') { //in terminal try node index.js web-49 - this passes an argument to test
    console.log('hi')
} else {
    console.log('boooo!')
}

console.log(`the user is ${user}`)
const user = process.env.USER

if (process.argv[2] === 'web-49') { //in terminal try node index.js web-49 - this passes an argument to test
    console.log('hi')
} else {
    console.log('boooo!')
}

console.log(`the user is ${user}`)

const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.json({ message: 'hey there'})
})

const port = 9000
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})


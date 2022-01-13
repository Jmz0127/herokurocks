const user = process.env.USER;
const shell = process.env.SHELL;

// to inject the config var inside of the .env file
require('dotenv').config();

if (process.argv[2] === 'web-49') {
	//in terminal try node index.js web-49 - this passes an argument to test
	console.log('hi');
} else {
	console.log('boooo!');
}

console.log(`the user is ${user}`);

const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
	res.json({ message: 'hey there' });
});

app.get('/', (req, res) => {
	res.send(`
		<h1>Heyo!!</h1>
	`);
});

const port = process.env.PORT || 9000; // heroku wants to set its own port
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});

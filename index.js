const user = process.env.USER;

// to inject the config var inside of the .env file
require('dotenv').config();

// if (process.argv[2] === 'web-49') {
// 	//in terminal try node index.js web-49 - this passes an argument to test
// 	console.log('hi');
// } else {
// 	console.log('boooo!');
// }

console.log(`the user is ${user}`);

const express = require('express');
const server = express();
const cors = require('cors');

server.use(express.json());
server.use(cors());

const port = process.env.PORT || 9000; // heroku wants to set its own port
server.listen(port, () => {
	console.log(`listening on port ${port}`);
});

server.get('/', (req, res) => {
	res.send(`
		<h1>Heyo!!</h1>
	`);
});

server.get('/api/users', (req, res) => {
	res.json({ message: 'here are the users' });
});

server.get('/api/register', (req, res) => {
	res.json({ message: 'register here' });
});

server.get('/api/login', (req, res) => {
	res.json({ message: 'login here' });
});

server.use('*', (req, res) => {
	res.send(`<h1>this is a catch all🧤</h1>`);
});

server.use((err, req, res, next) => {
	//eslint-disable-line
	res.status(500).json({
		message: err.message,
		stack: err.stack
	});
});

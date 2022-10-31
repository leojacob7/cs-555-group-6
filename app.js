const cors = require('cors');

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const static = express.static(__dirname + '/public');

const configRoutes = require('./routes');
const bodyParser = require('body-parser');

app.use('/public', static);
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.urlencoded({ extended: true }));
dotenv.config();

mongoose.connect('mongodb://localhost:27017/cs-555-group-6', () =>
	console.log('Connected to db!')
);

app.use(async (req, res, next) => {
	if (req.session?.user) {
		console.log(
			'[' +
				new Date().toUTCString() +
				']: ' +
				req.method +
				' ' +
				req.originalUrl +
				' (Authenticated User)'
		);
	} else {
		console.log(
			'[' +
				new Date().toUTCString() +
				']: ' +
				req.method +
				' ' +
				req.originalUrl +
				' (Non-Authenticated User)'
		);
	}
	next();
});

configRoutes(app);

app.listen(4000, () => {
	console.log("We've now got a server!");
	console.log('Your routes will be running on http://localhost:4000');
});

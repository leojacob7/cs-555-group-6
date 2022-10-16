const express = require('express');
const app = express();
const static = express.static(__dirname + '/public');

const cors = require('cors');

const configRoutes = require('./routes');
const session = require('express-session');
app.use;
app.use('/public', static);
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.urlencoded({ extended: true }));

app.use(
	session({
		name: 'AuthCookie',
		secret: 'some secret string!',
		resave: false,
		saveUninitialized: true,
	})
);

app.use(async (req, res, next) => {
	if (req.session.user) {
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

const express = require('express');
const { ConnectionClosedEvent } = require('mongodb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const userData = require('../data/users');
const User = require('../models/user');

// router.route('/login').post(async (request, response) => {
// 	const userName = request.body.username;
// 	const passwd = request.body.password;

// 	try {
// 		if (!userName || !passwd) {
// 			throw 'Username, Password (both) have to be provided';
// 		}

// 		userData.userValidationChk(userName);
// 		userData.userPasswordValidationChk(passwd);

// 		const usrLoginChkResponse = await userData.loginCheck(userName, passwd);

// 		if (usrLoginChkResponse === '{authenticated: true}') {
// 			request.session.user = { username: userName };
// 			response.status(200).json('User Succesfully logged in');
// 		}
// 	} catch (e) {
// 		response.status(400).json('Error logging in : ' + e);
// 		return;
// 	}
// });

router.post('/login', async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	try {
		if (!email || !password) {
			return res.status(400).send({
				error: 'Email and Password (both) have to be provided',
			});
		}

		const user = await User.findOne({ email });

		if (!user) {
			return res
				.status(404)
				.send({ error: 'Email or Password is invalid' });
		}

		// check password
		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) {
			return res
				.status(403)
				.send({ error: 'Email or Password is invalid' });
		}

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: 60 * 60 * 24 * 365, // 1 year
		});

		return res.send({ user, token });
	} catch (err) {
		return res
			.status(500)
			.send({ error: 'An unexpected error occurred', details: err });
	}
});

router.post('/register', async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;

	try {
		if (!email || !password || !firstName || !lastName) {
			return res.status(400).send({
				error: 'Email, Password, First Name and Last Name (all) have to be provided',
			});
		}

		const userExists = await User.findOne({ email });
		if (userExists) {
			return res.status(403).send({ error: 'This user already exists!' });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = new User({
			email,
			password: hashedPassword,
			firstName,
			lastName,
		});
		await newUser.save();

		return res.send({ user: newUser });
	} catch (err) {
		return res
			.status(500)
			.send({ error: 'An unexpected error occurred', details: err });
	}
});

module.exports = router;

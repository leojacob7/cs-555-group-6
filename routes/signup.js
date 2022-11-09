const express = require('express');
const router = express.Router();
const userData = require('../data/users');

// router.get('/', async (req, res) => {
//     try {
//         res.render('signup');
//     }
//     catch (e)
//     {
//         res.status(500).send();
//     }
// });

router.post('/', async (req, res) => {
	try {
		username = req.body.username;
		email = req.body.email;
		password = req.body.password;

		const record = {
			username: username,
			email_id: email,
			password: password,
		};
		var result = await userData.addUser(record);

		if (result.flag == false) {
			if (result.type == 'exist') {
				res.status(200).json({
					flag: false,
					msg: 'Email exist already',
				});
			} else {
				res.status(200).json({
					flag: false,
					msg: 'Addition of new User is failure.',
				});
			}
		} else {
			res.status(200).json({ flag: true });
		}
	} catch (e) {
		let error = e.toString();
		res.status(404).json({ flag: false, msg: error });
	}
});

module.exports = router;

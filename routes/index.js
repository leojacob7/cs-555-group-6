const userRoute = require('./users');
const commentRoute = require('./comments');
const signup = require('./signup');

const constructorMethod = (app) => {
	app.use('/', userRoute);
	app.use('/signup', signup);
	app.use('/comment', commentRoute);
	app.use('*', (req, res) => {
		res.status(404).json({ error: 'Resource Not found' });
	});
};
module.exports = constructorMethod;

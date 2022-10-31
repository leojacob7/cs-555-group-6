import axios from 'axios';

export const BE_URL = 'http://localhost:4000';

export const loginUser = async (username, password) => {
	console.log('>>', username, password);
	const URL = BE_URL + '/login';
	try {
		const { data } = await axios.post(URL, {
			username,
			password,
		});
		console.log('>>', data);
		return data;
	} catch (error) {
		console.dir('>>>', error);
		return error.response.data;
	}
};

export const signupUser = async (username, password) => {
	console.log('>>', username, password);
	const URL = BE_URL + '/signup';
	try {
		const { data } = await axios.post(URL, {
			username,
			password,
		});
		console.log('>>', data);
		return data;
	} catch (error) {
		console.dir('>>>', error);
		return error.response.data;
	}
};

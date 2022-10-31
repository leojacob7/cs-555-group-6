import { useEffect, useState } from 'react';
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

export const useAxios = () => {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState('');
	const [data, setData] = useState('');
	const operation = (url, param) => {
		console.log(param);

		axios
			.post(`http://localhost:4000/${url}`, param)
			.then((response) => {
				setData(response.data);
			})
			.catch((err) => {
				console.log('In error block', err);
				setError(err?.response?.data?.error);
				setLoading(false);
			});
	};

	return [data, error, setError, loading, operation];
};

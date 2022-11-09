import axios from 'axios';
import { useState } from 'react';

export const BE_URL = 'http://localhost:4000';

export const useAxios = () => {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState('');
	const [data, setData] = useState('');
	const operation = (url, param = null, method = 'POST') => {
		console.log(param);
		if (method === 'GET') {
			axios
				.get(`http://localhost:4000/${url}`, param)
				.then((response) => {
					setData(response.data);
				})
				.catch((err) => {
					console.log('In error block', err);
					setError(err?.response?.data?.error);
					setLoading(false);
				});
		} else
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

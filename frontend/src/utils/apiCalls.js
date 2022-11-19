import axios from './axios';
import { useEffect, useRef, useState } from 'react';

export const BE_URL = 'http://localhost:4000';

export const useAxios = (url = null, param = null, method = 'POST') => {
	console.log('URL', url);
	// const isCurrent = useRef(true);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState('');
	const [data, setData] = useState('');
	const operation = async (url, param = null, method = 'POST') => {
		console.log(param);
		if (method === 'GET') {
			await axios
				.get(`http://localhost:4000/${url}`, param)
				.then((response) => {
					// if (isCurrent.current)
					console.log('In success block', response);
					setData(response.data);
				})
				.catch((err) => {
					console.log('In error block', err);
					setError(err?.response?.data?.error);
					setLoading(false);
				});
		} else
			await axios
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

	useEffect(() => {
		console.log('here in hook');
		url != null && operation(url, param, method);
	}, [loading]);

	return { data, error, setError, loading, operation, setLoading };
};

export function useAxiosGet(url, param) {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState('');
	const [data, setData] = useState('');

	const operation = async (url, param = null) => {
		console.log(param);
		await axios
			.get(`http://localhost:4000/${url}`, param)
			.then((response) => {
				// if (isCurrent.current)
				console.log('In success block', response);
				setData(response.data);
			})
			.catch((err) => {
				console.log('In error block', err);
				setError(err?.response?.data?.error);
				setLoading(false);
			});
	};

	useEffect(() => {
		operation(url, param);
	}, [loading]);

	return { error, data, loading, setLoading, setError, setData };
}

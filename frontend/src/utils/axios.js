import axios from 'axios';

// console.log('>>test', localStorage.getItem('session'));
if (localStorage.getItem('session'))
	axios.defaults.headers.common = {
		Authorization: `${localStorage.getItem('session')}`,
	};
export default axios;

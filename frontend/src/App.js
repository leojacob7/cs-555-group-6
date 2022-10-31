import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import SignUp from './components/Signup';
import Profile from './components/Profile';
import HomePage from './components/HomePage';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<SignUp />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;

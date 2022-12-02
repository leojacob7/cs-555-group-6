import React, { useEffect, useState } from 'react';
import { Posts } from './Posts';
import moment from 'moment';

import Avatar from '@mui/joy/Avatar';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/material/Stack';
import Divider from '@mui/joy/Divider';
import Navbar from './Navbar';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useAxios, useAxiosGet } from '../utils/apiCalls';
import axios from '../utils/axios';
import AddNewPost from './AddNewPost';
import CircularProgress from '@mui/material/CircularProgress';
import { TopAccounts } from './TopAccounts';

// import Profile from './Profile';

const HomePage = () => {
	const [loadingPosts, setLoadingPosts] = useState(false);
	const [topUsers, setTopUsers] = useState(null);
	const [filter, setFilter] = useState('new');
	const { data, setLoading, loading, operation } = useAxios();

	const fetchPosts = async () => {
		await operation(`posts/${filter}`, null, 'GET');
	};

	useEffect(() => {
		fetchPosts();
	}, [filter]);

	const handleFilter = (e) => {
		setFilter(e.target.id);
	};

	return (
		<Box>
			<Navbar />
			<Stack
				direction='row'
				spacing={10}
				alignItems='flex-start'
				justifyContent='center'>
				<Stack
					direction='column'
					alignItems='flex-start'
					width={'50%'}
					padding={2}>
					<Typography level='display2' component='h1'>
						Home
					</Typography>
					<AddNewPost
						updatePosts={setLoading}
						isUpdatingPost={loading}
						setFilter={setFilter}
					/>
					<Sheet sx={{ marginY: 3, width: '100%' }}>
						<Stack
							direction='row'
							alignItems='flex-start'
							justifyContent='flex-start'
							spacing={2}>
							<Button
								startDecorator={<AutoAwesomeIcon />}
								color='primary'
								size='sm'
								variant={filter === 'new' ? 'solid' : 'soft'}
								id='new'
								onClick={handleFilter}>
								New
							</Button>

							<Button
								startDecorator={<WhatshotIcon />}
								color='primary'
								size='sm'
								variant={filter === 'hot' ? 'solid' : 'soft'}
								id='hot'
								onClick={handleFilter}>
								Hot Posts
							</Button>

							<Button
								startDecorator={<TrendingUpIcon />}
								color='primary'
								size='sm'
								variant={
									filter === 'trending' ? 'solid' : 'soft'
								}
								id='trending'
								onClick={handleFilter}>
								Trending
							</Button>
						</Stack>
					</Sheet>

					<Box sx={{ width: '100%' }} py={2}>
						<Posts
							posts={data?.posts}
							updatePost={setLoading}
							setLoadingPosts={setLoadingPosts}
						/>
					</Box>
				</Stack>

				<Sheet sx={{ padding: 5 }}>{/* <TopAccounts /> */}</Sheet>
			</Stack>
		</Box>
	);
};

export default HomePage;

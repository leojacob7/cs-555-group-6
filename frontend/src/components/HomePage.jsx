import React from 'react';
import { useState } from 'react';
import { Posts } from './Posts';
import moment from 'moment';
// import { useColorModeValue } from '@chakra-ui/react';
import Avatar from '@mui/joy/Avatar';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/material/Stack';
import Divider from '@mui/joy/Divider';
import Navbar from './navbar';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// import Profile from './Profile';

export const HomePage = () => {
	const test_posts = [
		{
			id: 1,
			title: 'Test post',
			posted: moment(Date.now()),
			user: {
				id: 1,
				firstName: 'John',
				lastName: 'Doe',
				username: 'jdoe',
			},
		},
		{
			id: 2,
			title: "What's up?",
			posted: moment(Date.now()),
			user: {
				id: 1,
				firstName: 'John',
				lastName: 'Doe',
				username: 'jdoe',
			},
		},
		{
			id: 3,
			title: 'Organizing a meeting today',
			posted: moment(Date.now()),
			user: {
				id: 1,
				firstName: 'John',
				lastName: 'Doe',
				username: 'jdoe',
			},
		},
		{
			id: 4,
			title: 'How was your day?',
			posted: moment(Date.now()),
			user: {
				id: 1,
				firstName: 'John',
				lastName: 'Doe',
				username: 'jdoe',
			},
		},
	];

	const [posts, setPosts] = useState([...test_posts]);
	return (
		<Box>
			<Navbar />
			<Stack
				direction='row'
				alignItems='flex-start'
				justifyContent='space-between'>
				<Sheet
					sx={{ padding: 5 }}
					// bg={useColorModeValue('white', 'gray.800')}
				>
					<Stack
						direction='column'
						alignItems='flex-start'
						justifyContent='flex-start'
						spacing={2}>
						<Button
							startDecorator={<WhatshotIcon />}
							color='primary'
							size='sm'
							variant='plain'>
							Hot Posts
						</Button>

						<Button
							startDecorator={<AutoAwesomeIcon />}
							color='primary'
							size='sm'
							variant='plain'>
							New
						</Button>

						<Button
							startDecorator={<TrendingUpIcon />}
							color='primary'
							size='sm'
							variant='plain'>
							Trending
						</Button>
					</Stack>
				</Sheet>

				<Box sx={{ width: '70%' }} py={5}>
					<Posts posts={posts} />
				</Box>

				<Sheet sx={{ padding: 5 }}>
					<Stack
						direction='column'
						alignItems='flex-start'
						spacing={3}>
						<Box>
							<Typography level='h5'>Top Accounts</Typography>
							<Divider />
						</Box>

						<Stack spacing={1}>
							<Box justify={'center'}>
								<Avatar
									size={'md'}
									src={
										'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
									}
									alt={'Author'}
									css={{
										border: '2px solid white',
									}}
								/>
							</Box>

							<Stack spacing={2}>
								<Stack align='flex-start'>
									<Typography
										level='body1'
										component='strong'>
										John Doe
									</Typography>
									<Typography level='body2'>
										Frontend Developer
									</Typography>
								</Stack>

								<Button variant='soft' size='sm'>
									Follow
								</Button>
							</Stack>
						</Stack>
					</Stack>
				</Sheet>
			</Stack>
		</Box>
	);
};

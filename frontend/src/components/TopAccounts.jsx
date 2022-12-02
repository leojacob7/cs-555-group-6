import { Avatar, Box, Divider, Stack, Typography } from '@mui/joy';
import React, { useEffect } from 'react';
import { useAxios } from '../utils/apiCalls';

export const TopAccounts = () => {
	const { data, setLoading, loading, operation } = useAxios();

	const fetchTopUsers = async () => {
		await operation('top-accounts', null, 'GET');
	};

	console.log('top users', typeof data);

	useEffect(() => {
		fetchTopUsers();
	}, []);
	return (
		<Stack
			direction='column'
			alignItems='flex-start'
			maxHeight='100vh'
			spacing={3}>
			<Box>
				<Typography level='h5'>Top Accounts</Typography>
				<Divider />
			</Box>

			{data.map((user) => (
				<Stack spacing={1}>
					<Stack alignItems='center' justifyContent='center'>
						<Avatar
							sx={{ height: '75px', width: '75px' }}
							src={
								'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
							}
							alt={'Author'}
							css={{
								border: '2px solid white',
							}}
						/>
					</Stack>

					<Stack spacing={2}>
						<Stack align='flex-start'>
							<Typography level='body1' component='strong'>
								John Doe
							</Typography>
							<Typography level='body2'>
								Frontend Developer
							</Typography>
						</Stack>

						{/* <Button variant='soft' size='sm'>
									Follow
								</Button> */}
					</Stack>
				</Stack>
			))}
		</Stack>
	);
};

import { Avatar, Box, Button, Typography, TextField } from '@mui/joy';
import { Stack } from '@mui/material';
import React from 'react';
import moment from 'moment';
import SendIcon from '@mui/icons-material/Send';
// import { Link } from 'react-router-dom';

const Post = ({ post }) => {
	return (
		<Box borderWidth='1px' borderRadius='lg' px={4} py={3} boxShadow={'md'}>
			<Stack alignItems='flex-start' justifyContent='center'>
				<Stack>
					<Avatar
						size='md'
						src={
							'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
						}
						alt='Author'
						sx={{
							border: '2px solid white',
						}}
					/>
					<Stack direction='column'>
						<Typography level='body1' component='strong'>
							{post.user.firstName} {post.user.lastName}
						</Typography>
						<Typography as='u' fontSize='sm'>
							{/* <Link to={'/profile'}>@{post.user.username}</Link> */}
						</Typography>
						<Typography level='body2'>
							{moment(post.posted).fromNow()}
						</Typography>
					</Stack>
				</Stack>
				<Box py={2}>
					<Typography level='body1' component='p'>
						{post.title}
					</Typography>
				</Box>
				<Box sx={{ width: '100%' }}>
					<Stack direction='row' spacing={2}>
						<TextField
							fullWidth
							variant='soft'
							placeholder='Add a comment'
						/>
						<Button variant='soft' color='primary'>
							<SendIcon />
						</Button>
					</Stack>
				</Box>
			</Stack>
		</Box>
	);
};

export default Post;

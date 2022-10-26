import Stack from '@mui/material/Stack';
import React from 'react';
import Post from './post';

export const Posts = ({ posts }) => {
	return (
		<Stack spacing={5}>
			{posts.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</Stack>
	);
};

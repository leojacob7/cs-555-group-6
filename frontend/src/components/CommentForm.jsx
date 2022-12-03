import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import TextField from '@mui/joy/TextField';
import { Stack } from '@mui/joy';
import SendIcon from '@mui/icons-material/Send';
import axiosWithAuth from '../utils/axios';

const CommentForm = ({
	initialText,
	post,
	isReply,
	parentComment,
	rootComments,
	setRootComments,
	setIsReplying,
}) => {
	const [text, setText] = useState('' || initialText);

	console.log(text);

	const handleComment = (event) => {
		event.preventDefault();

		const payload = {
			post,
			commentTitle: text,
			isReply,
			parentComment,
		};

		axiosWithAuth
			.post('http://localhost:4000/posts/comment', payload)
			.then((res) => {
				console.log(rootComments);
				if (rootComments) {
					setRootComments([...rootComments, res.data.comment]);
				} else {
					setRootComments([res.data.comment]);
				}

				if (isReply) {
					setIsReplying(false);
				}
			})
			.catch((err) => console.log(err));

		setText('');
	};
	return (
		<form onSubmit={handleComment}>
			<Stack direction='row' spacing={2}>
				<TextField
					onChange={(e) => setText(e.target.value)}
					value={text}
					fullWidth
					placeholder='Type comment here'
					variant='outlined'
				/>

				<Button type='submit' color='neutral' variant='soft'>
					<SendIcon color='primary' />
				</Button>
			</Stack>
		</form>
	);
};

export default CommentForm;

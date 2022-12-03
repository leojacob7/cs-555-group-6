import { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';
import { Divider, Typography } from '@mui/joy';
import { Stack } from '@mui/material';

const Comments = ({ post, comments, isCommenting }) => {
	const [rootComments, setRootComments] = useState([]);

	useEffect(() => {
		setRootComments([
			...comments.filter((comment) => comment.parentComment === null),
		]);
	}, []);

	return (
		<div className='comments'>
			<Typography
				level='h5'
				component='h3'
				className='comments-title'
				py={2}>
				Comments
			</Typography>

			{isCommenting && (
				<CommentForm
					post={post}
					isReply={false}
					parentComment={null}
					rootComments={rootComments}
					setRootComments={setRootComments}
				/>
			)}

			<Stack py={4} spacing={4}>
				{rootComments.length !== 0 ? (
					rootComments.map((comment) => (
						<Comment
							key={comment._id}
							comment={comment}
							replies={comment.replies}
							comments={rootComments}
							setComments={setRootComments}
						/>
					))
				) : (
					<Typography level='body2' component='p'>
						No comments yet
					</Typography>
				)}
			</Stack>
		</div>
	);
};

export default Comments;

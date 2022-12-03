import { useState } from 'react';
import moment from 'moment';
import CommentForm from './CommentForm';
import { Avatar, Box, Button, CircularProgress, Typography } from '@mui/joy';
import { Stack } from '@mui/material';
import Share from './Share';
import { useAuth } from '../context/userContext';
import axiosWithAuth from '../utils/axios';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RateReviewIcon from '@mui/icons-material/RateReview';
import DeleteIcon from '@mui/icons-material/Delete';

const Comment = ({ comment, replies, comments, setComments }) => {
	const { user } = useAuth();
	const [fetchedReplies, setFetchedReplies] = useState(null);
	const [isLoadingReplies, setIsLoadingReplies] = useState(false);
	const [isReplying, setIsReplying] = useState(false);
	// const [isEditing, setIsEditing] = useState(false);
	// const isEditing =
	// 	activeComment &&
	// 	activeComment.id === comment.id &&
	// 	activeComment.type === 'editing';
	// const isReplying =
	// 	activeComment &&
	// 	activeComment.id === comment.id &&
	// 	activeComment.type === 'replying';

	const handleFetchReplies = () => {
		setIsLoadingReplies(true);

		const payload = { comment: comment._id };
		axiosWithAuth
			.post('http://localhost:4000/comments/replies', payload)
			.then((res) => {
				setFetchedReplies(res.data.replies);
				setIsLoadingReplies(false);
			})
			.catch((err) => console.log(err));
	};

	const handleDeleteComment = () => {
		const payload = { comment: comment._id };

		if (window.confirm('Are you sure you want to remove comment?')) {
			axiosWithAuth
				.post('http://localhost:4000/comments/delete', payload)
				.then((res) => {
					setComments([
						...comments.filter(
							(rootComment) => rootComment._id !== comment._id
						),
					]);
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<div key={comment._id} className='comment'>
			<Stack direction='row' spacing={2}>
				<Stack spacing={2}>
					<Stack direction='row' alignItems='center' spacing={2}>
						<Avatar
							size='sm'
							src={comment.user.avatar}
							alt='Comment Author'
							sx={{
								border: '2px solid white',
							}}
						/>

						<Stack
							direction='column'
							alignItems='flex-start'
							spacing={0}>
							<Typography level='body1' component='strong'>
								{comment.user.firstName} {comment.user.lastName}
							</Typography>
							<Typography level='body2'>
								{moment(comment.created).fromNow()}
							</Typography>
						</Stack>
					</Stack>

					<Stack direction='column' spacing={2}>
						<div className='comment-text'>
							{comment.commentTitle}
						</div>

						<Stack direction='row' spacing={2}>
							<Button
								startDecorator={<RateReviewIcon />}
								variant={isReplying ? 'solid' : 'soft'}
								size='sm'
								onClick={() => setIsReplying(!isReplying)}>
								reply{isReplying ? 'ing' : ''}
							</Button>

							{/* {user._id === comment.user._id && (
								<Button
									variant={isEditing ? 'solid' : 'soft'}
									size='sm'
									onClick={() => setIsEditing(!isEditing)}>
									edit{isEditing ? 'ing' : ''}
								</Button>
							)} */}

							{user._id === comment.user._id && (
								<Button
									startDecorator={<DeleteIcon />}
									variant='soft'
									size='sm'
									onClick={handleDeleteComment}>
									delete
								</Button>
							)}

							<Share label='share' />
						</Stack>

						{/* {isEditing && (
							<CommentForm
								submitLabel='Update'
								hasCancelButton
								initialText={comment.body}
								handleSubmit={(text) =>
									updateComment(text, comment.id)
								}
								handleCancel={() => {
									setActiveComment(null);
								}}
							/>
						)} */}

						{/* <Stack direction='row' spacing={2}>
							<div
								className='comment-action'
								onClick={() =>
									setActiveComment({
										id: comment.id,
										type: 'replying',
									})
								}>
								{' '}
								Reply
							</div>

							<div
								className='comment-action'
								onClick={() => deleteComment(comment.id)}>
								Delete
							</div>

							<div
								className='comment-action'
								onClick={() =>
									setActiveComment({
										id: comment.id,
										type: 'editing',
									})
								}>
								Edit
							</div>

							<Share label='Share' />
						</Stack> */}

						{isReplying && (
							<CommentForm
								post={comment.post}
								isReply={true}
								parentComment={comment._id}
								rootComments={fetchedReplies}
								setRootComments={setFetchedReplies}
								setIsReplying={setIsReplying}
							/>
						)}
					</Stack>

					{replies.length !== 0 && (
						<Box pl={4}>
							{fetchedReplies ? (
								<Stack direction='column' spacing={1}>
									{fetchedReplies.map((reply) => (
										<Comment
											key={reply._id}
											comment={reply}
											replies={reply.replies}
											comments={fetchedReplies}
											setComments={setFetchedReplies}
										/>
									))}
								</Stack>
							) : (
								<Button
									startDecorator={<KeyboardArrowDownIcon />}
									variant='soft'
									size='sm'
									onClick={handleFetchReplies}>
									{isLoadingReplies ? (
										<CircularProgress
											size='sm'
											variant='solid'
										/>
									) : (
										`view replies (${replies.length})`
									)}
								</Button>
							)}
						</Box>
					)}
				</Stack>
			</Stack>
		</div>
	);
};

export default Comment;

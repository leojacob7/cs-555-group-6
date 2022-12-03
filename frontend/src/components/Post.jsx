import { Avatar, Box, Button, Typography } from '@mui/joy';
import { Divider, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import moment from 'moment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import Comments from './Comments';
import { useAxios } from '../utils/apiCalls';
import { useAuth } from '../context/userContext';
import Link from '@mui/joy/Link';
import { Link as RouterLink } from 'react-router-dom';

const Post = ({ post }) => {
	const { user } = useAuth();
	const [likedPost, setLikedPost] = React.useState(false);
	const [isCommenting, setIsCommenting] = React.useState(false);
	const [likeCounter, setLikeCounter] = React.useState(post.likes.length);
	const { operation } = useAxios();

	useEffect(() => {
		const isLikedPost = post.likes.some((like) => {
			return user._id === like._id;
		});
		setLikedPost(isLikedPost);
	}, [post, user]);

	const likePost = (e) => {
		const payload = {
			post: post._id,
		};
		operation('posts/like', payload).then(() => {
			if (!likedPost) {
				setLikeCounter(likeCounter + 1);
			} else {
				setLikeCounter(likeCounter - 1);
			}
			setLikedPost(!likedPost);

			!likedPost && setLikeCounter(likeCounter + 1);
		});
	};

	return (
		<Box
			sx={{
				borderWidth: '1',
				borderRadius: 'lg',
				px: 4,
				py: 3,
				boxShadow: 'md',
			}}>
			<Stack alignItems='flex-start' justifyContent='center'>
				<Stack>
					<Avatar
						size='md'
						src={post.user.avatar}
						alt='Author'
						sx={{
							border: '2px solid white',
						}}
					/>
					<Stack direction='column'>
						<Link
							component={RouterLink}
							level='body1'
							to={`/profile/${post.user._id}`}>
							<Typography level='body1' component='strong'>
								{post?.user?.firstName} {post?.user?.lastName}
							</Typography>
						</Link>
						<Typography level='body2'>
							{moment(post.created).fromNow()}
						</Typography>
					</Stack>
				</Stack>
				<Box py={2}>
					<Typography level='body1' component='p'>
						{post.title}
					</Typography>
				</Box>
				<Divider sx={{ width: '100%' }} />
				<Stack
					direction='row'
					py={2}
					spacing={2}
					justifyContent='center'
					alignItems='center'>
					<Button
						sx={{
							display: 'flex',
							alignItems: 'space-between',
							justifyContent: 'space-between',
							width: '5rem',
						}}
						startDecorator={
							likedPost ? (
								<ThumbUpIcon color='secondary' />
							) : (
								<ThumbUpOutlinedIcon color='secondary' />
							)
						}
						size='sm'
						variant={likedPost ? 'solid' : 'soft'}
						color='primary'
						onClick={likePost}>
						{likeCounter}
					</Button>

					<Button
						sx={{
							display: 'flex',
							alignItems: 'space-between',
							justifyContent: 'space-between',
							width: '5rem',
						}}
						startDecorator={<CommentIcon />}
						size='sm'
						variant={isCommenting ? 'solid' : 'soft'}
						color='primary'
						onClick={() => setIsCommenting(!isCommenting)}>
						{post.comments.length}
					</Button>
				</Stack>
				<Divider sx={{ width: '100%' }} />
				<Box sx={{ width: '100%' }}>
					<Stack direction='row'>
						<Box sx={{ width: '100%' }}>
							<Comments
								post={post._id}
								comments={post.comments}
								isCommenting={isCommenting}
							/>
						</Box>
					</Stack>
				</Box>
			</Stack>
		</Box>
	);
};

export default Post;

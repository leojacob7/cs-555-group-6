import { Avatar, Box, Button, Typography, TextField } from '@mui/joy';
import { Divider, Stack } from '@mui/material';
import React from 'react';
import moment from 'moment';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import Comments from "./Comments";
// import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const [likedPost, setLikedPost] = React.useState(post.currentUserLike)
  const likePost = e => {
    setLikedPost(!likedPost)
    // TODO: make a BE call to like or unlike a post
  }
  const [awarded, setawarded] = React.useState(post.currentUserAward)
  const award = e => {
    setawarded(!awarded)
  }
  
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
		<Divider sx={{ width: '100%', marginY: '2%' }} />
		
        <Stack direction='row' spacing={2}>
          <Button
            sx={{ marginBottom: '10%' }}
            variant='soft'
            color='primary'
            onClick={likePost}
          >
            {likedPost ? (
              <ThumbUpIcon color='secondary' />
            ) : (
              <ThumbUpOutlinedIcon color='secondary' />
            )}
          </Button>

		  <Button
		  sx={{ marginBottom: '10%' }}
		  variant='soft'
		  color='primary'
		  onClick={award}
          >
            {awarded ? (
              <AcUnitRoundedIcon color='secondary' />
            ) : (
              <AcUnitRoundedIcon color='secondary' />
            )}
		  </Button>
        </Stack>
        <Divider sx={{ width: '100%' }} />
		
        <Box sx={{ width: '100%', marginY: '2%' }}>
          
		  <Comments/>
        </Box>
			</Stack>
		</Box>
	);
};

export default Post

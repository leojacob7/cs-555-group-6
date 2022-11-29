import Stack from '@mui/material/Stack'
import React from 'react'
import Post from './Post'

export const Posts = ({ posts, handleDelete }) => {
  return (
    <Stack spacing={5}>
      {posts.map(post => (
        <div>
           <Post key={post.id} post={post} />
           <button onClick={() => handleDelete(post.id)}>Delete Post</button>

        </div>
       
      ))}
      
    </Stack>
  )
}

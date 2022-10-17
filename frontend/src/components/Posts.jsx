import React from 'react'
import Post from './post'

export const Posts = ({ posts }) => {
  return (
    <div>{posts.map((post) => <Post key={post.id} post={post} />)}</div>
  )
}

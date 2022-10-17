import React from 'react'
import { useState } from 'react'
import { Posts } from './Posts'
import moment from 'moment'
import { Heading } from '@chakra-ui/react'

export const HomePage = () => {
  const test_posts = [
    { id: 1, title: "Hey", posted: moment(Date.now()), user: { id: 1, firstName: "Manas", lastName: "Acharekar", username: "manas" } },
    { id: 2, title: "Hey 1", posted: moment(Date.now()), user: { id: 1, firstName: "Manas", lastName: "Acharekar", username: "manas" } },
    { id: 3, title: "Hey 2", posted: moment(Date.now()), user: { id: 1, firstName: "Manas", lastName: "Acharekar", username: "manas" } },
    { id: 4, title: "Hey 3", posted: moment(Date.now()), user: { id: 1, firstName: "Manas", lastName: "Acharekar", username: "manas" } }]

  const [posts, setPosts] = useState([...test_posts])
  return (
    <div>
      <Heading as='h1' size='2xl' my='5'>Home</Heading>
      <Posts posts={posts} />
    </div>
  )
}
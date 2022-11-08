import React from 'react'
import { useState } from 'react'
import { Posts } from './Posts'
import moment from 'moment'
import { Container, Heading } from '@chakra-ui/react'
import Navbar from './navbar';

export const HomePage = () => {
  const test_posts = [
    { id: 1, title: "Test post", posted: moment(Date.now()), user: { id: 1, firstName: "John", lastName: "Doe", username: "jdoe" } },
    { id: 2, title: "What's up?", posted: moment(Date.now()), user: { id: 1, firstName: "John", lastName: "Doe", username: "jdoe" } },
    { id: 3, title: "Organizing a meeting today", posted: moment(Date.now()), user: { id: 1, firstName: "John", lastName: "Doe", username: "jdoe" } },
    { id: 4, title: "How was your day?", posted: moment(Date.now()), user: { id: 1, firstName: "John", lastName: "Doe", username: "jdoe" } }]

  const [posts, setPosts] = useState([...test_posts])
  return (
    <div>
      <Navbar />
      <Container width='full'>
        <Heading as='h1' size='2xl' my='5'>Home</Heading>
        <Posts posts={posts} />
      </Container>
    </div>
  )
}
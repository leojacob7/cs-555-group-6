import React from 'react'
import { useState } from 'react'
import { Posts } from './Posts'
import moment from 'moment'
import { Box, Button, Center, Container, Heading, HStack, Icon, Stack, useColorModeValue, VStack } from '@chakra-ui/react'
import Navbar from './navbar';
import { AtSignIcon  } from '@chakra-ui/icons'

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
      
      <Box px={8} py={10}>
      <Stack spacing='20px'>
      <Box p={5} w='800px'
            
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}>
     
            <HStack spacing='20px'> 
              <Box py={'-90px'}>
              <Button leftIcon={<AtSignIcon />} colorScheme='blue' size='md' variant='outline'>Hot Posts</Button> 
              </Box>

              <Box>
              <Button leftIcon={<AtSignIcon />}  colorScheme='blue' size='md' variant='outline'>New</Button>
              </Box>

              <Box>
              <Button leftIcon={<AtSignIcon />}  colorScheme='blue' size='md' variant='outline'>Trending</Button>
              </Box>
              

            </HStack>

      </Box>
      <Box p={10} w='800px'
            
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}>
            <Posts posts={posts} />
          </Box>
      </Stack>
      </Box>
      
    </div>

  )
}
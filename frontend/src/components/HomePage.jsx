import React from 'react'
import { useState } from 'react'
import { Posts } from './Posts'
import moment from 'moment'
import { Box, Button, Center, Container, Heading, HStack, Icon, Stack, useColorModeValue, VStack, Text, Image, Flex, Avatar } from '@chakra-ui/react'
import Navbar from './navbar';
import { AtSignIcon  } from '@chakra-ui/icons'
import { Divider } from '@chakra-ui/react'
import Profile from './Profile'

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
      <HStack>
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
      <Box p={10} h={760} w='600px'
            
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}>

            <VStack>
              <Box><Text fontSize='lg'>Top Accounts</Text></Box>
              <Divider />
              <VStack>
              <Box
               maxW={'270px'}
               maxH={'500px'}
          w={'280px'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          
          <Box justify={'center'} mt={-12}>
            <Avatar
              size={'md'}
              src={
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Box>


          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                John Doe
              </Heading>
              <Text color={'gray.500'}>Frontend Developer</Text>
            </Stack>

            

            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Follow
            </Button>
            
          </Box>
          
        </Box>
             
        </VStack>
            </VStack>
            
          </Box>





      </HStack>  
    </div>

  )
}
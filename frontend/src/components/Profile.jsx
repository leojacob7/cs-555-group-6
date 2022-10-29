import React, { useState } from 'react'
import moment from 'moment'
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  HStack,
  Divider,
  VStack,
  Input
} from '@chakra-ui/react'
import { StarIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import {
  Heading,
  Avatar,
  Box,
  Image,
  Flex,
  Text,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import Navbar from './navbar'
import { Posts } from './Posts'
import { GiAbstract036 } from 'react-icons/gi'

export default function Profile () {
  const test_posts = [
    {
      id: 1,
      title: 'Test post',
      currentUserLike: true,
      posted: moment(Date.now()),
      user: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        username: 'jdoe'
      }
    },
    {
      id: 2,
      title: "What's up?",
      posted: moment(Date.now()),
      user: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        username: 'jdoe'
      }
    }
  ]

  const [posts, setPosts] = useState([...test_posts])

  return (
    <Box py={'50px'} px={'200px'}>
      <Navbar></Navbar>
      <Stack spacing='24px' direction={'row'}>
        <Box
          maxW={'270px'}
          maxH={'500px'}
          w={'280px'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
        >
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
              }
              alt={'Author'}
              css={{
                border: '2px solid white'
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                John Doe
              </Heading>
              <Text color={'gray.500'}>Frontend Developer</Text>
            </Stack>

            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>

            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg'
              }}
            >
              Follow
            </Button>
          </Box>
        </Box>
        <VStack w={'800px'}>
          <Box
            p={10}
            maxW={'800px'}
            maxH={'2000px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
          >
            <Box>
              <Input variant='filled' placeholder='About Yourself' />
            </Box>
          </Box>

          <Box
            p={10}
            maxW={'800px'}
            maxH={'2000px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
          >
            <Posts posts={posts} />
          </Box>
        </VStack>
        <Box
          p={10}
          maxW={'270px'}
          maxH={'420px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
        >
          <VStack spacing={'10'}>
            <HStack>
              <Box boxSize='50px'>
                <GiAbstract036 />
              </Box>
              <Box maxW={'50px'}>carma</Box>
            </HStack>
            <Box>cARMA POINTS</Box>
            <Divider orientation='horizontal' />
          </VStack>
          <VStack>
            <Box>
              <Text fontSize='lg'> Top rewards</Text>
            </Box>
            <Box>
              <VStack>
                <Box>
                  <SunIcon color='red.500' /> Sun Reward: 10
                </Box>
                <Box>
                  <StarIcon color='red.500' /> Star Reward: 5
                </Box>
                <Box>
                  <MoonIcon color='red.500' /> Moon Reward: 5
                </Box>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Stack>
    </Box>
  )
}

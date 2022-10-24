import { Avatar, Box, Button, HStack, Text, Textarea, VStack } from "@chakra-ui/react";
import React from "react";
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Input } from '@chakra-ui/react'


const Post = ({ post }) => {
  return (
    <Box borderWidth='1px' borderRadius='lg' px={4} py={3} boxShadow={'md'}>
      <VStack align='flex-start' alignItems='flex-start'>
      <HStack>
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
        <HStack>
          <Text as='b' fontSize='md'>{post.user.firstName} {post.user.lastName}</Text>
          <Text as='u' fontSize='sm' ><Link to={'/profile'}>@{post.user.username}</Link></Text>
          <Text fontSize='xs'>{moment(post.posted).fromNow()}</Text>
        </HStack>

      </HStack>
      <Box py={4}>
        <Text>{post.title}</Text>
      </Box>
      <Box>
      <HStack>
      <Input variant='filled' placeholder='Add a comment' />
      <Button colorScheme='blue'>Send</Button>
      </HStack>
      </Box>
      </VStack>
    </Box>
  );
};

export default Post;
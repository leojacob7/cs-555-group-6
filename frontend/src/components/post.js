import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import moment from 'moment'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <Box borderWidth='1px' borderRadius='lg' px={4} py={3} boxShadow={'md'}>
      <HStack spacing={4}>
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
    </Box>
  );
};

export default Post;
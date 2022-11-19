import React, { useState } from 'react'
import moment from 'moment'

import Avatar from '@mui/joy/Avatar'
import Typography from '@mui/joy/Typography'
import Button from '@mui/joy/Button'
import Box from '@mui/joy/Box'
import Sheet from '@mui/joy/Sheet'
import Stack from '@mui/material/Stack'
import Divider from '@mui/joy/Divider'
import Navbar from './Navbar'
import { Posts } from './Posts'
import { GiAbstract036 } from 'react-icons/gi'
import { TextField } from '@mui/material'
import Image from 'material-ui-image'
import post from './Post'
import { spacing } from '@mui/system'

const Profile = () => {
  const test_posts = [
    {
      id: 1,
      title: 'Test post',
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
    },
    {
      id: 3,
      title: 'Organizing a meeting today',
      posted: moment(Date.now()),
      user: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        username: 'jdoe'
      }
    },
    {
      id: 4,
      title: 'How was your day?',
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
    <Box>
      <Navbar></Navbar>
      <Stack
        direction='row'
        spacing={1}
        alignItems='flex-start'
        justifyContent='center'
        padding={2}
      >
        <Stack
          direction='column'
          alignItems='center'
          justifyContent='center'
          width={'10%%'}
          padding={2}
        >
          <Box
            sx={{
              borderWidth: '1',
              borderRadius: 'lg',
              px: 4,
              py: 3,
              boxShadow: 'md'
            }}
          >
            <Box
              sx={{
                borderWidth: '1',
                borderRadius: 'lg',
                px: 4,
                py: 3,
                boxShadow: 'md',
                height: 150,
                width: 250
              }}
              alt='BackgroundImage'
              src='https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            />
            <Stack alignItems='center' justify='center' mt={-10}>
              <Avatar
                src={
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                }
                sx={{ width: 120, height: 120 }}
                alt={'Author'}
              />
              <Stack
                alignItems='center'
                justify='center'
                spacing={1}
                divider={<Divider orientation='horizontal' flexItem />}
              >
                <Typography level='h2' component='strong'>
                  John Doe
                </Typography>
                <Box>Frontend Developer</Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Stack padding={1} sx={{ width: '50%' }}>
          <Box
            sx={{
              borderWidth: '1',
              borderRadius: 'lg',
              px: 4,
              py: 3,
              boxShadow: 'md',
              alignItems: 'center',
              sy: { width: '101' }
            }}
          >
            Space for desc
          </Box>
          <Box sx={{ width: '100%' }} py={2}>
            <Posts posts={posts} />
          </Box>
        </Stack>

        <Box
          sx={{
            borderWidth: '1',
            borderRadius: 'lg',
            px: 4,
            py: 3,
            boxShadow: 'md'
          }}
        >
          <Typography level='h2' component='strong'>
            Karma : 2,199
          </Typography>
          <Divider orientation='horizontal' flexItem />
        </Box>
      </Stack>
      {/* <Stack spacing='24px' >
				<Box
					maxW={'270px'}
					maxH={'500px'}
					w={'280px'}
					boxShadow={'2xl'}
					rounded={'md'}
					overflow={'hidden'}>
					<Avatar alt="Remy Sharp" src='https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
						objectFit={'cover'}
					/>
					<Stack justify={'center'} mt={-12}>
						<Avatar
							size={'xl'}
							src={
								'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
							}
							alt={'Author'}
							css={{
								border: '2px solid white',
							}}
						/>
					</Stack>

					<Box p={6}>
						<Stack spacing={0} align={'center'} mb={5}>
							Frontend dev
						</Stack>

						<Stack spacing={0} align={'center'}>
							23k
							Followers
						</Stack>

						<Button
							w={'full'}
							mt={8}
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
				<Stack w={'800px'}>
					<Box
						p={10}
						maxW={'800px'}
						maxH={'2000px'}
						w={'full'}
						boxShadow={'2xl'}
						rounded={'md'}
						overflow={'hidden'}>
						<Box>
							<TextField id="outlined-basic" label="Outlined" variant="outlined" />
						</Box>
					</Box>

					<Box
						p={10}
						maxW={'800px'}
						maxH={'2000px'}
						w={'full'}						
						boxShadow={'2xl'}
						rounded={'md'}
						overflow={'hidden'}>
						<Posts posts={posts} />
					</Box>
				</Stack>
				<Box
					p={10}
					maxW={'270px'}
					maxH={'420px'}
					w={'full'}
					boxShadow={'2xl'}
					rounded={'md'}
					overflow={'hidden'}>
					<Stack spacing={'10'}>
						<Stack>
							<Box boxSize='50px'>
								<GiAbstract036 />
							</Box>
							<Box maxW={'50px'}>carma</Box>
						</Stack>
						<Box>cARMA POINTS</Box>
						<Divider orientation='horizontal' />
					</Stack>
					<Stack>
						<Box>
							 Top rewards
						</Box>
					</Stack>
				</Box>
			</Stack> */}
    </Box>
  )
}

export default Profile

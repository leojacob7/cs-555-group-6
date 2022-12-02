import { Box, Divider, Stack, Typography } from '@mui/joy'
import React, { useEffect } from 'react'
import { useAxios } from '../utils/apiCalls'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'

export const TopAccounts = () => {
  const { data, setLoading, loading, operation } = useAxios()

  const fetchTopUsers = async () => {
    await operation('top-accounts', null, 'GET')
  }

  console.log('top users', data)

  useEffect(() => {
    fetchTopUsers()
  }, [])
  if (data === '') return <div>Test</div>
  return (
    <Stack direction='column' alignItems='center' maxHeight='100vh' spacing={3}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography level='h5'>Top Accounts</Typography>
        <Divider />
      </Box>

      {data.users.map(user => (
        <Link to={`/profile/${user._id}`}>
          <Stack spacing={1}>
            <Stack alignItems='center' justifyContent='center'>
              <Avatar
                sx={{ height: '75px', width: '75px' }}
                name={`${user.firstName} ${user.lastName}`}
                alt={'Author'}
                css={{
                  border: '2px solid white'
                }}
                round={true}
              />
            </Stack>

            <Stack spacing={2}>
              <Stack align='flex-start'>
                <Typography level='body1' component='strong'>
                  {user.firstName}
                </Typography>
              </Stack>

              {/* <Button variant='soft' size='sm'>
									Follow
								</Button> */}
            </Stack>
          </Stack>
        </Link>
      ))}
    </Stack>
  )
}

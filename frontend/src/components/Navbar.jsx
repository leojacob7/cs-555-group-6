import React, { useState } from 'react'

import {
  Box,
  Avatar,
  Button,
  Menu,
  MenuList,
  MenuItem,
  Divider,
  Typography,
  Sheet
} from '@mui/joy'
import { Stack } from '@mui/material'
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import AddNewPost from './AddNewPost'
import { useAuth } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import { useAxios } from '../utils/apiCalls'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'
import { useNotification } from '../context/notificationsContext'

export default function Navbar () {
  // for menu list
  const [anchorEl, setAnchorEl] = useState(null)
  const { isNotificationEnabled, setIsNotificationEnabled } = useNotification()
  // const [, error, setError, loading, operation] = useAxios()
  const navigate = useNavigate()
  const { setSession, setUser, user } = useAuth()
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    // operation('logout')
    setAnchorEl(null)
    setSession(null)
    setUser(null)
    navigate('/login')
  }

  return (
    <Sheet variant='soft' color='neutral' sx={{ paddingX: 4, paddingY: 3 }}>
      <Stack
        maxHeight={20}
        direction='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Box>Logo</Box>

        <Stack direction='row' spacing={2} alignItems='center'>
          <CircleNotificationsIcon
            color='secondary'
            onClick={e => setIsNotificationEnabled(!isNotificationEnabled)}
          />
          {/* <Button onClick={toggleColorMode}>
								{colorMode === 'light' ? (
									<MoonIcon />
								) : (
									<SunIcon />
								)}
							</Button> */}
          <Button variant='outlined' cursor='pointer' onClick={handleClick}>
            <Avatar
              size='sm'
              src={'https://avatars.dicebear.com/api/male/username.svg'}
            />
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <Stack direction='column' p={2} spacing={2}>
              <Avatar
                size='xl'
                src={'https://avatars.dicebear.com/api/male/username.svg'}
              />

              <Typography level='body1' component='strong'>
                {`Hello ${user?.firstName}`}
              </Typography>
              <MenuList alignItems='center'>
                <MenuItem onClick={handleClose}>Your Servers</MenuItem>
                <MenuItem onClick={handleClose}>Account Settings</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Sheet>
  )
}

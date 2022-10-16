import { useState } from 'react'
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from '@chakra-ui/react'
import ErrorMessage from './ErrorMessage'
import { FaUserAlt, FaLock } from 'react-icons/fa'

import { loginUser } from '../utils/apiCalls'

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

const Login = () => {
  const [username, setUsername] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async e => {
    e.preventDefault()
    if (!username || !password) {
      return setError('Fields are missing Please enter all the fields')
    }

    console.log({ username, password })
    const res = await loginUser(username, password)
    if (res) return setError(res)
    // TODO: make an axios request to perform actual api calls
  }

  const handleShowClick = () => setShowPassword(!showPassword)

  return (
    <Flex
      flexDirection='column'
      width='100wh'
      height='100vh'
      backgroundColor='gray.200'
      justifyContent='center'
      alignItems='center'
    >
      <Stack
        flexDir='column'
        mb='2'
        justifyContent='center'
        alignItems='center'
      >
        <Avatar bg='teal.500' />
        <Heading color='teal.400'>Welcome</Heading>
        <Box minW={{ base: '90%', md: '468px' }}>
          <form>
            {error && <ErrorMessage message={error} />}
            <Stack
              spacing={4}
              p='1rem'
              backgroundColor='whiteAlpha.900'
              boxShadow='md'
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<CFaUserAlt color='gray.300' />}
                  />
                  <Input
                    type='email'
                    placeholder='email address'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    children={<CFaLock color='gray.300' />}
                  />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign='right'>
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type='submit'
                variant='solid'
                colorScheme='teal'
                width='full'
                onClick={handleLogin}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{' '}
        <Link color='teal.500' href='#'>
          Sign Up
        </Link>
      </Box>
    </Flex>
  )
}

export default Login

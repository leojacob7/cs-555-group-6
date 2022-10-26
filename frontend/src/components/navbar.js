import React, { useState } from 'react';

import {
	Box,
	Avatar,
	Button,
	Menu,
	MenuList,
	MenuItem,
	Divider,
	Typography,
	Sheet,
} from '@mui/joy';
import { Stack } from '@mui/material';
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import AddNewPost from './add-new-post';

// const NavLink = ({ children }: { children: ReactNode }) => (
// 	<Link
// 		px={2}
// 		py={1}
// 		rounded={'md'}
// 		_hover={{
// 			textDecoration: 'none',
// 			bg: useColorModeValue('gray.200', 'gray.700'),
// 		}}
// 		href={'#'}>
// 		{children}
// 	</Link>
// );

// bg={useColorModeValue('gray.100', 'gray.900')}

export default function Navbar() {
	// for menu list
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Sheet variant='soft' color='neutral' sx={{ paddingX: 4, paddingY: 3 }}>
			<Stack
				maxHeight={20}
				direction='row'
				alignItems='center'
				justifyContent='space-between'>
				<Box>Logo</Box>

				<Stack direction='row' spacing={2}>
					<AddNewPost />
					{/* <Button onClick={toggleColorMode}>
								{colorMode === 'light' ? (
									<MoonIcon />
								) : (
									<SunIcon />
								)}
							</Button> */}
					<Button
						variant='outlined'
						cursor='pointer'
						onClick={handleClick}>
						<Avatar
							size='sm'
							src={
								'https://avatars.dicebear.com/api/male/username.svg'
							}
						/>
					</Button>
					<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
						<Stack direction='column' p={2} spacing={2}>
							<Avatar
								size='xl'
								src={
									'https://avatars.dicebear.com/api/male/username.svg'
								}
							/>

							<Typography level='body1' component='strong'>
								Username
							</Typography>
							<MenuList alignItems='center'>
								<MenuItem onClick={handleClose}>
									Your Servers
								</MenuItem>
								<MenuItem onClick={handleClose}>
									Account Settings
								</MenuItem>
								<MenuItem onClick={handleClose}>
									Logout
								</MenuItem>
							</MenuList>
						</Stack>
					</Menu>
				</Stack>
			</Stack>
		</Sheet>
	);
}

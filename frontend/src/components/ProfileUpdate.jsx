import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Avatar from '@mui/joy/Avatar';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/material/Stack';
import Divider from '@mui/joy/Divider';
import Navbar from './Navbar';
import { Posts } from './Posts';
import { GiAbstract036 } from 'react-icons/gi';
import { FormControl, Grid, TextareaAutosize, TextField } from '@mui/material';
import Image from 'material-ui-image'
import post from './Post'
import { spacing } from '@mui/system';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';




const ProfileUpdate = () =>  {
	const [images, setImages] = useState([]);
	const [imageURLs, setImageURLs] = useState([]);

	useEffect(() => {
		if (images.length <1) return;
		const newImageUrls = [];
		images.forEach( image => newImageUrls.push(URL.createObjectURL(image)));
		setImageURLs(newImageUrls);
	}, [images]);

	function onImageChange(e){
		setImages([...e.target.files]);
	}

	return (
		<Box>
			 <Navbar></Navbar>
			

				<Stack direction='column'
					alignItems='center'
					justifyContent='center'
					width={'10%%'}
					padding={2}>
					<Box borderWidth='1px' borderRadius='lg' px={4} py={3} boxShadow={'md'}>
							Avatar
							<input type="file" multiple accept="image/*" onChange={onImageChange} />
							{ imageURLs.map(avatarSrc => <img src = {avatarSrc} />)}
					</Box>
					<Box borderWidth='1px' borderRadius='lg' px={4} py={3} boxShadow={'md'}>
							backdrop
							<input type="file" multiple accept="image/*" onChange={onImageChange} />
							{ imageURLs.map(backSrc => <img src = {backSrc} />)}
					</Box>
					<Box borderWidth='1px' borderRadius='lg' px={4} py={3} boxShadow={'md'}>
							
							{/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
					</Box>
				</Stack>				
		</Box>
	
	);
}

export default ProfileUpdate;
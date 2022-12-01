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
import { FormControl, Grid, MenuItem, TextareaAutosize, TextField } from '@mui/material';
import Image from 'material-ui-image'
import post from './Post'
import { spacing } from '@mui/system';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import { Link } from 'react-router-dom';

const ProfileUpdate = () =>  {
	// const [images, setImages] = useState([]);
	// const [imageURLs, setImageURLs] = useState([]);
	const [files, setFiles] = useState([]);
	
	function onFileUpload(event) {
	  event.preventDefault();
	 
	  let id = event.target.id;
	  
	  let file_reader = new FileReader();
	 
	  let file = event.target.files[0];
	  file_reader.onload = () => {
	
		setFiles([...files, { file_id: id, uploaded_file: file_reader.result }]);
	  };
	  file_reader.readAsDataURL(file);
	}
	
	function handleSubmit(e) {
	  e.preventDefault();
	  console.log(files);
	}
	
	const [enabled, setEnabled] = useState(false);
	const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
	useEffect(() => {
        if (images.length <1) return;
        const newImageUrls = [];
        images.forEach( image => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    }, [images]);

	// function onImageChange(e){
	// 	setImages([...e.target.files]);
	// }

	return (
		<Box>
			 <Navbar></Navbar>
			
			
					
					
					

				<form onSubmit={handleSubmit} className="upload--container">
      {/* <h1> Multiple File Inputs with Signle Submit Button </h1> */}


	  <Stack direction='column'
					alignItems='center'
					justifyContent='center'
					width={'10%%'}
					padding={2}>

	<Box borderWidth='1px' borderRadius='lg' px={4} py={3} boxShadow={'md'}>
		<Stack spacing={4}  alignItems='center' justify='center'  >
			<Box borderWidth='1px' borderRadius='lg' px={4} py={3} boxShadow={'md'}>
				Avatar
			</Box>

			<Box borderWidth='1px' borderRadius='lg' px={4} py={3} boxShadow={'md'}>
        <input
          onChange={onFileUpload}
          id={1}
          type="file"
        />
		{ imageURLs.map(avatarSrc => <img src = {avatarSrc} />)}
      </Box>
	  
</Stack>
</Box>



	  </Stack>
	

<Stack direction='column'
					alignItems='center'
					justifyContent='center'
					width={'10%%'}
					padding={2}>

	<Box borderWidth='1px' borderRadius='lg' px={4} py={3} boxShadow={'md'}>
		<Stack spacing={4}  alignItems='center' justify='center'  >
			<Box borderWidth='1px' borderRadius='lg' px={4} py={3} boxShadow={'md'}>
				Backdrop
			</Box>

			<Box borderWidth='1px' borderRadius='lg' px={4} py={3} boxShadow={'md'}>
				
        <input
          onChange={onFileUpload}
          id={2}
        //   accept=".jpeg, .pdf"
          type="file"
        />
 
      </Box>
	  
</Stack>
</Box>
</Stack>
<Stack spacing={4}  alignItems='center' justify='center'  >    

		<Button variant="contained" 
		 href="/profile"
		size="large"  type="submit">
		
			Submit</Button>
	
      </Stack>
    </form>
		</Box>
	
	);
}

export default ProfileUpdate;
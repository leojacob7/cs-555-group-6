import React, { useState } from 'react';
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
import FileUploadComponent from './fileUpload.component';


const ImgUpload =({
	onChange,
	src
  })=>
	<label htmlFor="photo-upload" className="custom-file-upload fas">
	  <div className="img-wrap img-upload" >
		<img for="photo-upload" src={src}/>
	  </div>
	  <input id="photo-upload" type="file" onChange={onChange}/> 
	</label>

const Name =({
	onChange,
	value
  })=>
	<div className="field">
	  <label htmlFor="name">
		name:
	  </label>
	  <input 
		id="name" 
		type="text" 
		onChange={onChange} 
		maxlength="25" 
		value={value} 
		placeholder="Alexa" 
		required/>
	</div>

const Status =({
	onChange,
	value
  })=>
	<div className="field">
	  <label htmlFor="status">
		status:
	  </label>
	  <input 
		id="status" 
		type="text" 
		onChange={onChange} 
		maxLength="35" 
		value={value} 
		placeholder="It's a nice day!" 
		required/>
	</div>

const test_posts = [
	{
		id: 1,
		title: 'Test post',
		posted: moment(Date.now()),
		user: {
			id: 1,
			firstName: 'John',
			lastName: 'Doe',
			username: 'jdoe',
		},
	},
	{
		id: 2,
		title: "What's up?",
		posted: moment(Date.now()),
		user: {
			id: 1,
			firstName: 'John',
			lastName: 'Doe',
			username: 'jdoe',
		},
	},
	{
		id: 3,
		title: 'Organizing a meeting today',
		posted: moment(Date.now()),
		user: {
			id: 1,
			firstName: 'John',
			lastName: 'Doe',
			username: 'jdoe',
		},
	},
	{
		id: 4,
		title: 'How was your day?',
		posted: moment(Date.now()),
		user: {
			id: 1,
			firstName: 'John',
			lastName: 'Doe',
			username: 'jdoe',
		},
	},
];

const Edit =({
	onSubmit,
	children,
  })=>
	<div className="card">
	  <form onSubmit={onSubmit}>
		<h1>Profile Card</h1>
		  {children}
		<button type="submit" className="save">Save </button>
	  </form>
	</div>

class CardProfile extends React.Component {
	state = {
	  file: '',
	  imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
	  name:'',
	  status:'',
	  active: 'edit'
	}
  
	photoUpload = e =>{
	  e.preventDefault();
	  const reader = new FileReader();
	  const file = e.target.files[0];
	  reader.onloadend = () => {
		this.setState({
		  file: file,
		  imagePreviewUrl: reader.result
		});
	  }
	  reader.readAsDataURL(file);
	}
	editName = e =>{
	  const name = e.target.value;
	  this.setState({
		name,
	  });
	}
	
	editStatus = e => {
	  const status = e.target.value;
	  this.setState({
		status,
	  });
	}
	
	handleSubmit= e =>{
	  e.preventDefault();
	  let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
	  this.setState({
		active: activeP,
	  })
	}
	
	render() {
	  const {imagePreviewUrl, 
			 name, 
			 status, 
			 active} = this.state;
	  return (
		<div>
		  {(active === 'edit')?(
			<Edit onSubmit={this.handleSubmit}>
			  <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
			  <Name onChange={this.editName} value={name}/>
			  <Status onChange={this.editStatus} value={status}/>
			</Edit>
		  ):(
			<Profile 
			  onSubmit={this.handleSubmit} 
			  src={imagePreviewUrl} 
			  name={name} 
			  status={status}/>)}
		  
		</div>
	  )
	}
  }


const Profile =({
	onSubmit,
	src,
	name,
	status,
  })=> {
	

	let [text, setText] = useState()
	const [posts, setPosts] = useState([...test_posts]);
	return (
		<Box>
			 <Navbar></Navbar>
			<Stack direction='row'
				spacing={1}
				alignItems='flex-start'
				justifyContent='center'
				padding={2}>
					
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>Profile Card</h1>
      <label className="custom-file-upload fas">
        <div className="img-wrap" >
          <img for="photo-upload" src={src}/>
        </div>
      </label>
      <div className="name">{name}</div>
      <div className="status">{status}</div>
      <button type="submit" className="edit">Edit Profile </button>
    </form>
  </div>


  


				{/* <Stack direction='column'
					alignItems='center'
					justifyContent='center'
					width={'10%%'}
					padding={2}>
					<Box borderWidth='1px' borderRadius='lg' px={4} py={3} boxShadow={'md'}>
						<Box borderWidth='1px' borderRadius='lg'
							component="img"
							sx={{
								height: 150,
								width: 250,
								}}
							alt="BackgroundImage"
							src='https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
						/>
							<Stack alignItems='center' justify='center' mt={-10} >
								<Avatar
									src={
										'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
									}
									sx={{ width: 120, height: 120 }}
									alt={'Author'}
								/>
								<Stack alignItems='center' justify='center' spacing={1} divider={<Divider orientation="horizontal" flexItem /> } >
									<Typography level='h2' component='strong'>
										John Doe
									</Typography>
									<Box> 
										Frontend Developer
									</Box>
								
								</Stack>

							</Stack>
						
					</Box>
				</Stack> */}
				<Stack padding={1} sx={{ width: '50%' }}>
					<Box borderWidth='1px' borderRadius='lg' boxShadow={'md'} sx={{ p: 2 }} px={4} alignItems='center'>
					<TextareaAutosize minRows={6} style={{ width:700 }} id="text-edit" value={text} placeholder="Tell me about Yourself" onChange={(event) =>setText(event.target.value)}
      				></TextareaAutosize>
					</Box>
					<Box sx={{ width: '100%' }} py={2}>
							<Posts posts={posts} />
					</Box>
					
				</Stack>
				
			
					<Stack direction='column' padding={1} alignItems='center' justify='center' spacing={3}>
					<Box borderWidth='1px' borderRadius='lg'  px={4} py={2}  boxShadow={'md'}>
					<Typography level='h2' component='strong'>
						Karma : 2,199
					</Typography>
					</Box>
					<Divider orientation="horizontal" flexItem />
					<Box borderWidth='1px' borderRadius='lg'  px={4} py={2}  boxShadow={'md'}>
					<Stack direction='column' padding={1} alignItems='center' justify='center' spacing={1}>	
					<Typography level='h4' component='strong'>
						Rewards
					</Typography>
					<Grid container spacing={1}>
 						<Grid item xs={6}>
							<Box borderWidth='1px' borderRadius='lg'  px={2} py={2}  boxShadow={'md'}>
								<AcUnitRoundedIcon/>
							</Box>
						</Grid>
						<Grid item xs={6}>
							<Box borderWidth='1px' borderRadius='lg'  px={2} py={2}  boxShadow={'md'}>
								<EmojiEventsRoundedIcon/> 
							</Box>
						</Grid>
						<Grid item xs={6}>
							<Box borderWidth='1px' borderRadius='lg'  px={2} py={2}  boxShadow={'md'}>
								<StarsRoundedIcon/>
							</Box>
						</Grid>
						<Grid item xs={6}>
							<Box borderWidth='1px' borderRadius='lg'  px={2} py={2}  boxShadow={'md'}>
								<MilitaryTechRoundedIcon/>
							</Box>
						</Grid>
					</Grid>
					</Stack>	
					</Box>
					
					</Stack>
					
			</Stack>
		</Box>
	
	);
}

export default Profile;
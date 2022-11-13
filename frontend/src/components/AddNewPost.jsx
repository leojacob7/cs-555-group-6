import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import FileUploadComponent from './fileUpload.component';
import { Box, Divider, Typography } from '@mui/joy';

const AddNewPost = () => {
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [isSaving, setSaving] = useState(false);

	const handleSubmit = async () => {
		const date = new Date();

		setOpen(false);
		setTitle('');
	};

	return (
		<>
			<Button
				variant='solid'
				color='primary'
				onClick={() => setOpen(true)}>
				Add new post
			</Button>

			<Modal onClose={() => setOpen(false)} open={open}>
				<ModalDialog aria-labelledby='modal-title'>
					<Stack direction='column' spacing={4}>
						<Stack
							direction='row'
							alignItems='flex-start'
							justifyContent='flex-start'>
							<Typography
								id='modal-title'
								level='h4'
								component='h5'
								p={0}>
								Add new post
							</Typography>
							<ModalClose />
						</Stack>

						<Divider />
						<Box>
							<FormControl id='post-title'>
								<FormLabel required>Post title</FormLabel>
								<Textarea
									value={title}
									minRows={1}
									required
									onChange={(e) => setTitle(e.target.value)}
								/>
							</FormControl>
							<FormControl id='post-body'>
								<FormLabel required>Post Body</FormLabel>
								<Textarea
									value={title}
									minRows={3}
									// required
									// onChange={(e) => setTitle(e.target.value)}
								/>
							</FormControl>

							<FormControl id='post-tag'>
								<FormLabel required>Post tag</FormLabel>
								<Textarea
									value={title}
									minRows={1}
									// required
									// onChange={(e) => setTitle(e.target.value)}
								/>
							</FormControl>
						</Box>

						<Box>
							<Button
								onClick={handleSubmit}
								colorScheme='blue'
								disabled={!title.trim()}
								isLoading={isSaving}>
								Save
							</Button>
						</Box>
					</Stack>
				</ModalDialog>
			</Modal>
		</>
	);
};

export default AddNewPost;

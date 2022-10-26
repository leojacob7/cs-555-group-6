import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import { Box, Typography } from '@mui/joy';

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
							alignItems='flex-end'
							justifyContent='flex-start'>
							<Typography id='modal-title' level='h3'>
								Add new post
							</Typography>
							<ModalClose />
						</Stack>

						<Box>
							<FormControl id='post-title'>
								<FormLabel required>Post title</FormLabel>
								<Textarea
									value={title}
									required
									onChange={(e) => setTitle(e.target.value)}
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

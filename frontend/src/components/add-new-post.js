import {
    Button,
    FormControl,
    FormLabel,
    Textarea,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    HStack,
    useDisclosure,
  } from "@chakra-ui/react";
  import React, { useState, useEffect } from "react";

  
  const AddNewPost = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [title, setTitle] = useState("");
    const [isSaving, setSaving] = useState(false);
  
    const handleSubmit = async () => {
      const date = new Date();
  
      
  
      onClose();
      setTitle("");
    };
  
    return (
      <>
        <Button onClick={onOpen} colorScheme="blue">
          Add new post
        </Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay>
            <ModalContent>
              <ModalHeader>Add new post</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl id="post-title">
                  <FormLabel>Post title</FormLabel>
                  <Textarea
                    type="post-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <HStack spacing={4}>
                  <Button onClick={onClose}>Close</Button>
                  <Button
                    onClick={handleSubmit}
                    colorScheme="blue"
                    disabled={!title.trim()}
                    isLoading={isSaving}
                  >
                    Save
                  </Button>
                </HStack>
              </ModalFooter>
            </ModalContent>
          </ModalOverlay>
        </Modal>
      </>
    );
  };
  
  export default AddNewPost;
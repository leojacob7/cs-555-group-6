import Login from './components/Login';
import SignUp from './components/Signup';
import { Profile } from './components/Profile';
import logo from './logo.svg';
import { Container, Flex, Spinner, VStack, ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Post from "./components/post";
import './App.css';
import Navbar from "./components/navbar";

const App = () => {
	const [posts, setPosts] = useState([]);
  
	useEffect(() => {
	  // Hook to handle the initial fetching of posts
  
	  
	}, []);
  
	return (
	  <>
		<Navbar />
		<Container maxW="md" centerContent p={8}>
		  <VStack spacing={8} w="100%">
			{posts.map((post) => (
			  <Post post={post} key={post.id} />
			))}
		  </VStack>
		</Container>
	  </>
	);
  };

export default App;

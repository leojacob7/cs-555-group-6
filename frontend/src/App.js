import Login from './components/Login';
import { ChakraProvider } from '@chakra-ui/react';
import SignUp from './components/Signup';
import { Profile } from './components/Profile';

function App() {
	return (
		<ChakraProvider>
			{/* <Login /> */}
			<Profile/>
		</ChakraProvider>
	);
}

export default App;

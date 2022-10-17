import Login from './components/Login';
import { ChakraProvider } from '@chakra-ui/react';
import SignUp from './components/Signup';

function App() {
	return (
		<ChakraProvider>
			<Login />
		</ChakraProvider>
	);
}

export default App;

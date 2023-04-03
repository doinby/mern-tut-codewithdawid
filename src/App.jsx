import { Route, Routes } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
	return (
		<Routes>
			<Route element={<HomeLayout />}>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Route>
		</Routes>
	);
}

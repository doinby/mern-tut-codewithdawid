import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function HomeLayout() {
	return (
		<>
			<Header className='flex justify-between container mx-auto' />
			<Outlet />
			<Footer className='shrink container mx-auto' />
		</>
	);
}

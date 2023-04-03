import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function HomeLayout() {
	return (
		<div className='h-full flex flex-col'>
			<Header className='flex justify-between container mx-auto px-24 py-8' />
			<main className='grow shrink-0 basis-auto container mx-auto flex justify-center px-24 py-8'>
				<Outlet />
			</main>
			<Footer className='shrink' />
		</div>
	);
}

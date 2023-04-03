import { Link } from 'react-router-dom';

export default function Header({ className }) {
	return (
		<header className={className}>
			<Link to='/'>
				<h1 className='font-bold text-2xl'>My Blog</h1>
			</Link>
			<nav className='flex gap-8'>
				<Link to='/login'>Login</Link>
				<Link to='/register'>Register</Link>
			</nav>
		</header>
	);
}

import { useForm } from 'react-hook-form';

export default function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	async function onSubmit(data) {
		await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' },
		});
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='self-center justify-self-center flex flex-col gap-6'>
			<input
				type='email'
				placeholder='Email'
				{...register('email', { required: true })}
			/>
			<input
				type='password'
				placeholder='Password'
				{...register('password', { required: true })}
			/>

			<button type='submit' className='text-white bg-green-600'>
				Submit
			</button>
		</form>
	);
}

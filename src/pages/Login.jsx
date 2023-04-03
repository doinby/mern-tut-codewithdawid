import { useForm } from 'react-hook-form';

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='self-center justify-self-center flex flex-col gap-6'>
			<input
				type='email'
				placeholder='Email'
				{...register('Email', { required: true })}
			/>
			<input
				type='password'
				placeholder='Password'
				{...register('Password', { required: true })}
			/>

			<button type='submit' className='text-white bg-green-600'>
				Submit
			</button>
		</form>
	);
}

export default function Home() {
	return (
		<article className='flex items-start gap-6'>
			<img
				className='h-[200px] object-cover'
				alt='test thumbnail'
				src='/thumbnail.jpg'
			/>
			<div className='flex flex-col justify-between'>
				<div>
					<h3 className='text-2xl font-bold mb-2'>Blog Post Title</h3>
					<p className='text-sm'>
						<b>Author Name</b> <span>2023-28-03</span>
					</p>
				</div>
				<p id='article-description'>
					Far far away, behind the word mountains, far from the countries Vokalia and
					Consonantia, there live the blind texts. Separated they live in
					Bookmarksgrove right at the coast of the Semantics, a large language ocean.
					A small river named Duden flows by their place and supplies it with the
					necessary regelialia. It is a paradisematic country, in which roasted parts
				</p>
			</div>
		</article>
	);
}

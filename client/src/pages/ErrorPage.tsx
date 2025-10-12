const ErrorPage = () => {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center'>
			<h1 className='mb-4 text-4xl font-bold text-red-600 md:text-5xl'>
				500 | something went wrong
			</h1>
			<p className='text-lg text-gray-700 md:text-xl'>
				We're sorry. Something went wrong when loading the data.
			</p>
		</div>
	);
};

export default ErrorPage;

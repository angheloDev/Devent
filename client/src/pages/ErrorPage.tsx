import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router';

const ErrorPage = () => {
	const [count, setCount] = useState(6);
	const navigate = useNavigate();
	const location = useLocation();
	const hasNavigationHistory = useRef(window.history.length > 1);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((prev) => {
				if (prev <= 1) {
					if (hasNavigationHistory.current && location.key !== 'default') {
						navigate(-1);
					} else {
						navigate('/', { replace: true });
					}
				}
				return prev - 1;
			});
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [navigate, location.key]);
	return (
		<div className='flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center'>
			<h1 className='mb-4 text-4xl font-bold text-red-600 md:text-5xl'>
				404 | This Page Does Not Exist
			</h1>
			<p className='text-lg text-gray-700 md:text-xl'>
				We are bringing you back in
				<span className='ml-1 text-2xl font-semibold text-red-700 md:text-3xl'>
					{count}
				</span>
			</p>
		</div>
	);
};

export default ErrorPage;

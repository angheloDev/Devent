import GradientText from '../components/GradientText';
const Loading = () => {
	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
			<div className='text-center'>
				<GradientText
					colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
					animationSpeed={3}
					showBorder={false}
					className='text-4xl font-bold'
				>
					Loading...
				</GradientText>
			</div>
		</div>
	);
};

export default Loading;

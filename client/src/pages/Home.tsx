import {
	EventSearch,
	HeroSection,
	MustSeeEvents,
} from '@/components/component-exporter';

const Home = () => {
	return (
		<>
			<div className='min-h-screen bg-[#0D1117] text-white'>
				<HeroSection />
				<EventSearch />
				<MustSeeEvents />
			</div>
		</>
	);
};

export default Home;

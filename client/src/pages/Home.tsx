import {
	EventSearch,
	HeroSection,
	MustSeeEvents,
} from '@/components/component-exporter';

const Home = () => {
	return (
		<>
			<div className='min-h-screen bg-[#0F172A] text-white'>
				<HeroSection />
				<EventSearch />
				<MustSeeEvents />
			</div>
		</>
	);
};

export default Home;

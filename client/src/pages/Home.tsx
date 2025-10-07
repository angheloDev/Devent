import {
	EventSearch,
	HeroSection,
	EventsList,
} from '@/components/component-exporter';

const Home = () => {
	return (
		<>
			<div className='min-h-screen bg-[#0F172A] text-white'>
				<HeroSection />
				<EventSearch />
				<EventsList />
			</div>
		</>
	);
};

export default Home;

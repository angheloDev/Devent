import {
	ContactSection,
	DapatPilionKoNimo,
	MissionSection,
	StatsSection,
	TeamSection,
} from '@/components/component-exporter';

const About = () => {
	return (
		<div className='min-h-screen bg-[#0F172A] text-white pt-10 mt-[58px]'>
			<header className='bg-[#1f1b2e] md:bg-transparent font-gothicA1'>
				<div className='py-10 md:py-20 text-center px-4 md:px-0'>
					<h1 className='text-3xl md:text-5xl font-extrabold text-[#b99fff] mb-4'>
						About DEVENT
					</h1>
					<p className='max-w-3xl mx-auto text-lg text-gray-300'>
						Your gateway to discovering amazing events, connecting with vibrant
						communities, and creating unforgettable memories
					</p>
				</div>
			</header>

			<main className='px-4 md:px-6'>
				<MissionSection />
				<DapatPilionKoNimo />
				<StatsSection />
				<TeamSection />
				<ContactSection />
			</main>
		</div>
	);
};

export default About;

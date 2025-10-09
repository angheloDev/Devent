import { team } from '@/data/mock-data';

const TeamSection = () => {
	return (
		<section className='py-12 md:py-20 text-center font-gothicA1'>
			<h3 className='text-4xl font-extrabold mb-8'>Meet Our Team</h3>

			<div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4'>
				{team.map((m) => (
					<div key={m.id} className='flex flex-col items-center hover:scale-105'>
						{/* <div className='w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-400 mb-[-40px] z-10 shadow-lg'></div> */}
						<div className='relative mb-[-40px]'>
							<img
								src={m.nawng}
								alt={m.name}
								className='w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-gray-500 shadow-lg'
							/>
						</div>
						<div className='w-full bg-[#D9D9D9] rounded-xl pt-16 pb-6 px-4 shadow-inner max-w-xs'>
							<h4 className='text-2xl font-semibold text-[#0f1724]'>{m.name}</h4>
							<p className='text-lg text-gray-600 mt-1'>{m.role}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default TeamSection;

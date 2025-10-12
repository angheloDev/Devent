import { stats } from '@/data/mock-data';

const StatsSection = () => {
	return (
		<section className='py-8 w-screen -ml-6 md:py-12'>
			<div className=''>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center'>
					{stats.map((s, idx) => (
						<div
							key={s.id}
							className={`py-6 md:h-[12rem] md:py-8 rounded-none hover:text-[#1454ea] transition-all ${
								idx % 2 === 0 ? 'bg-[#423b4f]' : 'bg-[#312b3d]'
							}`}
						>
							<div className='text-3xl md:text-5xl lg:text-8xl font-gothicA1 font-bold'>
								{s.value}
							</div>
							<div className='text-xl text-gray-300 mt-1'>{s.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default StatsSection;

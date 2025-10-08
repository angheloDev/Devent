import { features } from '@/data/mock-data';

const DapatPilionKoNimo = () => {
	return (
		<section className='py-12 md:py-20'>
			<h3 className='text-2xl md:text-3xl font-extrabold text-center mb-8 font-gothicA1'>
				Why Choose DEVENT
			</h3>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto font-montserat'>
				{features.map((f) => (
					<div
						key={f.id}
						className='bg-[#1b2030] border border-[#2b2f43] rounded-xl p-6 text-gray-200 shadow-inner hover:scale-105'
					>
						<h4 className='text-lg font-semibold mb-2'>{f.title}</h4>
						<p className=' text-gray-400 leading-snug'>{f.subtitle}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default DapatPilionKoNimo;

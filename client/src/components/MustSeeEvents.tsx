import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { events } from '@/data/mock-data';

const MustSeeEvents = () => {
	return (
		<section className='max-w-[100rem] mx-auto px-7 md:px-10 py-12 font-montserat'>
			<h2 className='text-2xl md:text-3xl font-semibold mb-8 text-white'>
				Must-See Events
			</h2>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
				{events.map((event) => (
					<Card
						key={event.id}
						className='bg-gradient-to-b from-[#7B6EFF] to-[#2A2F48] rounded-4xl shadow-lg overflow-hidden border-none text-gray-100 pt-0'
					>
						<div className='h-[13rem] bg-gradient-to-r from-[#9993FF] to-[#492779] w-full'>
							<div className='flex justify-end mr-6 mt-6'>
								<span
									className={`px-3 py-1 text-xs rounded-full font-semibold ${
										event.tag === 'Concert'
											? 'bg-pink-500/80'
											: event.tag === 'Tech'
											? 'bg-blue-500/80'
											: 'bg-green-500/80'
									}`}
								>
									{event.tag}
								</span>
							</div>
						</div>
						<CardContent className='p-5'>
							<h3 className='text-lg font-semibold'>{event.title}</h3>
							<p className='text-sm text-gray-300 mt-1'>{event.date}</p>
							<p className='text-sm text-gray-300'>{event.location}</p>
							<p className='text-sm text-gray-300 mb-3'>{event.time}</p>

							<div className='flex items-center justify-between mt-4'>
								<p className='text-lg font-semibold'>{event.price}</p>
								<Button className='bg-[#3C4B72] hover:bg-[#56618a] text-gray-200'>
									View Details
								</Button>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};

export default MustSeeEvents;

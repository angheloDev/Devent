import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { events } from '@/data/mock-data';
import { useLocation, useNavigate } from 'react-router';

const EventsList = () => {
	const location: string = useLocation().pathname;
	const navigate = useNavigate();
	return (
		<div className='bg-[#0F172A]'>
			<section className='max-w-[100rem] mx-auto px-7 md:px-10 py-12 font-montserat'>
				{location === '/' && (
					<h2 className='text-2xl md:text-3xl font-semibold mb-8 text-white'>
						Must-See Events
					</h2>
				)}

				<div
					className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ${
						location !== '/' && 'mt-5'
					}`}
				>
					{events.map((event) => (
						<Card
							key={event.id}
							className='bg-gradient-to-b from-[#7B6EFF] to-[#2A2F48] rounded-4xl shadow-lg overflow-hidden border-none text-gray-100 pt-0'
						>
							<div className='h-[13rem] bg-gradient-to-r from-[#9993FF] to-[#492779] w-full'>
								<div className='flex justify-end mr-6 mt-6 '>
									<span
										className={`px-3 py-1 text-xs rounded-full font-semibold hover:scale-110 ${
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

								<div className='border-t border-gray-400 my-4'></div>

								<div className='flex items-center justify-between mt-4'>
									<p className='text-lg font-semibold'>{event.price}</p>
									<Button
										className='bg-gradient-to-b from-[#6B5BFF] hover:bg-gradient-to-t to-[#2C2F48] text-gray-200 cursor-pointer rounded-lg'
										onClick={() => {
											if (location === '/') {
												navigate(`events/${event.id}`);
											} else navigate(`${event.id}`);
										}}
									>
										View Details
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</section>
		</div>
	);
};

export default EventsList;

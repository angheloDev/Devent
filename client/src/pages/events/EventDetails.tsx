import { Button } from '@/components/ui/button';
import { useLoaderData, useNavigate } from 'react-router';
import type { Event } from '@/data/mock-data';

const EventDetails = () => {
	const event: Event = useLoaderData();
	const navigate = useNavigate();
	return (
		<section className='mt-15 bg-[#0C1424] text-white min-h-screen flex flex-col'>
			<div className='relative w-full h-[300px] md:h-[400px] lg:h-[450px]'>
				<img
					src={event.image}
					alt='event image supposed ni'
					className='w-full h-full object-cover'
				/>
				<div className='absolute inset-0 bg-black/20'></div>
				<h1 className='absolute bottom-6 left-4 md:left-10 text-3xl md:text-5xl font-bold'>
					{event.title}
				</h1>
			</div>

			<div className='flex-1 flex flex-col px-4 sm:px-8 md:px-16 py-10 gap-6'>
				<div>
					<h2 className='text-2xl md:text-3xl font-bold mb-4'>
						About this Event
					</h2>

					<div className='text-gray-300 space-y-1'>
						<p>{event.date}</p>
						<p>{event.location}</p>
						<p>{event.time}</p>
						<p className='font-semibold text-white'>
							Ticket Price:{' '}
							<span className='text-[#FFD700]'>₱{event.price}</span>
						</p>
					</div>
				</div>

				<hr className='border-gray-600 my-4' />

				<p className='text-gray-300 text-center leading-relaxed max-w-full'>
					{/* Web Dev Summit 2025 is a gathering for developers, designers, and tech
					enthusiasts who want to learn the latest trends in web development.
					The event brings together industry experts to share insights on modern
					frameworks, tools, and best practices. It is ideal for students,
					professionals, and startups looking to improve their skills, network
					with peers, and explore new opportunities in the field of web
					development. */}
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
					ratione sed dolorum eius eum, ducimus expedita fugit ut totam nesciunt
					reprehenderit assumenda, repellat voluptas veritatis nihil voluptate,
					exercitationem consequuntur quos minus possimus ipsum! Quae
					reprehenderit consequuntur corrupti obcaecati voluptatum maxime quos
					incidunt itaque maiores. Voluptate fuga pariatur eveniet, illum
					tempore adipisci laboriosam rem, non laudantium dolore hic similique
					deserunt architecto labore est! Illo alias atque, odio earum
					reprehenderit doloribus dicta quasi nisi ea laboriosam, rerum tempore
					corrupti eligendi amet fuga accusamus? Accusamus et rem enim pariatur
					suscipit ratione magnam, fugit illum maiores saepe ad sequi iste ipsum
					earum facere ut.
				</p>

				<div className='flex flex-col sm:flex-row gap-4 md:gap-30  justify-center mt-8'>
					<Button
						className='cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition text-white px-6 py-2 rounded-md'
						onClick={() => navigate(`/events/map/${event.id}`)}
					>
						Open Map
					</Button>
					<Button
						variant='outline'
						className='border border-gray-500 cursor-pointer bg-gray-800 px-6 py-2 rounded-md '
						onClick={() => navigate('/events')}
					>
						Back to List
					</Button>
				</div>
			</div>
		</section>
	);
};

export default EventDetails;

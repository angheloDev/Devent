// import { Button } from '@/components/ui/button';
// import { ChevronLeft } from 'lucide-react';
// import { useNavigate } from 'react-router';
// import { useLoaderData } from 'react-router';
// import type { Event } from '@/data/mock-data';

// const EventMap = () => {
// 	const navigate = useNavigate();
// 	const event: Event = useLoaderData();
// 	return (
// 		<div className='mt-[58px] min-h-screen bg-[#0C1424] text-white'>
// 			<div className='p-6'>
// 				<button className='text-white mt-6'>
// 					<ChevronLeft
// 						className='w-11 h-11 cursor-pointer'
// 						onClick={() => navigate(-1)}
// 					/>
// 				</button>
// 			</div>

// 			<div className='px-6 pb-8 ml-7'>
// 				<h1 className='text-4xl font-bold mb-8 font-gothicA1'>{event.title}</h1>

// 				<div className='space-y-1 text-lg font-montserat ml-5'>
// 					<p>{event.location}</p>
// 					{/* <p>{event.location}</p> */}
// 					<p>2,000 seats</p>
// 					<p>Parking available, Accessible for PWD</p>
// 				</div>
// 			</div>

// 			<div className='border-t border-gray-700 mx-6'></div>

// 			<div className='px-6 pt-8 pb-6'>
// 				<h2 className='text-2xl font-semibold mb-4 font-gothicA1'>
// 					Event Location
// 				</h2>

// 				<div className='relative w-full h-[480px] rounded-lg overflow-hidden'>
// 					<iframe
// 						src='https://www.openstreetmap.org/export/embed.html?bbox=121.01800%2C14.55000%2C121.05000%2C14.57500&layer=mapnik&marker=14.56250,121.03400'
// 						className='w-full h-full'
// 						style={{ border: 0 }}
// 						allowFullScreen
// 						loading='lazy'
// 						title='Event Location Map'
// 					/>
// 				</div>
// 			</div>

// 			<div className='flex justify-center pb-12'>
// 				<Button
// 					className='bg-[#374151] hover:bg-[#4b5563] hover:text-gray-300 px-8 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer'
// 					variant='outline'
// 					onClick={() => navigate('/events')}
// 				>
// 					Back to List
// 				</Button>
// 			</div>
// 		</div>
// 	);
// };

// export default EventMap;

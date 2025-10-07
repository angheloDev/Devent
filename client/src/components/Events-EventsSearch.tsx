import { Button } from './ui/button';
import { Input } from './ui/input';

const EventsEventsSearch = () => {
	return (
		<div className='w-full bg-[#1A1F2C] border-4 border-x-0 border-[#3C4B72] py-6 px-12 shadow-lg font-montserat'>
			<div className='mx-4 md:mx-auto max-w-4xl '>
				<p className='text-gray-400'>Search</p>
				<div className='flex flex-col md:flex-row gap-3 justify-center mt-1'>
					<Input
						placeholder='events...'
						className='bg-[#252B3A] border-none text-gray-300 w-full border-gray-500 rounded-2xl'
					/>
					<div className='flex gap-2'>
						{/* <Button className='bg-[#6B5BFF] text-white hover:bg-[#5948d8] w-full md:w-auto'>
						Search
					</Button> */}
						<Button
							variant='outline'
							className='text-gray-400 border-gray-500 w-full md:w-auto bg-[#252B3A] cursor-pointer'
						>
							All
						</Button>
					</div>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4'>
					<Input
						placeholder='Event Type'
						className='bg-[#252B3A] border-none text-gray-300 rounded-2xl'
					/>
					<Input
						placeholder='Month'
						className='bg-[#252B3A] border-none text-gray-300 rounded-2xl'
					/>
					<Input
						placeholder='Near City'
						className='bg-[#252B3A] border-none text-gray-300 rounded-2xl'
					/>
					<Input
						placeholder='Date Range'
						className='bg-[#252B3A] border-none text-gray-300 rounded-2xl'
					/>
				</div>
			</div>
		</div>
	);
};

export default EventsEventsSearch;

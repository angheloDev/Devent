import { Button } from '../ui/button';
import { Input } from '../ui/input';

type EventSearchPropTypes = {
	searchTerm: string;
	eventType: string;
	selectedDate: string;
	nearCity: string;
	dateRange: string;
	onSearchChange: (value: string) => void;
	onEventTypeChange: (value: string) => void;
	onDateChange: (value: string) => void;
	onCityChange: (value: string) => void;
	onDateRangeChange: (value: string) => void;
	onClearFilters: () => void;
};
const EventsEventsSearch = ({
	searchTerm,
	eventType,
	selectedDate,
	nearCity,
	dateRange,
	onSearchChange,
	onEventTypeChange,
	onDateChange,
	onCityChange,
	onDateRangeChange,
	onClearFilters,
}: EventSearchPropTypes) => {
	return (
		<div className='w-full bg-[#1A1F2C] border-4 border-x-0 border-[#3C4B72] py-6 px-12 shadow-lg font-montserat'>
			<div className='mx-4 md:mx-auto max-w-4xl '>
				<div className='flex flex-col md:flex-row gap-3 justify-center mt-1'>
					<Input
						type='text'
						placeholder='events...'
						value={searchTerm}
						onChange={(e) => onSearchChange(e.target.value)}
						className='bg-[#252B3A] border-none text-gray-300 w-full border-gray-500 rounded-2xl'
					/>
					<div className='flex gap-2'>
						<Button
							variant='outline'
							onClick={onClearFilters}
							className='text-gray-400 border-gray-500 w-full md:w-auto bg-[#252B3A] cursor-pointer hover:bg-[#ebeef3]'
						>
							Clear All
						</Button>
					</div>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4'>
					<Input
						type='text'
						placeholder='Event Type (Concert, Tech, Sports)'
						value={eventType}
						onChange={(e) => onEventTypeChange(e.target.value)}
						className='bg-[#252B3A] border-none text-gray-300 rounded-2xl'
					/>
					<Input
						type='date'
						// placeholder='Month'
						value={selectedDate}
						onChange={(e) => onDateChange(e.target.value)}
						className='bg-[#252B3A] border-none text-gray-300 rounded-2xl'
					/>
					<Input
						type='text'
						placeholder='Near City'
						value={nearCity}
						onChange={(e) => onCityChange(e.target.value)}
						className='bg-[#252B3A] border-none text-gray-300 rounded-2xl'
					/>
					<Input
						type='date'
						// placeholder='Date Range'
						value={dateRange}
						onChange={(e) => onDateRangeChange(e.target.value)}
						className='bg-[#252B3A] border-none text-gray-300 rounded-2xl'
					/>
				</div>
			</div>
		</div>
	);
};

export default EventsEventsSearch;

{
	/* <Button className='bg-[#6B5BFF] text-white hover:bg-[#5948d8] w-full md:w-auto'>
Search
</Button> */
}
{
	/* <Button
	variant='outline'
	className='text-gray-400 border-gray-500 w-full md:w-auto bg-[#252B3A] cursor-pointer'
>
	All
</Button> */
}

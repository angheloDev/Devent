import { Button } from '../ui/button';
import { Input } from '../ui/input';
import type { ChangeEvent } from 'react';

interface EventSearchProps {
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
}

const EventSearch = ({
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
}: EventSearchProps) => {
	return (
		<div className='bg-[#1A1F2C] mx-4 md:mx-auto -mt-20 max-w-5xl rounded-xl border-4 border-[#3C4B72] py-6 px-12 shadow-lg font-montserat'>
			<p className='text-gray-400'>Search</p>
			<div className='flex flex-col md:flex-row gap-3 justify-center mt-1'>
				<Input
					placeholder='events...'
					value={searchTerm}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						onSearchChange(e.target.value)
					}
					className='bg-[#252B3A] border-none text-gray-300 w-full border-gray-500 rounded-2xl'
				/>
				<div className='flex gap-2'>
					<Button
						variant='outline'
						onClick={onClearFilters}
						className='text-gray-400 border-gray-500 w-full md:w-auto bg-[#252B3A] cursor-pointer hover:bg-[#3C4B72]'
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
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						onEventTypeChange(e.target.value)
					}
					className='bg-[#252B3A] border-none text-gray-300 rounded-2xl'
				/>
				<Input
					type='date'
					placeholder='Month'
					value={selectedDate}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						onDateChange(e.target.value)
					}
					className='bg-[#252B3A] border-none text-gray-300 rounded-2xl'
				/>
				<Input
					type='text'
					placeholder='Near City'
					value={nearCity}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						onCityChange(e.target.value)
					}
					className='bg-[#252B3A] border-none text-gray-300 rounded-2xl'
				/>
				<Input
					type='date'
					placeholder='Date Range'
					value={dateRange}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						onDateRangeChange(e.target.value)
					}
					className='bg-[#252B3A] border-none text-gray-300 rounded-2xl'
				/>
			</div>
		</div>
	);
};

export default EventSearch;

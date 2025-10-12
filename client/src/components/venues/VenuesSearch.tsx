import { Button } from '../ui/button';
import { Input } from '../ui/input';

type VenueSearchPropTypes = {
	searchTerm: string;
	enteredCity: string;
	venueType: string;
	enteredCapacity: string;
	setSearchTerm: (value: string) => void;
	setEnteredCity: (value: string) => void;
	SetVenuType: (value: string) => void;
	setEnteredCapacity: (value: string) => void;
	onClearFilters: () => void;
};
const VenuesSearch = ({
	searchTerm,
	enteredCity,
	venueType,
	enteredCapacity,
	setSearchTerm,
	setEnteredCity,
	SetVenuType,
	setEnteredCapacity,
	onClearFilters,
}: VenueSearchPropTypes) => {
	return (
		<div className='w-full bg-[#1A1F2C] border-4 border-x-0 border-[#3C4B72] py-6 px-12 shadow-lg font-montserat'>
			<div className='mx-4 md:mx-auto max-w-4xl '>
				<div className='flex flex-col md:flex-row gap-3 justify-center mt-1'>
					<Input
						type='text'
						placeholder='Search venue...'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className='bg-[#252B3A] border-none text-gray-300 w-full border-gray-500 rounded-2xl'
					/>
					<div className='flex gap-2'>
						{/* <Button className='bg-[#6B5BFF] text-white hover:bg-[#5948d8] w-full md:w-auto'>
						Search
					</Button> */}
						<Button
							variant='outline'
							onClick={onClearFilters}
							className='text-gray-400 border-gray-500 w-full md:w-auto bg-[#252B3A] cursor-pointer'
						>
							Clear All
						</Button>
					</div>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4'>
					<Input
						type='text'
						placeholder='City'
						value={enteredCity}
						onChange={(e) => setEnteredCity(e.target.value)}
						className='bg-[#252B3A] border-none text-gray-300 rounded-2xl'
					/>
					<Input
						type='text'
						placeholder='Type'
						value={venueType}
						onChange={(e) => SetVenuType(e.target.value)}
						className='bg-[#252B3A] border-none text-gray-300 rounded-2xl'
					/>
					<Input
						type='number'
						placeholder='Capacity'
						value={enteredCapacity}
						onChange={(e) => setEnteredCapacity(e.target.value)}
						className='bg-[#252B3A] border-none text-gray-300 rounded-2xl'
					/>
				</div>
			</div>
		</div>
	);
};

export default VenuesSearch;

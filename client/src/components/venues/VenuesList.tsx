import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { type Venue } from '../../data/mock-data';

type VenuListPropType = {
	filteredVenues: Venue[];
	isFiltering: boolean;
};
const VenuesList = ({ filteredVenues, isFiltering }: VenuListPropType) => {
	return (
		<div className='bg-[#0F172A]'>
			<section className='max-w-[100rem] mx-auto px-7 md:px-10 py-12 font-montserat'>
				{isFiltering && !filteredVenues.length ? (
					<h3 className='text-slate-400 text-center'>no matches found</h3>
				) : isFiltering ? (
					<p className='text-lg md:text-xl font-semibold mb-8'>results:</p>
				) : null}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-5'>
					{filteredVenues.map((venue) => (
						<Card
							key={venue.id}
							className='bg-[#1E293B] rounded-3xl text-gray-200 border-none shadow-md hover:shadow-lg transition-all'
						>
							<div className='px-6'>
								<h3 className='text-lg font-semibold text-white'>
									{venue.name}
								</h3>
								<p className='uppercase text-xs text-gray-400 tracking-wide'>
									{venue.type}
								</p>
							</div>
							<CardContent className='p-6 pb-0'>
								<p className='text-sm text-gray-300'>{venue.location}</p>
								<p className='text-sm text-gray-300'>{venue.contact}</p>
								<p className='text-sm text-gray-400 mt-2 leading-snug'>
									{venue.description}
								</p>

								<div className='border-t border-gray-600 my-4'></div>

								<div className='flex items-center justify-between text-center text-sm font-semibold'>
									<div>
										<p className='text-[#FFD166] text-lg'>{venue.upcoming}</p>
										<p className='text-gray-400 text-xs'>UPCOMING</p>
									</div>
									<div>
										<p className='text-[#FFD166] text-lg'>{venue.past}</p>
										<p className='text-gray-400 text-xs'>PAST EVENTS</p>
									</div>
									<div>
										<p className='text-[#FFD166] text-lg'>{venue.rating}</p>
										<p className='text-gray-400 text-xs'>RATINGS</p>
									</div>
								</div>

								<div className='w-full flex justify-center'>
									<Button className='mt-4 max-w-xl bg-gradient-to-b from-[#6B5BFF] to-[#2C2F48] hover:bg-gradient-to-t cursor-pointer'>
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

export default VenuesList;

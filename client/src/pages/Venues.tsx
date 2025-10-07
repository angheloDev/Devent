import {
	VenuesHeader,
	VenuesList,
	VenuesSearch,
} from '../components/component-exporter';

const Venues = () => {
	return (
		<>
			<div className='min-h-screen bg-[#0D1117] text-white'>
				<VenuesHeader />
				<VenuesSearch />
				<VenuesList />
			</div>
		</>
	);
};

export default Venues;

import { useMemo, useState } from 'react';
import {
	VenuesHeader,
	VenuesList,
	VenuesSearch,
} from '../../components/component-exporter';
import { venues } from '@/data/mock-data';

const Venues = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [enteredCity, setEnteredCity] = useState('');
	const [venueType, SetVenuType] = useState('');
	const [enteredCapacity, setEnteredCapacity] = useState('');

	const isFiltering = Boolean(
		searchTerm || enteredCity || venueType || enteredCapacity
	);

	const filteredVenues = useMemo(() => {
		if (!isFiltering) {
			return venues;
		}

		return venues.filter((venue) => {
			const matchingVenue =
				!searchTerm ||
				venue.name
					.toLocaleLowerCase()
					.includes(searchTerm.toLocaleLowerCase()) ||
				venue.location.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
				venue.description
					.toLocaleLowerCase()
					.includes(searchTerm.toLocaleLowerCase());

			const matchingCity =
				!enteredCity ||
				venue.location.toLowerCase().includes(enteredCity.toLocaleLowerCase());

			const matchingType =
				!venueType ||
				venue.type.toLowerCase().includes(venueType.toLocaleLowerCase());

			const matchingCapacity =
				!enteredCapacity || venue.capacity >= Number(enteredCapacity);

			return matchingVenue && matchingCity && matchingType && matchingCapacity;
		});
	}, [searchTerm, enteredCity, venueType, enteredCapacity]);

	function onClearFilters() {
		setSearchTerm('');
		setEnteredCity('');
		SetVenuType('');
		setEnteredCapacity('');
	}
	return (
		<>
			<div className='min-h-screen bg-[#0D1117] text-white'>
				<VenuesHeader />
				<VenuesSearch
					searchTerm={searchTerm}
					enteredCity={enteredCity}
					venueType={venueType}
					enteredCapacity={enteredCapacity}
					setSearchTerm={setSearchTerm}
					setEnteredCity={setEnteredCity}
					SetVenuType={SetVenuType}
					setEnteredCapacity={setEnteredCapacity}
					onClearFilters={onClearFilters}
				/>
				<VenuesList filteredVenues={filteredVenues} isFiltering={isFiltering} />
			</div>
		</>
	);
};

export default Venues;

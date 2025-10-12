import {
	EventSearch,
	HeroSection,
	EventsList,
} from '@/components/component-exporter';
import { useState, useMemo } from 'react';
import { events } from '@/data/mock-data';

const Home = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [eventType, setEventType] = useState('');
	const [selectedDate, setSelectedDate] = useState('');
	const [nearCity, setNearCity] = useState('');
	const [dateRange, setDateRange] = useState('');

	const hasActiveFilters = Boolean(
		searchTerm || eventType || selectedDate || nearCity || dateRange
	);

	const filteredEvents = useMemo(() => {
		if (!hasActiveFilters) {
			return events;
		}

		return events.filter((event) => {
			const matchesSearch =
				!searchTerm ||
				event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
				event.tag.toLowerCase().includes(searchTerm.toLowerCase());

			const matchesEventType =
				!eventType || event.tag.toLowerCase().includes(eventType.toLowerCase());

			const matchesDate = !selectedDate || event.date.includes(selectedDate);

			const matchesCity =
				!nearCity ||
				event.location.toLowerCase().includes(nearCity.toLowerCase());

			const matchesDateRange = !dateRange || event.date.includes(dateRange);

			return (
				matchesSearch &&
				matchesEventType &&
				matchesDate &&
				matchesCity &&
				matchesDateRange
			);
		});
	}, [
		searchTerm,
		eventType,
		selectedDate,
		nearCity,
		dateRange,
		hasActiveFilters,
	]);

	const handleClearFilters = () => {
		setSearchTerm('');
		setEventType('');
		setSelectedDate('');
		setNearCity('');
		setDateRange('');
	};

	console.log(hasActiveFilters);

	return (
		<>
			<div className='min-h-screen bg-[#0F172A] text-white'>
				<HeroSection />
				<EventSearch
					searchTerm={searchTerm}
					eventType={eventType}
					selectedDate={selectedDate}
					nearCity={nearCity}
					dateRange={dateRange}
					onSearchChange={setSearchTerm}
					onEventTypeChange={setEventType}
					onDateChange={setSelectedDate}
					onCityChange={setNearCity}
					onDateRangeChange={setDateRange}
					onClearFilters={handleClearFilters}
				/>
				<EventsList
					events={filteredEvents}
					hasActiveFilters={hasActiveFilters}
				/>
			</div>
		</>
	);
};

export default Home;

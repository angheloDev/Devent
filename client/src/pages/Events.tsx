import {
	EventsEventsSearch,
	EventsHeader,
	EventsList,
} from '@/components/component-exporter';

const Events = () => {
	return (
		<>
			<div className='min-h-screen bg-[#0D1117] text-white'>
				<EventsHeader />
				<EventsEventsSearch />
				<EventsList />
			</div>
		</>
	);
};

export default Events;

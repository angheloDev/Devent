import {
	EventsEventsSearch,
	EventsHeader,
	MustSeeEvents,
} from '@/components/component-exporter';

const Events = () => {
	return (
		<>
			<div className='min-h-screen bg-[#0D1117] text-white'>
				<EventsHeader />
				<EventsEventsSearch />
				<MustSeeEvents />
			</div>
		</>
	);
};

export default Events;

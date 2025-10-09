import { events } from '@/data/mock-data';
import type { LoaderFunctionArgs } from 'react-router';

export const eventLoader = ({ params }: LoaderFunctionArgs) => {
	const { eventId } = params;
	const event = events.find((item) => item.id === eventId);
	// if (!event) throw new Error('Event not found', { status: 404 });
	return event;
};

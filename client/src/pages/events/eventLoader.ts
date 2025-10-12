import { events } from '@/data/mock-data';
import type { LoaderFunctionArgs } from 'react-router';

export const eventLoader = async ({ params }: LoaderFunctionArgs) => {
	const { eventId } = params;
	const event = events.find((item) => item.id === eventId);
	// if (!event) throw new Error('No events available');
	return event;
};

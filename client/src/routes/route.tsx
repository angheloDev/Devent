import { createBrowserRouter } from 'react-router';
import Layout from '../Layout';
import {
	About,
	EventDetails,
	Events,
	Home,
	Venues,
} from '../pages/page-exporter';
import { eventLoader } from '../pages/events/eventLoader';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'events',
				element: <Events />,
			},
			{
				path: 'events/:eventId',
				element: <EventDetails />,
				loader: eventLoader,
			},
			{
				path: 'venues',
				element: <Venues />,
			},
			{
				path: 'about',
				element: <About />,
			},
		],
	},
]);

import { createBrowserRouter } from 'react-router';
import Layout from '../Layout';
import {
	About,
	EventDetails,
	EventMap,
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
			// Kaning gipatung-an ani kind of like sa events ni nga children, limtanon raba ka anga ka
			{
				path: 'events/:eventId',
				element: <EventDetails />,
				loader: eventLoader,
			},
			{
				path: 'events/map/:eventId',
				element: <EventMap />,
				loader: eventLoader,
			},
			// Kaning gipatung-an ani kind of like sa events ni nga children, limtanon raba ka anga ka
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

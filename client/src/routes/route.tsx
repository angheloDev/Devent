import { createBrowserRouter } from 'react-router';
import Layout from '../Layout';
import {
	About,
	EventDetails,
	EventMap,
	Events,
	Home,
	Venues,
	ErrorPage,
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
			// *******************************kunwari_dibayder**********************************
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
			// *******************************kunwari_dibayder**********************************
			{
				path: 'venues',
				element: <Venues />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]);

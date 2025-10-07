import { createBrowserRouter } from 'react-router';
import Layout from '../Layout';
import { About, Events, Home, Venues } from '../pages/page-exporter';

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

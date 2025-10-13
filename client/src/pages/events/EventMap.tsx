import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Event = {
	title: string;
	location: string;
};

const EventMap = () => {
	const navigate = useNavigate();
	const event: Event = useLoaderData();
	const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
		null
	);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCoords = async () => {
			try {
				const response = await fetch(
					`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
						event.location
					)}&limit=1`,
					{
						headers: {
							'User-Agent': 'EventMapper/1.0 (yourname@domain.com)',
							Accept: 'application/json',
						},
					}
				);

				const data = await response.json();

				if (data && data.length > 0) {
					setCoords({
						lat: parseFloat(data[0].lat),
						lon: parseFloat(data[0].lon),
					});
				} else {
					setError(`No coordinates found for location: ${event.location}`);
					console.warn('No coordinates found for location:', event.location);
				}
			} catch (err) {
				console.error('Error fetching coordinates:', err);
				setError('Error fetching location data.');
			}
		};

		if (event.location) fetchCoords();
	}, [event.location]);

	const mapUrl =
		coords &&
		`https://www.openstreetmap.org/export/embed.html?bbox=${
			coords.lon - 0.01
		}%2C${coords.lat - 0.01}%2C${coords.lon + 0.01}%2C${
			coords.lat + 0.01
		}&layer=mapnik&marker=${coords.lat},${coords.lon}`;

	return (
		<div className='mt-[58px] min-h-screen bg-[#0C1424] text-white'>
			<div className='p-6'>
				<button className='text-white mt-6'>
					<ChevronLeft
						className='w-11 h-11 cursor-pointer'
						onClick={() => navigate(-1)}
					/>
				</button>
			</div>

			<div className='px-6 pb-8 ml-7'>
				<h1 className='text-4xl font-bold mb-8 font-gothicA1'>{event.title}</h1>

				<div className='space-y-1 text-lg font-montserat ml-5'>
					<p>{event.location}</p>
					<p>2,000 seats</p>
					<p>Parking available, Accessible for PWD</p>
				</div>
			</div>

			<div className='border-t border-gray-700 mx-6'></div>

			<div className='px-6 pt-8 pb-6'>
				<h2 className='text-2xl font-semibold mb-4 font-gothicA1'>
					Event Location
				</h2>

				<div className='relative w-full h-[480px] rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center'>
					{mapUrl ? (
						<iframe
							src={mapUrl}
							className='w-full h-full'
							style={{ border: 0 }}
							allowFullScreen
							loading='lazy'
							title='Event Location Map'
						/>
					) : error ? (
						<p className='text-red-400'>{error}</p>
					) : (
						<p className='text-gray-400'>Loading map...</p>
					)}
				</div>
			</div>

			<div className='flex justify-center pb-12'>
				<Button
					className='bg-[#374151] hover:bg-[#4b5563] hover:text-gray-300 px-8 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer'
					variant='outline'
					onClick={() => navigate('/events')}
				>
					Back to List
				</Button>
			</div>
		</div>
	);
};

export default EventMap;


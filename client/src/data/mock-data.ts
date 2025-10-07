type Event = {
	id: number;
	title: string;
	date: string;
	location: string;
	time: string;
	price: number;
	tag: string;
};

export const events: Array<Event> = [
	{
		id: 1,
		title: 'Summer Music Festival 2025',
		date: 'December 15, 2025',
		location: 'SM Mall of Asia Arena, Manila',
		time: '7:00 PM - 11:00 PM',
		price: 2500,
		tag: 'Concert',
	},
	{
		id: 2,
		title: 'Web Dev Summit 2025',
		date: 'November 20, 2025',
		location: 'Ayala Triangle, BGC',
		time: '9:00 AM - 6:00 PM',
		price: 3800,
		tag: 'Tech',
	},
	{
		id: 3,
		title: 'PBA Finals Game 7',
		date: 'October 28, 2025',
		location: 'Araneta Coliseum, Quezon City',
		time: '5:00 PM - 9:00 PM',
		price: 1200,
		tag: 'Sports',
	},
	{
		id: 4,
		title: 'Jazz Night Under the Stars',
		date: 'November 5, 2025',
		location: 'Ayala Center Cebu, Cebu',
		time: '6:30 PM - 10:00 PM',
		price: 1800,
		tag: 'Concert',
	},
	{
		id: 5,
		title: 'AI & Machine Learning Expo',
		date: 'December 1, 2025',
		location: 'SMX Convention Center, Davao',
		time: '8:00 AM - 7:00 PM',
		price: 4200,
		tag: 'Tech',
	},
	{
		id: 6,
		title: 'Manila Marathon 2025',
		date: 'November 12, 2025',
		location: 'Bonifacio Global City, BGC',
		time: '4:00 AM - 12:00 PM',
		price: 800,
		tag: 'Sports',
	},
];

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

type Venue = {
	id: number;
	name: string;
	type: string;
	location: string;
	contact: number;
	description: string;
	upcoming: number;
	past: number;
	rating: number;
};

export const venues: Venue[] = [
	{
		id: 1,
		name: 'Araneta Coliseum',
		type: 'ARENA',
		location: 'Cubao, Quezon City',
		contact: 6329115555,
		description: 'Large capacity, concert-ready, premium sound system.',
		upcoming: 8,
		past: 203,
		rating: 4.9,
	},
	{
		id: 2,
		name: 'SM Mall of Asia Arena',
		type: 'ARENA',
		location: 'Pasay City, Metro Manila',
		contact: 6327654321,
		description: 'World-class arena for concerts, sports, and conventions.',
		upcoming: 6,
		past: 158,
		rating: 4.8,
	},
	{
		id: 3,
		name: 'Bonifacio Global City Amphitheater',
		type: 'OUTDOOR VENUE',
		location: 'Bonifacio High Street, Taguig',
		contact: 6321234567,
		description: 'Open-air amphitheater perfect for live music and festivals.',
		upcoming: 10,
		past: 112,
		rating: 4.7,
	},
	{
		id: 4,
		name: 'SMX Convention Center',
		type: 'CONVENTION CENTER',
		location: 'Seashell Lane, Pasay City',
		contact: 625568888,
		description:
			'Massive convention hall ideal for expos, trade fairs, and tech events.',
		upcoming: 12,
		past: 340,
		rating: 4.9,
	},
	{
		id: 5,
		name: 'Ayala Center Cebu',
		type: 'MALL VENUE',
		location: 'Cebu City, Cebu',
		contact: 63322315342,
		description:
			'Premier Cebu venue for concerts, local shows, and lifestyle events.',
		upcoming: 5,
		past: 98,
		rating: 4.8,
	},
	{
		id: 6,
		name: 'Davao Convention Center',
		type: 'CONVENTION CENTER',
		location: 'Davao City, Davao del Sur',
		contact: 63822217788,
		description: 'Modern facility for national conferences and exhibitions.',
		upcoming: 7,
		past: 145,
		rating: 4.7,
	},
	{
		id: 7,
		name: 'Smart Araneta Coliseum Annex',
		type: 'ARENA',
		location: 'Cubao, Quezon City',
		contact: 6325211111,
		description: 'Secondary arena with upgraded facilities for smaller events.',
		upcoming: 4,
		past: 87,
		rating: 4.6,
	},
	{
		id: 8,
		name: 'Zamboanga City Coliseum',
		type: 'ARENA',
		location: 'Zamboanga City, Zamboanga Peninsula',
		contact: 63629921234,
		description: 'Home of local sports and cultural shows, newly renovated.',
		upcoming: 3,
		past: 64,
		rating: 4.5,
	},
	{
		id: 9,
		name: 'Iloilo Convention Center',
		type: 'CONVENTION CENTER',
		location: 'Mandurriao, Iloilo City',
		contact: 63333356666,
		description:
			'Modern venue with elegant design for business and tech conferences.',
		upcoming: 9,
		past: 220,
		rating: 4.9,
	},
];

export const features = Array.from({ length: 6 }).map((_, i) => ({
	id: i + 1,
	title: 'Smart Discovery',
	subtitle:
		'Advanced filtering and search capabilities help you find events that match your interests, location, and schedule perfectly.',
}));

type TeamMember = {
	id: number;
	name: string;
	role: string;
	nawng: string;
};

export const team: TeamMember[] = [
	{
		id: 1,
		name: 'Ashley Quicho',
		role: 'Project Manager',
		nawng: '/nawng-sa-mga-taw/ashley.jpg',
	},
	{
		id: 2,
		name: 'Felixandra Malicay',
		role: 'Business Analyst',
		nawng: '/nawng-sa-mga-taw/fel.jpg',
	},
	{
		id: 3,
		name: 'Paul Villacura',
		role: 'Quality Assurance Engineer',
		nawng: '/nawng-sa-mga-taw/paul.jpg',
	},
	{
		id: 4,
		name: 'Angelo Galleros',
		role: 'Lead Developer',
		nawng: '/nawng-sa-mga-taw/ako.jpg',
	},
	{
		id: 4,
		name: 'Mark Luis Salvador',
		role: 'UI/UX Designer',
		nawng: '/nawng-sa-mga-taw/luis.jpg',
	},
	{
		id: 4,
		name: 'Alfasher Jamsani',
		role: 'Technical Writer',
		nawng: '/nawng-sa-mga-taw/alfasher.jpg',
	},
];

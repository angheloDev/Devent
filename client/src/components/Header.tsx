import { NavBar } from './component-exporter';

const Header = () => {
	return (
		<>
			<div className='fixed w-full z-10 top-0 h-16 bg-[#0F172A] rounded-b-3xl'>
				<NavBar />
			</div>
			<div className='fixed w-full top-4 h-16 bg-[#0C2869] rounded-b-3xl'></div>
		</>
	);
};

export default Header;

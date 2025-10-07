import { NavLink, Link } from 'react-router';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	const linkClasses = ({ isActive }: { isActive: boolean }) =>
		`block px-4 py-2 transition-colors duration-200 ${
			isActive ? 'text-blue-400' : 'text-white hover:text-blue-300'
		}`;

	return (
		<nav className={`pt-3 ${isOpen ? 'bg-[#0F172A]' : null}`}>
			<div className='max-w-full mx-5 flex items-center justify-between'>
				<div className='justify-start text-3xl font-montserat font-bold bg-gradient-to-r from-[#3C6DEA] to-[#A051FF] bg-clip-text text-transparent'>
					<Link to='/'>DEVENT</Link>
				</div>

				{/* dako */}
				<div className='hidden md:flex items-center gap-4 lg:gap-10 xl:gap-20 text-lg md:mr-16'>
					<NavLink to='/' className={linkClasses}>
						Home
					</NavLink>
					<NavLink to='/events' className={linkClasses}>
						Events
					</NavLink>
					<NavLink to='/venues' className={linkClasses}>
						Venues
					</NavLink>
					<NavLink to='/about' className={linkClasses}>
						About
					</NavLink>
				</div>

				{/* medyo daks */}
				<button
					className='md:hidden text-white text-2xl focus:outline-none'
					onClick={toggleMenu}
				>
					{isOpen ? (
						<X className='cursor-pointer' />
					) : (
						<Menu className='cursor-pointer' />
					)}
				</button>
			</div>

			{/* kinagamyan */}
			{isOpen && (
				<div className='md:hidden mt-2 flex flex-col gap-2'>
					<NavLink to='/' className={linkClasses} onClick={toggleMenu}>
						Home
					</NavLink>
					<NavLink to='/events' className={linkClasses} onClick={toggleMenu}>
						Events
					</NavLink>
					<NavLink to='/venues' className={linkClasses} onClick={toggleMenu}>
						Venues
					</NavLink>
					<NavLink to='/about' className={linkClasses} onClick={toggleMenu}>
						About
					</NavLink>
				</div>
			)}
		</nav>
	);
};

export default Navbar;

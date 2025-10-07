import Header from './components/Header';
import { Outlet } from 'react-router';

const Layout = () => {
	return (
		<>
			<Header />
			<div className='mt-40'>
				<Outlet />
			</div>
		</>
	);
};

export default Layout;

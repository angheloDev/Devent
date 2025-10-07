import Header from './components/Header';
import { Outlet } from 'react-router';

const Layout = () => {
	return (
		<>
			<Header />
			<div>
				<Outlet />
			</div>
		</>
	);
};

export default Layout;

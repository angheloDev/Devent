import Header from './components/Header';
import { Outlet, useNavigation } from 'react-router';
import { Loading } from './pages/page-exporter';

const Layout = () => {
	const navigation = useNavigation();
	const isLoading = navigation.state === 'loading';
	return (
		<>
			<Header />
			{isLoading && <Loading />}
			<div>
				<Outlet />
			</div>
		</>
	);
};

export default Layout;

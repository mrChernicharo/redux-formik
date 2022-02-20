import { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

const Header = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		console.log(pathname);
	}, [pathname]);

	return (
		<header>
			{pathname === '/' ? (
				<>
					<Link to="/patients">Pacientes</Link>
					{' | '}
					<Link to="/professionals">Profissionais</Link>
				</>
			) : (
				<Link to="/">
					<FaArrowLeft />
				</Link>
			)}
		</header>
	);
};
export default Header;

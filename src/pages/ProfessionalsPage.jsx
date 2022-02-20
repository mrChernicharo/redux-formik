import { useEffect } from 'react';
import ProfessionalsList from '../components/Professionals/ProfessionalsList';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ProfessionalsPage = props => {
	const { professionals } = props;
	console.log({ props, professionals });
	useEffect(() => {
		// fetchProfessionals();
	}, []);

	return (
		<div className="AppPage">
			<Link to="/">
				<FaArrowLeft />
			</Link>

			<h3>Profissionais</h3>

			{/* <ProfessionalsList /> */}
		</div>
	);
};
export default ProfessionalsPage;

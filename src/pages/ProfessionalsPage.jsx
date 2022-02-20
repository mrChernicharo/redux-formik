import { useEffect } from 'react';
import ProfessionalsList from '../components/Professionals/ProfessionalsList';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
// import { fetchProfessionals } from '../redux-actions/professionals';

const ProfessionalsPage = props => {
	const { professionals = [], fetchProfessionals, isFetching } = props;

	useEffect(() => {
		fetchProfessionals();
	}, []);

	useEffect(() => {
		console.log(props);
	}, [isFetching]);

	return (
		<div className="AppPage">
			<Link to="/">
				<FaArrowLeft />
			</Link>

			<h3>Profissionais</h3>
			{isFetching && <div>Loading...</div>}
			{!isFetching && professionals.length && (
				// <></>
				<ProfessionalsList professionals={professionals} />
			)}
		</div>
	);
};
export default ProfessionalsPage;

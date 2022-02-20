import { useEffect } from 'react';
import ProfessionalsList from '../components/Professionals/ProfessionalsList';

const ProfessionalsPage = ({
	professionals,
	fetchProfessionals,
	isFetching,
}) => {
	useEffect(() => {
		fetchProfessionals();
	}, []);

	return (
		<>
			<h3>Profissionais</h3>

			{isFetching ? (
				<div>Loading...</div>
			) : (
				<ProfessionalsList professionals={professionals} />
			)}
		</>
	);
};
export default ProfessionalsPage;

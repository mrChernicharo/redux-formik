import { useEffect } from 'react';
import ProfessionalsList from '../components/Professionals/ProfessionalsList';

const ProfessionalsPage = props => {
	const {
		professionals,
		fetchProfessionals,
		isFetching,
		selectProfessional,
		selectedProfessional,
	} = props;

	const handleSelectProfessional = professional => {
		selectProfessional(professional);
	};

	useEffect(() => {
		!professionals.length && fetchProfessionals();
		return () => selectProfessional(null);
	}, []);

	return (
		<>
			<h3>Profissionais</h3>

			{isFetching ? (
				<div>Loading...</div>
			) : (
				<ProfessionalsList
					professionals={professionals}
					onSelectProfessional={handleSelectProfessional}
				/>
			)}

			{selectedProfessional && (
				<div>profissional: {selectedProfessional.name}</div>
			)}
		</>
	);
};
export default ProfessionalsPage;

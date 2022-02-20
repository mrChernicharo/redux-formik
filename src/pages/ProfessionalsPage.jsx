import { useEffect } from 'react';
import AddProfessionalForm from '../components/Professionals/AddProfessionalForm';
import ProfessionalsList from '../components/Professionals/ProfessionalsList';
import ProfessionalDetail from '../components/Professionals/ProfessionalDetail';

const ProfessionalsPage = props => {
	const {
		professionals,
		fetchProfessionals,
		addProfessional,
		isFetching,
		isSavingProfessional,
		selectProfessional,
		selectedProfessional,
	} = props;

	const handleSelectProfessional = professional => {
		selectProfessional(professional);
	};

	const handleProfessionalDetailClose = () => {
		selectProfessional(null);
	};

	useEffect(() => {
		!professionals.length && fetchProfessionals();
		return () => selectProfessional(null);
	}, []);

	return (
		<>
			<h3>Profissionais</h3>

			<AddProfessionalForm
				addProfessional={addProfessional}
				isSavingProfessional={isSavingProfessional}
			/>

			{isFetching ? (
				<div>Loading...</div>
			) : (
				<ProfessionalsList
					professionals={professionals}
					onSelectProfessional={handleSelectProfessional}
				/>
			)}

			{selectedProfessional && (
				<ProfessionalDetail
					professional={selectedProfessional}
					onClose={handleProfessionalDetailClose}
				/>
			)}
		</>
	);
};
export default ProfessionalsPage;

import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import Professional from './Professional';

const ProfessionalsList = ({ professionals, onSelectProfessional }) => {
	const professionalSelected = professional => {
		onSelectProfessional(professional);
	};

	useEffect(() => {
		console.log(professionals);
	}, [professionals]);

	return (
		<>
			<h4>Lists Profissionais</h4>
			{professionals.map(professional => (
				<Professional
					key={nanoid()}
					professional={professional}
					onSelect={professionalSelected}
				/>
			))}
		</>
	);
};

export default ProfessionalsList;

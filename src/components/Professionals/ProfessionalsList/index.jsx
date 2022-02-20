import { useEffect } from 'react';
import Professional from './Professional';

const ProfessionalsList = ({ professionals }) => {
	console.log(professionals);

	// useEffect(() => {
	// 	fetchProfessionals();
	// }, []);

	return (
		<>
			{professionals.map(professional => (
				<Professional />
			))}
		</>
	);
};

export default ProfessionalsList;

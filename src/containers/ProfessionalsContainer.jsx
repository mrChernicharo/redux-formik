import { connect } from 'react-redux';
import ProfessionalsPage from '../pages/ProfessionalsPage';
import useFetch from '../utils/useFetch';

const mapStateToProps = state => {
	const { professionals: stateSlice } = state;
	const {
		professionals,
		isFetching,
		selectedProfessional,
		isSavingProfessional,
	} = stateSlice;

	return {
		professionals,
		isFetching,
		isSavingProfessional,
		selectedProfessional,
	};
};

const mapDispatchToProps = dispatch => ({
	selectProfessional: professional => {
		dispatch({ type: 'SELECT_PROFESSIONAL', payload: professional });
	},

	fetchProfessionals: async () => {
		console.log('fetching professionals');
		dispatch({ type: 'REQUEST_PROFESSIONALS' });

		const response = await fetch('http://localhost:8000/professionals');
		const data = await new Promise(resolve => {
			setTimeout(() => resolve(response.json()), 2000);
		});

		console.log('professionals received!', { data });
		dispatch({ type: 'PROFESSIONALS_RECEIVED', payload: data });
	},

	//prettier-ignore
	addProfessional: async professional => {
		console.log('adding professionals');
		dispatch({ type: 'REQUEST_ADD_PROFESSIONAL' });

		const { name, email, whatsapp } = professional;

		// const response = await fetch('http://localhost:8000/professionals');
		// const data = await new Promise(resolve => {
		// 	setTimeout(() => resolve(response.json()), 2000);
		// });
		const data = await useFetch('http://localhost:8000/professionals/add', professional);

		console.log('professional added!', { data });
		dispatch({ type: 'PROFESSIONAL_ADDED', payload: data });
	},

	fetchProfessionalAvailability: async _id => {
		dispatch({ type: 'REQUEST_PROFESSIONAL_AVAILABILITY', payload: _id });

		const data = await useFetch(
			'http://localhost:8000/professionals-availability',
			{ _id }
		);

		console.log('availability received', { data });
		dispatch({ type: 'AVAILABILITY_RECEIVED', payload: data });
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalsPage);

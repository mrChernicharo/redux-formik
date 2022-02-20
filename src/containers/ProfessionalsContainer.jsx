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

	addProfessional: async professional => {
		console.log('adding professional');
		dispatch({ type: 'REQUEST_ADD_PROFESSIONAL' });

		try {
			const data = await useFetch(
				'http://localhost:8000/professionals/add',
				professional
			);

			if (data.error) {
				throw Error('Email already in use');
			}

			console.log('professional added!', { data });
			dispatch({ type: 'PROFESSIONAL_ADDED', payload: data });
		} catch (err) {
			console.log('add professional ERROR: ', { err });
			dispatch({ type: 'ADD_PROFESSIONAL_ERROR' });
		}
	},

	fetchProfessionalAvailability: async _id => {
		dispatch({ type: 'REQUEST_PROFESSIONAL_AVAILABILITY', payload: _id });

		const data = await useFetch(
			`http://localhost:8000/professionals/availability/?id=${_id}`
		);

		const availability = data[0].availability;

		console.log('availability received', { availability });
		dispatch({
			type: 'PROFESSIONAL_AVAILABILITY_RECEIVED',
			payload: availability,
		});
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalsPage);

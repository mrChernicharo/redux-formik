import { connect } from 'react-redux';
import ProfessionalsPage from '../pages/ProfessionalsPage';

const mapStateToProps = state => ({
	professionals: state.professionals.professionals,
	isFetching: state.professionals.isFetching,
	selectedProfessional: state.professionals.selectedProfessional,
});

const mapDispatchToProps = dispatch => ({
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
	selectProfessional: professional =>
		dispatch({ type: 'SELECT_PROFESSIONAL', payload: professional }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalsPage);

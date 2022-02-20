import { connect } from 'react-redux';
import ProfessionalsPage from '../pages/ProfessionalsPage';

const mapStateToProps = state => ({
	professionals: state.professionals,
	isFetching: false,
	selectedProfessional: state.selectedProfessional,
});

const mapDispatchToProps = dispatch => ({
	fetchProfessionals: () =>
		dispatch({ type: 'REQUEST_PROFESSIONALS', payload: {} }),
	selectProfessional: professional =>
		dispatch({ type: 'SELECT_PROFESSIONAL', payload: professional }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalsPage);

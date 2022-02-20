import { connect } from 'react-redux';
import PatientPage from '../pages/PatientsPage';

const mapStateToProps = state => {
	const { patients: patientsSlice } = state;
	return {
		patients: patientsSlice.patients,
		selectedPatient: patientsSlice.selectedPatient,
	};
};

const mapDispatchToProps = dispatch => ({
	addPatient: patient => dispatch({ type: 'ADD_PATIENT', payload: patient }),
	deletePatient: id => dispatch({ type: 'DELETE_PATIENT', payload: id }),
	selectPatient: patient =>
		dispatch({ type: 'SELECT_PATIENT', payload: patient }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientPage);

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
	addPatient: async patient => {
		console.log('saving patient', patient);
		dispatch({ type: 'REQUEST_ADD_PATIENT' });

		const result = await fetch('http://localhost:8000/patients/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(patient),
		});
		const data = await result.json();

		console.log('patient added!', data);
		dispatch({ type: 'PATIENT_ADDED', payload: data });
	},

	deletePatient: id => dispatch({ type: 'DELETE_PATIENT', payload: id }),

	selectPatient: patient =>
		dispatch({ type: 'SELECT_PATIENT', payload: patient }),

	fetchPatients: async () => {
		console.log('fetching patients');
		dispatch({ type: 'REQUEST_PATIENTS' });

		const response = await fetch('http://localhost:8000/patients');
		const data = await new Promise(resolve =>
			setTimeout(() => resolve(response.json()), 2000)
		);

		console.log('patients received!', { data });
		dispatch({ type: 'PATIENTS_RECEIVED', payload: data });
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientPage);

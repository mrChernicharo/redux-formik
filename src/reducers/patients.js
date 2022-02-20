const patientsReducer = (
	state = {
		patients: [],
		selectedPatient: null,
		isFetching: false,
		isSavingPatient: false,
		isDeletingPatient: false,
	},
	action
) => {
	switch (action.type) {
		case 'PATIENT_ADDED':
			return {
				...state,
				isSavingPatient: false,
				patients: [...state.patients, { ...action.payload }],
			};
		case 'REQUEST_ADD_PATIENT':
			return {
				...state,
				isSavingPatient: true,
			};
		case 'DELETE_PATIENT':
			return {
				...state,
				patients: state.patients.filter(
					patient => patient.id !== action.payload
				),
			};
		case 'SELECT_PATIENT':
			return {
				...state,
				selectedPatient: action.payload,
			};
		case 'REQUEST_PATIENTS':
			return {
				...state,
				isFetching: true,
			};
		case 'PATIENTS_RECEIVED':
			return {
				...state,
				isFetching: false,
				patients: [...action.payload],
			};
		default:
			return state;
	}
};

export default patientsReducer;

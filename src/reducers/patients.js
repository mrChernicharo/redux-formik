const patients = (state = { patients: [], selectedPatient: null }, action) => {
	switch (action.type) {
		case 'ADD_PATIENT':
			return {
				...state,
				patients: [...state.patients, { ...action.payload }],
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
		default:
			return state;
	}
};

export default patients;

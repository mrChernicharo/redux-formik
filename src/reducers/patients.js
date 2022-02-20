// const patients = (state = [], action) => {
// 	const actions = {
// 		ADD_PATIENT: {...state, action.payload }
// 	}

// 	return actions[action.type]
// }

const patients = (state = [], action) => {
	// console.log({ state, action });

	switch (action.type) {
		case 'ADD_PATIENT':
			return [...state, { ...action.payload }];
		case 'DELETE_PATIENT':
			return state.filter(patient => patient.id !== action.payload);
		default:
			return state;
	}
};

export default patients;

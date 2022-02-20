const professionals = (
	state = {
		isFetching: false,
		professionals: [],
		selectedProfessional: null,
	},
	action
) => {
	console.log({ state, action });

	switch (action.type) {
		case 'REQUEST_PROFESSIONALS':
			return {
				...state,
				isFetching: true,
			};
		case 'PROFESSIONALS_RECEIVED':
			return {
				...state,
				isFetching: false,
				professionals: [...action.professionals],
			};
		default:
			return state;
	}
};

export default professionals;

// case 'SELECT_PROFESSIONAL':
// 	return professional => ({
// 		...state,
// 		selectedProfessional: professional,
// 	});

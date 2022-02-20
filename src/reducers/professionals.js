const professionalsReducer = (
	state = {
		isFetching: false,
		professionals: [],
		selectedProfessional: null,
	},
	action
) => {
	console.log(action);

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
				professionals: [...action.payload],
			};
		default:
			return state;
	}
};

export default professionalsReducer;

// case 'SELECT_PROFESSIONAL':
// 	return professional => ({
// 		...state,
// 		selectedProfessional: professional,
// 	});

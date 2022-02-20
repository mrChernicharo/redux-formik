const professionalsReducer = (
	state = {
		isFetching: false,
		professionals: [],
		selectedProfessional: null,
	},
	action
) => {
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
		case 'SELECT_PROFESSIONAL':
			return {
				...state,
				selectedProfessional: action.payload,
			};

		default:
			return state;
	}
};

export default professionalsReducer;

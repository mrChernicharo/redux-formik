const professionalsReducer = (
    state = {
        isFetchingPatients: false,
        isSavingProfessional: false,
        professionals: [],
    },
    action
) => {
    switch (action.type) {
        case 'REQUEST_PROFESSIONALS':
            return {
                ...state,
                isFetchingPatients: true,
            };
        case 'PROFESSIONALS_RECEIVED':
            return {
                ...state,
                isFetchingPatients: false,
                professionals: [...action.payload],
            };
        case 'REQUEST_ADD_PROFESSIONAL':
            return {
                ...state,
                isSavingProfessional: true,
            };
        case 'PROFESSIONAL_ADDED':
            return {
                ...state,
                isSavingProfessional: false,
                professionals: [...state.professionals, action.payload],
            };
        case 'ADD_PROFESSIONAL_ERROR':
            return {
                ...state,
                isSavingProfessional: false,
            };
        default:
            return state;
    }
};

export default professionalsReducer;

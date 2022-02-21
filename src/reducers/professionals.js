const professionalsReducer = (
    state = {
        isFetching: false,
        isSavingProfessional: false,
        professionals: [],
    },
    action
) => {
    switch (action.type) {
        case 'REQUEST_PROFESSIONALS':
            return {
                ...state,
                isFetching: true,
            }
        case 'PROFESSIONALS_RECEIVED':
            return {
                ...state,
                isFetching: false,
                professionals: [...action.payload],
            }
        case 'REQUEST_ADD_PROFESSIONAL':
            return {
                ...state,
                isSavingProfessional: true,
            }
        case 'PROFESSIONAL_ADDED':
            return {
                ...state,
                isSavingProfessional: false,
                professionals: [...state.professionals, action.payload],
            }
        case 'ADD_PROFESSIONAL_ERROR':
            return {
                ...state,
                isSavingProfessional: false,
            }
        default:
            return state
    }
}

export default professionalsReducer

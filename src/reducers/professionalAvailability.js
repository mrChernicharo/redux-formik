const professionalAvailabilityReducer = (
    state = {
        isFetchingAvailability: false,
        selectedProfessional: null,
        availability: null,
    },
    action
) => {
    switch (action.type) {
        case 'SELECT_PROFESSIONAL':
            console.log(action.type, action.payload);
            return {
                ...state,
                selectedProfessional: action.payload,
            };
        case 'REQUEST_PROFESSIONAL_AVAILABILITY':
            return {
                ...state,
                isFetchingAvailability: true,
            };
        case 'PROFESSIONAL_AVAILABILITY_RECEIVED':
            console.log(action.type, action.payload);
            return {
                ...state,
                isFetchingAvailability: false,
                availability: action.payload,
            };
        case 'TOGGLE_TIMESLOT_STATUS':
            return {
                ...state,
                availability: {
                    ...state.availability,
                    [action.payload.weekday]: {
                        ...state.availability[action.payload.weekday],
                        [action.payload.hour]: {
                            ...state.availability[action.payload.weekday][
                                action.payload.hour
                            ],
                            status: action.payload.status,
                        },
                    },
                },
            };
        default:
            return state;
    }
};

export default professionalAvailabilityReducer;

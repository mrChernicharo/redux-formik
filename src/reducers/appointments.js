const appointmentsReducer = (
    state = { patients: null, professionals: null },
    action
) => {
    switch (action.type) {
        // case 'FETCH_PROFESSIONALS':
        default:
            return state;
    }
};

export default appointmentsReducer;

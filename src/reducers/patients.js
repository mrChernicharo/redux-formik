const patientsReducer = (
    state = {
        patients: [],
        selectedPatient: null,
        isFetchingPatients: false,
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
                    (patient) => patient.id !== action.payload
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
                isFetchingPatients: true,
            };
        case 'PATIENTS_RECEIVED':
            return {
                ...state,
                isFetchingPatients: false,
                patients: [...action.payload],
            };
        default:
            return state;
    }
};

export default patientsReducer;

const actions = {
    REQUEST_ADD_PATIENT: (patient) => ({
        type: 'REQUEST_ADD_PATIENT',
        payload: patient,
    }),
    PATIENT_ADDED: (data) => ({
        type: 'PATIENT_ADDED',
        payload: data,
    }),
    DELETE_PATIENT: (id) => ({
        type: 'DELETE_PATIENT',
        payload: id,
    }),
    SELECT_PATIENT: (patient) => ({ type: 'SELECT_PATIENT', payload: patient }),
    REQUEST_PATIENTS: () => ({ type: 'REQUEST_PATIENTS' }),
    PATIENTS_RECEIVED: (data) => ({
        type: 'PATIENTS_RECEIVED',
        payload: data,
    }),
};

export async function addPatient(dispatch, patient) {
    console.log('saving patient', patient);
    dispatch(actions.REQUEST_ADD_PATIENT(patient));

    const result = await fetch('http://localhost:8000/patients/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(patient),
    });
    const data = await result.json();

    console.log('patient added!', data);
    dispatch(actions.PATIENT_ADDED(data));
}

export function deletePatient(id) {
    dispatch(actions.DELETE_PATIENT);
}

export function selectPatient(dispatch, patient) {
    dispatch(actions.SELECT_PATIENT);
}

export async function fetchPatients(dispatch) {
    console.log('fetching patients');
    dispatch(actions.REQUEST_PATIENTS());

    const response = await fetch('http://localhost:8000/patients');
    const data = await new Promise((resolve) =>
        setTimeout(() => resolve(response.json()), 2000)
    );

    console.log('patients received!', { data });
    dispatch(actions.PATIENTS_RECEIVED(data));
}

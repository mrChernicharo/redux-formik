import { useEffect } from 'react';
import AddPatientForm from '../components/Patients/AddPatientForm';
import PatientsTable from '../components/Patients/PatientsTable';

const PatientsPage = (props) => {
    const {
        patients,
        fetchPatients,
        selectedPatient,
        addPatient,
        deletePatient,
        selectPatient,
        isFetchingPatients,
        isSavingPatient,
    } = props;

    useEffect(() => {
        !patients.length && fetchPatients();
        return () => selectPatient(null);
    }, []);

    return (
        <>
            <h6>Patients</h6>

            <AddPatientForm
                addPatient={addPatient}
                isSavingPatient={isSavingPatient}
            />

            {isFetchingPatients ? (
                <div>Carregando pacientes...</div>
            ) : (
                <PatientsTable
                    patients={patients}
                    deletePatient={deletePatient}
                    selectPatient={selectPatient}
                    isSavingPatient={isSavingPatient}
                />
            )}

            {selectedPatient && (
                <h5>selectedPatient: {selectedPatient.name}</h5>
            )}
        </>
    );
};

export default PatientsPage;

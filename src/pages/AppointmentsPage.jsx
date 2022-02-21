import Select from '../components/Select';
import DatePicker from '../components/DatePicker';
import { useEffect } from 'react';

const AppointmentsPage = ({
    professionals,
    patients,
    fetchProfessionals,
    fetchPatients,
}) => {
    useEffect(() => {
        if (!professionals.length) fetchProfessionals();
        if (!patients.length) fetchPatients();
    }, []);

    return (
        <>
            <h3>Consultas</h3>

            <Select
                options={professionals.map((patient) => ({
                    value: patient.name,
                }))}
                label="profissionais"
            />
            <Select
                options={patients.map((patient) => ({ value: patient.name }))}
                label="pacientes"
            />

            <DatePicker />
        </>
    );
};
export default AppointmentsPage;

import AddPatientForm from "./AddPatientForm";
import PatientsTable from "./PatientsTable";

const PatientsSection = ({ patients, addPatient, deletePatient }) => {
  return (
    <section>
      <h6>Patients</h6>

      <AddPatientForm addPatient={addPatient} />

      <PatientsTable patients={patients} deletePatient={deletePatient} />
    </section>
  );
};

export default PatientsSection;

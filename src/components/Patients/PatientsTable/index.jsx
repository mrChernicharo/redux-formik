import Patient from "./Patient";

const PatientsTable = ({ patients, deletePatient }) => {
  const handlePatientDelete = (id) => {
    deletePatient(id);
  };

  return (
    <table>
      <thead>
        <tr>
          {patients[0] &&
            Object.keys(patients[0]).map((attr) => <th key={attr}>{attr}</th>)}
        </tr>
      </thead>
      <tbody>
        {patients.map((patient) => (
          <Patient
            key={patient.id}
            patient={patient}
            onDelete={handlePatientDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default PatientsTable;

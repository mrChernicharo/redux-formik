import AddPatientForm from "../components/Patients/AddPatientForm";
import PatientsTable from "../components/Patients/PatientsTable";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const PatientsSection = ({ patients, addPatient, deletePatient }) => {
  return (
    <div className="AppPage">
      <Link to="/">
        <FaArrowLeft />
      </Link>

      <h6>Patients</h6>

      <AddPatientForm addPatient={addPatient} />

      <PatientsTable patients={patients} deletePatient={deletePatient} />
    </div>
  );
};

export default PatientsSection;

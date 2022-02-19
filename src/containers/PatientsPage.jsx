import { connect } from "react-redux";
import PatientsSection from "../components/PatientsSection";

const mapStateToProps = (state) => ({
  patients: state.patients,
});

const mapDispatchToProps = (dispatch) => ({
  addPatient: (patient) => dispatch({ type: "ADD_PATIENT", payload: patient }),
  deletePatient: (id) => dispatch({ type: "DELETE_PATIENT", payload: id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientsSection);

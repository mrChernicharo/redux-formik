import { connect } from "react-redux";
import {
  selectProfessional,
  requestProfessionals,
  requestAddProfessional,
  requestProfessionalAvailability,
} from "../actions/professionals";
import ProfessionalsPage from "../pages/ProfessionalsPage";

const mapStateToProps = (state) => {
  const { professionals: stateSlice } = state;
  const {
    professionals,
    isFetching,
    selectedProfessional,
    isSavingProfessional,
  } = stateSlice;

  return {
    professionals,
    isFetching,
    isSavingProfessional,
    selectedProfessional,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProfessionals: async () => requestProfessionals(dispatch),

  selectProfessional: (professional) =>
    selectProfessional(dispatch, professional),

  addProfessional: async (professional) =>
    requestAddProfessional(dispatch, professional),

  fetchProfessionalAvailability: async (_id) =>
    requestProfessionalAvailability(dispatch, _id),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalsPage);

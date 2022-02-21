import { connect } from 'react-redux';
import {
    requestProfessionals,
    requestAddProfessional,
} from '../actions/professionals';
import {
    selectProfessional,
    requestProfessionalAvailability,
    toggleAvailabilityTimeSlotStatus,
} from '../actions/professionalAvailability';

import ProfessionalsPage from '../pages/ProfessionalsPage';

const mapStateToProps = (state) => {
    const {
        professionals: professionalsSlice,
        professionalAvailability: availabilitySlice,
    } = state;

    const { professionals, isFetching, isSavingProfessional } =
        professionalsSlice;

    const { availability, isFetchingAvailability, selectedProfessional } =
        availabilitySlice;

    return {
        professionals,
        isFetching,
        isSavingProfessional,
        selectedProfessional,
        availability,
        isFetchingAvailability,
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

    toggleTimeSlotStatus: async (timeSlotData) => {
        toggleAvailabilityTimeSlotStatus(dispatch, timeSlotData);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalsPage);

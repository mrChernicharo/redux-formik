import { connect } from 'react-redux';
import { fetchPatients } from '../actions/patients';
import { requestProfessionals } from '../actions/professionals';
import AppointmentsPage from '../pages/AppointmentsPage';

const mapStateToProps = (state) => {
    const { patients: patientsSlice, professionals: professionalsSlice } =
        state;
    const { patients } = patientsSlice;
    const { professionals } = professionalsSlice;

    return { patients, professionals };
};

const mapDispatchToProps = (dispatch) => ({
    fetchProfessionals: async () => requestProfessionals(dispatch),
    fetchPatients: async () => fetchPatients(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsPage);

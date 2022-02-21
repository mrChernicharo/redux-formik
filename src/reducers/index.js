import { createStore, combineReducers } from 'redux';
import patientsReducer from './patients';
import professionalsReducer from './professionals';
import professionalAvailabilityReducer from './professionalAvailability';

const rootReducer = combineReducers({
    patients: patientsReducer,
    professionals: professionalsReducer,
    professionalAvailability: professionalAvailabilityReducer,
});

const store = createStore(rootReducer);

export default store;

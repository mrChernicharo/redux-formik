const professionalsReducer = (
  state = {
    isFetching: false,
    isSavingProfessional: false,
    isFetchingAvailability: false,
    professionals: [],
    selectedProfessional: null,
  },
  action
) => {
  switch (action.type) {
    case "REQUEST_PROFESSIONALS":
      return {
        ...state,
        isFetching: true,
      };
    case "PROFESSIONALS_RECEIVED":
      return {
        ...state,
        isFetching: false,
        professionals: [...action.payload],
      };
    case "SELECT_PROFESSIONAL":
      return {
        ...state,
        selectedProfessional: action.payload,
      };
    case "REQUEST_ADD_PROFESSIONAL":
      return {
        ...state,
        isSavingProfessional: true,
      };
    case "PROFESSIONAL_ADDED":
      return {
        ...state,
        isSavingProfessional: false,
        professionals: [...state.professionals, action.payload],
      };
    case "ADD_PROFESSIONAL_ERROR":
      return {
        ...state,
        isSavingProfessional: false,
      };
    case "REQUEST_PROFESSIONAL_AVAILABILITY":
      return {
        ...state,
        isFetchingAvailability: true,
      };
    case "PROFESSIONAL_AVAILABILITY_RECEIVED":
      return {
        ...state,
        isFetchingAvailability: false,
        selectedProfessional: {
          ...state.selectedProfessional,
          availability: action.payload,
        },
      };
    default:
      return state;
  }
};

export default professionalsReducer;

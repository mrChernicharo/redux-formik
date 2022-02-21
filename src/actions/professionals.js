import useFetch from "../utils/useFetch";

const actions = {
  REQUEST_PROFESSIONALS: () => ({
    type: "REQUEST_PROFESSIONALS",
  }),
  PROFESSIONALS_RECEIVED: (data) => ({
    type: "PROFESSIONALS_RECEIVED",
    payload: data,
  }),
  REQUEST_ADD_PROFESSIONAL: () => ({ type: "REQUEST_ADD_PROFESSIONAL" }),
  PROFESSIONAL_ADDED: (data) => ({
    type: "PROFESSIONAL_ADDED",
    payload: data,
  }),
  ADD_PROFESSIONAL_ERROR: () => ({
    type: "ADD_PROFESSIONAL_ERROR",
  }),
  REQUEST_PROFESSIONAL_AVAILABILITY: (_id) => ({
    type: "REQUEST_PROFESSIONAL_AVAILABILITY",
    payload: _id,
  }),
  PROFESSIONAL_AVAILABILITY_RECEIVED: (availability) => ({
    type: "PROFESSIONAL_AVAILABILITY_RECEIVED",
    payload: availability,
  }),
};

export async function requestProfessionals(dispatch) {
  console.log("fetching professionals");
  dispatch(actions.REQUEST_PROFESSIONALS());

  const response = await fetch("http://localhost:8000/professionals");
  const data = await new Promise((resolve) => {
    setTimeout(() => resolve(response.json()), 2000);
  });

  console.log("professionals received!", { data });
  dispatch(actions.PROFESSIONALS_RECEIVED(data));
}

export async function requestAddProfessional(dispatch, professional) {
  console.log("adding professional");
  dispatch(actions.REQUEST_ADD_PROFESSIONAL());

  try {
    const data = await useFetch(
      "http://localhost:8000/professionals/add",
      professional
    );

    if (data.error) throw Error("Email already in use");

    console.log("professional added!", { data });
    dispatch(actions.PROFESSIONAL_ADDED(data));
  } catch (err) {
    console.log("add professional ERROR: ", { err });
    dispatch(actions.ADD_PROFESSIONAL_ERROR());
  }
}

export async function requestProfessionalAvailability(dispatch, _id) {
  dispatch(actions.REQUEST_PROFESSIONAL_AVAILABILITY(_id));

  const data = await useFetch(
    `http://localhost:8000/professionals/availability/?id=${_id}`
  );

  const availability = data[0].availability;

  console.log("availability received", { availability });
  dispatch(actions.PROFESSIONAL_AVAILABILITY_RECEIVED(availability));
}

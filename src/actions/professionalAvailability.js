import useFetch from "../utils/useFetch";

const actions = {
  SELECT_PROFESSIONAL: (professional) => ({
    type: "SELECT_PROFESSIONAL",
    payload: professional,
  }),
  REQUEST_PROFESSIONAL_AVAILABILITY: (_id) => ({
    type: "REQUEST_PROFESSIONAL_AVAILABILITY",
    payload: _id,
  }),
  PROFESSIONAL_AVAILABILITY_RECEIVED: (availability) => ({
    type: "PROFESSIONAL_AVAILABILITY_RECEIVED",
    payload: availability,
  }),
  TOGGLE_TIMESLOT_STATUS: (timeslot) => ({
    type: "TOGGLE_TIMESLOT_STATUS",
    payload: timeslot,
  }),
};

export async function selectProfessional(dispatch, professional) {
  console.log("selectProfessional", professional);
  dispatch(actions.SELECT_PROFESSIONAL(professional));

  if (!professional) dispatch(actions.PROFESSIONAL_AVAILABILITY_RECEIVED(null));
  else {
    await requestProfessionalAvailability(dispatch, professional._id);
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

export function toggleAvailabilityTimeSlotStatus(dispatch, timeslot) {
  const { weekday, hour, status } = timeslot;
  const newSlot = {
    ...timeslot,
    status:
      timeslot.status !== "BLOCKED"
        ? timeslot.status === "OPEN"
          ? "CLOSED"
          : "OPEN"
        : "BLOCKED",
  };
  console.log("toggle timeslot status", newSlot);
  dispatch(actions.TOGGLE_TIMESLOT_STATUS(newSlot));
}

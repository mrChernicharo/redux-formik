const professionals = (state = [], action) => {
  console.log({ state, action });

  switch (action.type) {
    case "FETCH_PROFESSIONALS":
      return (professionals) => [...professionals];
  }
};

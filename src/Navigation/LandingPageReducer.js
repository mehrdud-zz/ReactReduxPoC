const LandingPageReducer = (state = [], action) => {
  switch (action.type) {
    case "Dashboard":
      return state.concat([action.data]);
    default:
      return state;
  }
};
export default LandingPageReducer;

const LoadingReducer = (state = false, action) => {
  switch (action.type) {
    case "TURN_ON":
      return (state = true);

    case "TURN_OFF":
      return (state = false);

    default:
      return state;
  }
};

export default LoadingReducer;

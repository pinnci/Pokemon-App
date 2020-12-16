const ErrorReducer = (state = false, action) => {
  switch (action.type) {
    case "ERROR":
      return (state = true);

    case "NO_ERROR":
      return (state = false);

    default:
      return state;
  }
};

export default ErrorReducer;

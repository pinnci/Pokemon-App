export const showErrorScreen = () => {
  return {
    type: "ERROR",
  };
};

export const hideErrorScreen = () => {
  return {
    type: "NO_ERROR",
  };
};

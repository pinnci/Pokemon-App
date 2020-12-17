const PokemonFetchReducer = (state = [], action) => {
  switch (action.type) {
    case "initialFetch":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default PokemonFetchReducer;

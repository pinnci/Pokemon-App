const PokemonDetailFetchReducer = (state = false, action) => {
  switch (action.type) {
    case "pokemonDetailFetch":
      return (state = action.payload);

    default:
      return state;
  }
};

export default PokemonDetailFetchReducer;

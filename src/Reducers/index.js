//Combine reducers
import { combineReducers } from "redux";

//Reducers
import LoadingReducer from "./LoadingRecuder";
import PokemonFetchReducer from "./PokemonFetchReducer";
import PokemonDetailFetchReducer from "./PokemonDetailFetchReducer";
import ErrorReducer from "./ErrorReducer";

const AllReducers = combineReducers({
  Pokemons: PokemonFetchReducer,
  PokemonDetail: PokemonDetailFetchReducer,
  Loading: LoadingReducer,
  Error: ErrorReducer,
});

export default AllReducers;

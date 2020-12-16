//Combine reducers
import { combineReducers } from "redux";

//Reducers
import LoadingReducer from "./LoadingRecuder";
import PokemonReducer from "./PokemonReducer";
import PokemonDetailReducer from "./PokemonDetailReducer";
import ErrorReducer from "./ErrorReducer";

const AllReducers = combineReducers({
  Pokemons: PokemonReducer,
  PokemonDetail: PokemonDetailReducer,
  Loading: LoadingReducer,
  Error: ErrorReducer,
});

export default AllReducers;

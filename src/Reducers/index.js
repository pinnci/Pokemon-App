import { combineReducers } from 'redux';

//Reducers
import LoadingReducer from './LoadingRecuder';
import PokemonReducer from './PokemonReducer';
import SearchReducer from './SearchReducer';

const allReducers = combineReducers({
    Loading : LoadingReducer,
    AllPokemons : PokemonReducer,
    SearchedPokemon : SearchReducer
});

export default allReducers;
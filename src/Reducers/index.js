//Combine reducers
import { combineReducers } from 'redux';

//Reducers
import LoadingReducer from './LoadingRecuder';
import PokemonReducer from './PokemonReducer';
import ErrorReducer from './ErrorReducer';

const AllReducers = combineReducers({
    Loading : LoadingReducer,
    Pokemons : PokemonReducer,
    Error : ErrorReducer
});

export default AllReducers;
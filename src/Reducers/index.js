import { combineReducers } from 'redux';

//Reducers
import LoadingReducer from './LoadingRecuder';
import PokemonReducer from './PokemonReducer';

const allReducers = combineReducers({
    Loading : LoadingReducer,
    AllPokemons : PokemonReducer
});

export default allReducers;
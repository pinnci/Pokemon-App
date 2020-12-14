import { useEffect } from 'react';

//Selector, Dispatch
import { useDispatch } from 'react-redux';

//Actions
import {pokemonDetailFetch} from '../Actions/pokemonDetailFetch.js';
import {turnOffLoading} from '../Actions/LoadingActions';
import {turnOnLoading} from '../Actions/LoadingActions';
import {showErrorScreen} from '../Actions/ErrorActions';

//Axios
import axios from 'axios';

const PokemonDetailFetch = (props) => {
    let id = props.id;
    const dispatch = useDispatch();
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    //Capitalize strings
    const capitalize = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(()=>{
        dispatch(turnOnLoading());

        axios.get(url)
        .then(function(response){

            if(response.data.name.indexOf('-') >= 0){
                return
            }else{
                //Create new pokemon object
                let newPokemon = {
                    id : response.data.id,
                    name : capitalize(response.data.name),
                    image : response.data.sprites.front_default,
                    type : response.data.types[0].type.name,
                    abilities : response.data.abilities.map(ability =>capitalize(ability.ability.name)),
                    stats: response.data.stats.map(stat=> {
                                return {
                                    stat: capitalize(stat.stat.name),
                                    value:stat.base_stat
                                }
                            }),
                    weight : response.data.weight,
                    height : response.data.height,
                    sprites : [
                        response.data.sprites.front_default,
                        response.data.sprites.back_default,
                        response.data.sprites.front_shiny,
                        response.data.sprites.back_shiny,
                    ]
                }

                //Insert Pokemon detail to state
                dispatch(pokemonDetailFetch(newPokemon));

                //Turn off loading
                dispatch(turnOffLoading());
            }
        }).catch(error =>{
            //Turn off loading
            dispatch(turnOffLoading());

            //Show error screen
            dispatch(showErrorScreen());
        });
    },[url,dispatch])

    return(
        null
    )
}

export default PokemonDetailFetch;
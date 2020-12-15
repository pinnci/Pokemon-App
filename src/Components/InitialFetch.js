import { useEffect } from 'react';

//Selector, Dispatch
import { useDispatch } from 'react-redux';

//Lodash - debounce
import { debounce } from 'lodash';

//Actions
import {initialFetch} from '../Actions/FetchActions.js';
import {turnOffLoading} from '../Actions/LoadingActions';
import {turnOnLoading} from '../Actions/LoadingActions';
import {showErrorScreen} from '../Actions/ErrorActions';

//Axios
import axios from 'axios';

const InitialFetch = () => {
    const dispatch = useDispatch();

    //Capitalize strings
    const capitalize = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    //Simulate loading screen
    const debounceMainViewAnimation = debounce(()=>{
        dispatch(turnOffLoading());
    },3000);

    //When app starts, get 9 pokemons, then get additional pokemon info (id, name, image url, type, abilities)
    useEffect(()=>{
        dispatch(turnOnLoading());

        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=9')
        .then(function(response){
            
            let pokemonUrls=[];
            response.data.results.map(result => pokemonUrls.push(result.url))

            //Get additional info
            pokemonUrls.map(url => axios.get(url)
            .then(function(response){    
                //If pokemons name contains - do not add him to state. 
                //We want only main pokemon forms, but there were plenty of secondary forms which were divided by -
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
    
                    //Send to redux state
                    dispatch(initialFetch(newPokemon));
                    
                    //Turn off loading
                    debounceMainViewAnimation();
                }
            }))

        }).catch(error => {
            dispatch(turnOffLoading())
            dispatch(showErrorScreen())
        });
    },[debounceMainViewAnimation,dispatch]);

    return(
        null
    )
}

export default InitialFetch;
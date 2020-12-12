import React, { useEffect } from 'react';

//Selector, Dispatch
import { useDispatch } from 'react-redux';

//Lodash - debounce
import { debounce } from 'lodash';

//Actions
import {addPokemons} from '../Actions/addPokemons.js';
import {turnOffLoading} from '../Actions/LoadingActions';

//Axios
import axios from 'axios';

//Components
import Loading from '../Components/Loading';

//Styles
import './Intro.scss';

const IntroView = () => {
    const dispatch = useDispatch();

    const debounceMainViewAnimation = debounce(()=>{
        dispatch(turnOffLoading());
    },1000);

    //When app starts, get all pokemons, then get additional pokemon info (id, name, image url, type, abilities)
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1000')
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
                        abilities : response.data.abilities.map(ability =>ability.ability.name)
                    }
    
                    //Send to redux state
                    dispatch(addPokemons(newPokemon));
                    
                    //Turn off loading
                    debounceMainViewAnimation();
                    }
            }));
        });
    },[]);

    //Capitalize strings
    const capitalize = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <div className="view intro">
            <Loading />
        </div>
    )
}

export default IntroView;
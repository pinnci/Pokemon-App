//useState, useEffect
import React, { useEffect } from 'react';

//Axios
import axios from 'axios';

//Params
import { useParams } from "react-router-dom";

//Selector , dispatch
import { useSelector,useDispatch } from 'react-redux';

//Debounce
import {debounce} from 'lodash';

import {CSSTransition} from 'react-transition-group';

//Actions
import {pokemonDetailFetch} from '../Actions/pokemonDetailFetch.js';
import {turnOffLoading} from '../Actions/LoadingActions';
import {turnOnLoading} from '../Actions/LoadingActions';
import {showErrorScreen} from '../Actions/ErrorActions';

//Components
import Navigation from '../Components/Navigation';
import Loading from '../Components/Loading';

import PokemonDetail from '../Components/PokemonDetail';

const PokemonDetailView = () =>{
    const dispatch = useDispatch();
    const thisPokemon = useSelector(state => state.PokemonDetail);

    const isLoading = useSelector(store => store.Loading)

    //Extract ID
    let {id} = useParams();
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    let content = null;

    //Capitalize strings
    const capitalize = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //Simulate loading screen
    const debounceDetailViewAnimation = debounce(()=>{
        dispatch(turnOffLoading());
    },3000);

    useEffect(()=>{
        if(!thisPokemon.id || thisPokemon.id !== Number(id)){
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
                    dispatch(pokemonDetailFetch(newPokemon))
    
                    //Turn off loading
                    debounceDetailViewAnimation();
                }
            }).catch(err =>{
                dispatch(showErrorScreen());
            });
        }else{
            return
        }
    },[dispatch,url,thisPokemon,debounceDetailViewAnimation,id])

    //Prevent fetching data when pokemon was already fetched
    if(thisPokemon.id === Number(id)){
        content = <PokemonDetail thisPokemon={thisPokemon} />

    }else{
        content = '';
    }
    
    return(
        <div className="PokemonDetail">
            <Navigation />
            
            {isLoading ? <Loading /> : ''}
                <CSSTransition 
                    in={!isLoading && thisPokemon.id === Number(id)}
                    timeout={300}
                    classNames="animate-list"
                    unmountOnExit>
                        <div key="transition-group-content">
                            {content}
                        </div>
                </CSSTransition>
        </div>
    )
}

export default PokemonDetailView;
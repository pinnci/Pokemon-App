//useState, useEffect
import React, { useState, useEffect, useRef } from 'react';

//Axios
import axios from 'axios';

//Params
import { useParams } from "react-router-dom";

//Selector , dispatch
import { useSelector,useDispatch } from 'react-redux';

import {debounce} from 'lodash';

//Actions
import {pokemonDetailFetch} from '../Actions/pokemonDetailFetch.js';
import {turnOffLoading} from '../Actions/LoadingActions';
import {turnOnLoading} from '../Actions/LoadingActions';
import {showErrorScreen} from '../Actions/ErrorActions';

//Components
import Navigation from '../Components/Navigation';
import Loading from '../Components/Loading';

//Color switcher function
import {colorSwitcher} from '../Components/PokemonSwitchColor';

const PokemonDetailView = () =>{
    const dispatch = useDispatch();
    const thisPokemon = useSelector(state => state.PokemonDetail);

    const isLoading = useSelector(store => store.Loading)

    const [backgroundColor, setBackgroundColor] = useState(null);

    //Create ref on hero image
    let heroImage = useRef(null);

    //Extract ID
    let {id} = useParams();
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    let content = null;

    //Change hero image 
    const changeHeroImage = (e) =>{
        const clickedImageUrl = e.target.src;
        heroImage.current.src = clickedImageUrl
    }

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
    
                    //Switch pokemon background color depending on type of pokemon
                    setBackgroundColor(colorSwitcher(newPokemon.type));
                }
            }).catch(err =>{
                dispatch(showErrorScreen());
            });
        }else{
            //Change colors in pokemon detail page
            setBackgroundColor(colorSwitcher(thisPokemon.type))
        }
    },[dispatch,url,thisPokemon,debounceDetailViewAnimation,id])

    //Prevent fetching data when pokemon was already fetched
    if(thisPokemon.id === Number(id)){
        content =
        <div>
            <div className="PokemonDetail__hero" style={{backgroundColor:backgroundColor}}>
                <div className="PokemonDetail__hero__image">
                    <img src={thisPokemon.image} alt={`${thisPokemon.name}`} ref={heroImage} />
                </div>  
            </div>

            <div className="PokemonDetail__main">
                <div className="PokemonDetail__main__info">
                    <h1>{thisPokemon.name}</h1>
                    <p style={{backgroundColor:backgroundColor}}>{thisPokemon.type.toUpperCase()}</p>
                </div>

                <div className="PokemonDetail__main__stats__container">
                    <div className="PokemonDetail__main__stats__column">
                        <h3 style={{color:backgroundColor}}>Stats</h3>
                        {thisPokemon.stats.map( (stat,i) => {
                            return <p key={i}>{stat.stat} : {stat.value}</p>
                        })}
                    </div>

                    <div className="PokemonDetail__main__stats__column">
                        <h3 style={{color:backgroundColor}}>Abilities</h3>
                        {thisPokemon.abilities.map( (ability,i) => {
                            return <p key={i}>{ability}</p>
                        })}
                    </div>

                    <div className="PokemonDetail__main__stats__column">
                        <h3 style={{color:backgroundColor}}>Dimensions</h3>
                        <p>Height : {thisPokemon.height * 10} cm</p>
                        <p>Weight : {thisPokemon.weight / 10} kg</p>
                    </div>

                    <div className="PokemonDetail__main__stats__column">
                        <h3 style={{color:backgroundColor}}>Sprites</h3>

                        <div className="PokemonDetail__main__stats__column__sprites">
                            {thisPokemon.sprites.map( (sprite,i) =>{
                                return <img src={sprite} key={i} alt="sprite" onClick={changeHeroImage} />
                            })}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    }else{
        content = '';
    }
    
    return(
        <div className="PokemonDetail">
            <Navigation />
            {isLoading ? <Loading /> : content}
        </div>
    )
}

export default PokemonDetailView;
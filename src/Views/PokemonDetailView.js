//useState, useEffect
import React, { useState, useEffect, useRef } from 'react';

//Params
import { useParams } from "react-router-dom";

//Selector
import { useSelector } from 'react-redux';

//Components
import Navigation from '../Components/Navigation';

//Color switcher function
import {colorSwitcher} from '../Components/PokemonSwitchColor';

const PokemonDetailView = () =>{
    const [backgroundColor, setBackgroundColor] = useState(null);

    let heroImage = useRef(null);

    const changeHeroImage = (e) =>{
        const clickedImageUrl = e.target.src;
        heroImage.current.src = clickedImageUrl
    }

    const Pokemons = useSelector(state => state.Pokemons);

    let {id} = useParams();
    id = parseInt(id);

    let thisPokemon;

    //If selected pokemons ID === ID in allPokemons state, insert pokemon to thisPokemon variable
    Pokemons.map(pokemon => {
        if(pokemon.id === id){
            return thisPokemon = pokemon;
        }else{
            return thisPokemon
        }
    })

    //Switch pokemon background color depending on type of pokemon
    useEffect(()=>{
        setBackgroundColor(colorSwitcher(thisPokemon.type));
    },[thisPokemon])

    return(
        <div className="PokemonDetail">
            <Navigation />

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
    )
}

export default PokemonDetailView;
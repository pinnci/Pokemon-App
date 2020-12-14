import React, { useEffect, useState } from 'react';
import {colorSwitcher} from '../Components/PokemonSwitchColor';

const Pokemon = (props) =>{
    const [backgroundColor,setBackgroundColor] = useState(null);

    //Choose pokemon card background color based on pokemon type
    useEffect(()=>{
        setBackgroundColor(colorSwitcher(props.type))
    },[props.type]);
    
    return(
        <div className="Pokemon__info" style={{backgroundColor:backgroundColor}}>
                <h2>{props.name}</h2>
                
                {props.abilities.map( (ability,i) => 
                    <div key={i} className="Pokemon__abilities">
                        <p>{ability}</p>
                </div>)}
                
            <div className="Pokemon__image">
                <img src={props.image} alt={props.name} /> 
            </div>       
        </div>
    )
}

export default Pokemon;
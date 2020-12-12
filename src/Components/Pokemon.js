import React, { useEffect, useState } from 'react';

//Styles
import './Pokemon.scss';

const Pokemon = (props) =>{
    const [backgroundColor,setBackgroundColor] = useState(null);

    //Switch pokemon background color depending on type of pokemon
    useEffect(()=>{
        if(props.type === 'grass'){
            setBackgroundColor('#78c850');
    
        }else if(props.type === 'bug'){
            setBackgroundColor('#a8b820')
        }
        
        else if(props.type === 'fire'){
            setBackgroundColor('#f08030');
    
        }else if(props.type === 'water'){
            setBackgroundColor('#6890f0');
    
        }else if(props.type === 'psychic'){
            setBackgroundColor('#f85888');
    
        }else if(props.type === 'normal'){
            setBackgroundColor('#a8a878');
    
        }else if(props.type === 'ground'){
            setBackgroundColor('#e0c068')
        }
        
        else if(props.type === 'electric'){
            setBackgroundColor('#f8d030');
    
        }else if(props.type === 'poison'){
            setBackgroundColor('#a040a0');
    
        }else if(props.type === 'rock'){
            setBackgroundColor('#b8a038');
    
        }else if(props.type === 'fighting'){
            setBackgroundColor('#c03028');
    
        }else if(props.type === 'fairy'){
            setBackgroundColor('#f0b6bc');
    
        }else if(props.type === 'ice'){
            setBackgroundColor('#98d8d8');
        }
    
        else if(props.type === 'flying'){
            setBackgroundColor('#a890f0');
        }
    
        else if(props.type === 'ghost'){
            setBackgroundColor('#705898');
        }
    
        else if(props.type === 'dark'){
            setBackgroundColor('#705848');
        }
    
        else if(props.type === 'dragon'){
            setBackgroundColor('#7038f8');
        }
    
        else if(props.type === 'steel'){
            setBackgroundColor('#b8b8d0');
        }
    },[props.type])


    return(
        <div className="Pokemon" style={{backgroundColor:backgroundColor}}>
            <div className="Pokemon__info">
                <h2>{props.name}</h2>
                
                {props.abilities.map( (ability,i) => 
                    <div key={i} className="Pokemon__abilities">
                        <p>{ability}</p>
                </div>)}
                
            </div>

            <div className="Pokemon__image">
                <img src={props.image} alt={props.name} /> 
            </div>       
        </div>
    )
}

export default Pokemon;
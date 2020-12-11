import React, { useEffect, useState } from 'react';

//Styles
import './Pokemon.scss';

const Pokemon = (props) =>{
    const [backgroundColor,setBackgroundColor] = useState('white');

    useEffect(()=>{
        if(props.type === 'grass'){
            setBackgroundColor('#49d0b0');
        }else if(props.type === 'fire'){
            setBackgroundColor('#fc6c6c');
        }else if(props.type === 'water'){
            setBackgroundColor('#6fbafe');
        }
    },[])


    return(
        <div className="Pokemon" style={{backgroundColor:backgroundColor}}>
            <div className="Pokemon__info">
                <h2>{props.name}</h2>

                <div className="Pokemon__abilities">
                    <p>{props.abilities[0]}</p>
                </div>
                
                <div className="Pokemon__abilities">
                    <p>{props.abilities[1]}</p>
                </div>
            </div>

            <div className="Pokemon__image">
                <img src={props.image} alt={props.name} /> 
            </div>       
        </div>
    )
}

export default Pokemon;
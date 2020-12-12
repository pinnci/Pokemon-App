import React from 'react';

//Dispatch
import { useDispatch } from 'react-redux';

//Search Action
import { search } from '../Actions/SearchActions';

const Search = () => {
    const Dispatch = useDispatch();

    //Add searched value to redux state
    const addValueToState = (e) =>{
        Dispatch(search(e.target.value))
    }
    
    return(
        <input 
            type="text"
            placeholder="Search for pokemon.."
            onChange={addValueToState}
             />
    )
}

export default Search;
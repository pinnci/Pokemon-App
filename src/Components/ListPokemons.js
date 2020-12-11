//Selector
import { useSelector } from 'react-redux';

//Components
import Pokemon from './Pokemon';

//Styles
import './ListPokemons.scss';

const ListPokemons = () =>{
    const allPokemons = useSelector(store => store.AllPokemons);

    //Render all pokemons in state
    const listPokemons = () =>{
        return allPokemons.map( (pokemon,i) => 
            <Pokemon 
                key={i} 
                name={pokemon.name} 
                image={pokemon.image}
                type={pokemon.type}
                abilities={pokemon.abilities}
                 />)
    };

    return(
        <div className="ListPokemons">
            {listPokemons()}
        </div>
    )
}

export default ListPokemons;
//Selector
import { useSelector } from 'react-redux';

//Components
import Pokemon from './Pokemon';

//Styles
import './ListPokemons.scss';

const ListPokemons = () =>{
    const allPokemons = useSelector(store => store.AllPokemons);

    const searchedValue = useSelector(store => store.SearchedPokemon);

    //Render first 9 pokemons or render searched pokemon
    const listPokemons = () =>{
        let result = [];
        if(!searchedValue){
            result =  allPokemons.slice(0,9).map( (pokemon,i) => 
                <Pokemon 
                    key={i} 
                    name={pokemon.name} 
                    image={pokemon.image}
                    type={pokemon.type}
                    abilities={pokemon.abilities}
                    />
            )
        }else{
           allPokemons.map( (pokemon,i) =>{
               if(pokemon.name.toLowerCase().substr(0,searchedValue.length) === searchedValue.toLowerCase()){
                   result.push(                  
                        <Pokemon 
                            key={i} 
                            name={pokemon.name} 
                            image={pokemon.image}
                            type={pokemon.type}
                            abilities={pokemon.abilities}
                        />
                    );
               }
           }) 
        }
        
        //If there's no pokemon with name equals to searchedString
        if(result.length < 1){
            result = <p>Oops.. There's no pokemon with that name !</p>
        }

        return result;
    };

    return(
        <div className="ListPokemons">
            {listPokemons()}
        </div>
    )
}

export default ListPokemons;
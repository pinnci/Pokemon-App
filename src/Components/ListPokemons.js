//Selector
import { useSelector } from "react-redux";

//Link
import { Link } from "react-router-dom";

//Components
import Pokemon from "./Pokemon";

const ListPokemons = () => {
  const Pokemons = useSelector((store) => store.Pokemons);

  //Render fetched pokemons
  const listPokemons = () => {
    let result = [];

    result = Pokemons.map((pokemon, i) => (
      <div className="Pokemon" key={i}>
        <Link to={`/pokemons/${pokemon.id}`}>
          <Pokemon
            key={i}
            name={pokemon.name}
            image={pokemon.image}
            type={pokemon.type}
            abilities={pokemon.abilities}
          />
        </Link>
      </div>
    ));

    return result;
  };

  return <div className="ListPokemons">{listPokemons()}</div>;
};

export default ListPokemons;

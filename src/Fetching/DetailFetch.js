import { useEffect } from "react";

//Selector, Dispatch
import { useDispatch } from "react-redux";

//Lodash - debounce
import { debounce } from "lodash";

import axios from "axios";

//Actions
import { pokemonDetailFetch } from "../Actions";
import { turnOffLoading } from "../Actions";
import { turnOnLoading } from "../Actions";
import { showErrorScreen } from "../Actions";

const DetailFetch = (props) => {
  const id = props.id;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const dispatch = useDispatch();

  //Capitalize pokemon data
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  //Simulate loading screen
  const debounceDetailViewAnimation = debounce(() => {
    dispatch(turnOffLoading());
  }, 3000);

  //When pokemon detail state is empty or pokemon id != id of already fetched pokemon, fetch pokemon by id and get its info.
  useEffect(() => {
    dispatch(turnOnLoading());

    axios
      .get(url)
      .then(function (response) {
        //If pokemons name contains '-' do not add him to state.
        //We want only main pokemon forms, but there were plenty of secondary forms which were divided by '-'.
        if (response.data.name.indexOf("-") >= 0) {
          return;
        } else {
          //Create new pokemon object
          let newPokemon = {
            id: response.data.id,
            name: capitalize(response.data.name),
            image: response.data.sprites.front_default,
            type: response.data.types[0].type.name,
            abilities: response.data.abilities.map((ability) =>
              capitalize(ability.ability.name)
            ),
            stats: response.data.stats.map((stat) => {
              return {
                stat: capitalize(stat.stat.name),
                value: stat.base_stat,
              };
            }),
            weight: response.data.weight,
            height: response.data.height,
            sprites: [
              response.data.sprites.front_default,
              response.data.sprites.back_default,
              response.data.sprites.front_shiny,
              response.data.sprites.back_shiny,
            ],
          };

          //Insert Pokemon detail to state
          dispatch(pokemonDetailFetch(newPokemon));

          //Turn off loading
          debounceDetailViewAnimation();
        }
      })
      .catch((error) => {
        //Turn off loading
        dispatch(turnOffLoading());

        //Show error screen
        dispatch(showErrorScreen());
      });
  }, [debounceDetailViewAnimation, dispatch, url]);

  return null;
};

export default DetailFetch;

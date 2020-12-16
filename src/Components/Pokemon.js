import React, { useEffect, useState } from "react";
import { colorSwitcher } from "../Components/PokemonSwitchColor";

const Pokemon = (props) => {
  const [backgroundColor, setBackgroundColor] = useState(null);

  //Choose pokemon card background color based on pokemon type
  useEffect(() => {
    setBackgroundColor(colorSwitcher(props.type));
  }, [props.type]);

  return (
    <div className="Pokemon__info" style={{ backgroundColor: backgroundColor }}>
      <h2 className="Pokemon__info__name">{props.name}</h2>

      <div className="Pokemon__abilities">
        {props.abilities.map((ability, i) => (
          <div key={i}>
            <p className="Pokemon__info__ability">{ability}</p>
          </div>
        ))}
      </div>

      <div className="Pokemon__image">
        <img src={props.image} alt={props.name} className="pokemon_img" />
      </div>
    </div>
  );
};

export default Pokemon;

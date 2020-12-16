//iseState, useRef, useEffect
import React, { useState, useRef, useEffect } from "react";

//Color switcher
import { colorSwitcher } from "./PokemonSwitchColor";

const PokemonDetail = (props) => {
  const [backgroundColor, setBackgroundColor] = useState(null);
  let thisPokemon = props.thisPokemon;

  //Create ref on hero image
  let heroImage = useRef(null);

  //Change hero image
  const changeHeroImage = (e) => {
    const clickedImageUrl = e.target.src;
    heroImage.current.src = clickedImageUrl;
  };

  useEffect(() => {
    setBackgroundColor(colorSwitcher(props.thisPokemon.type));
  }, [props.thisPokemon.type]);

  return (
    <div className="PokemonDetail">
      <div
        className="PokemonDetail__hero"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="PokemonDetail__hero__image">
          <img
            src={thisPokemon.image}
            alt={thisPokemon.name}
            ref={heroImage}
            id="PokemonDetail__hero__image"
          />
        </div>
      </div>

      <div className="PokemonDetail__main">
        <div className="PokemonDetail__main__info">
          <h1>{thisPokemon.name}</h1>
          <p
            id="PokemonDetail__main__type"
            style={{ backgroundColor: backgroundColor }}
          >
            {thisPokemon.type.toUpperCase()}
          </p>
        </div>

        <div className="PokemonDetail__main__stats__container">
          <div className="PokemonDetail__main__stats__column">
            <h3 style={{ color: backgroundColor }}>Stats</h3>
            {thisPokemon.stats.map((stat, i) => {
              return (
                <p id="PokemonDetail__main__stats__stat" key={i}>
                  {stat.stat} : {stat.value}
                </p>
              );
            })}
          </div>

          <div className="PokemonDetail__main__stats__column">
            <h3 style={{ color: backgroundColor }}>Abilities</h3>
            {thisPokemon.abilities.map((ability, i) => {
              return (
                <p id="PokemonDetail__main__ability" key={i}>
                  {ability}
                </p>
              );
            })}
          </div>

          <div className="PokemonDetail__main__stats__column">
            <h3 style={{ color: backgroundColor }}>Dimensions</h3>
            <p id="PokemonDetail__main__stats__height">
              Height : {thisPokemon.height * 10} cm
            </p>
            <p id="PokemonDetail__main__stats__weight">
              Weight : {thisPokemon.weight / 10} kg
            </p>
          </div>

          <div className="PokemonDetail__main__stats__column">
            <h3 style={{ color: backgroundColor }}>Sprites</h3>

            <div className="PokemonDetail__main__stats__column__sprites">
              {thisPokemon.sprites.map((sprite, i) => {
                return (
                  <img
                    src={sprite}
                    key={i}
                    alt="sprite"
                    onClick={changeHeroImage}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;

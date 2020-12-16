import React from "react";
import { shallow } from "enzyme";

//Component
import PokemonDetail from "../Components/PokemonDetail";

const data = {
  name: "Pokemon-name",
  image: "Pokemon-image",
  type: "Pokemon-type",
  abilities: ["Pokemon-ability"],
  stats: [{ stat: "Pokemon-stat", value: "Pokemon-stat-value" }],
  weight: 100,
  height: 100,
  sprites: ["Pokemon-sprite"],
};

const wrapper = shallow(<PokemonDetail thisPokemon={data} />);

describe("Pokemon detail test", () => {
  it("renders pokemon name", () => {
    const pokemonName = wrapper.find("h1").text();

    expect(pokemonName).toEqual(data.name);
  });

  it("renders pokemon image", () => {
    const pokemonImage = wrapper.find("#PokemonDetail__hero__image");

    expect(pokemonImage.prop("src")).toEqual(data.image);
    expect(pokemonImage.prop("alt")).toEqual(data.name);
  });

  it("renders pokemon type", () => {
    const pokemonType = wrapper.find("#PokemonDetail__main__type").text();

    expect(pokemonType).toEqual(data.type.toLocaleUpperCase());
  });

  it("renders pokemon stats", () => {
    const pokemonStats = wrapper
      .find("#PokemonDetail__main__stats__stat")
      .text();

    expect(pokemonStats).toEqual(
      `${data.stats[0].stat} : ${data.stats[0].value}`
    );
  });

  it("renders pokemon abilities", () => {
    const pokemonAbility = wrapper.find("#PokemonDetail__main__ability").text();

    expect(pokemonAbility).toEqual(data.abilities[0]);
  });

  it("renders pokemon weight", () => {
    const pokemonWeight = wrapper
      .find("#PokemonDetail__main__stats__weight")
      .text();

    expect(pokemonWeight).toEqual("Weight : " + data.weight / 10 + " kg");
  });

  it("renders pokemon height", () => {
    const pokemonHeight = wrapper
      .find("#PokemonDetail__main__stats__height")
      .text();

    expect(pokemonHeight).toEqual("Height : " + data.height * 10 + " cm");
  });

  it("renders pokemon sprites", () => {
    const pokemonSprites = wrapper.find(
      ".PokemonDetail__main__stats__column__sprites"
    );
    const pokemonSpritesImage = pokemonSprites.find("img");

    expect(pokemonSpritesImage.prop("src")).toEqual(data.sprites[0]);
    expect(pokemonSpritesImage.prop("alt")).toEqual("sprite");
  });
});

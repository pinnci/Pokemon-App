import React from "react";
import { shallow } from "enzyme";

//Component
import Pokemon from "../Components/Pokemon";

const data = {
  name: "pokemon-name",
  image: "pokemon-image",
  abilities: ["pokemon-ability-1"],
};

const wrapper = shallow(
  <Pokemon
    name={data.name}
    image={data.image}
    type={data.type}
    abilities={data.abilities}
  />
);

describe("Pokemon card test", () => {
  it("renders pokemon name", () => {
    const pokemonName = wrapper.find(".Pokemon__info__name").text();

    expect(pokemonName).toEqual(data.name);
  });

  it("renders pokemon image", () => {
    const pokemonImage = wrapper.find(".pokemon_img");

    expect(pokemonImage.prop("src")).toEqual(data.image);
    expect(pokemonImage.prop("alt")).toEqual(data.name);
  });

  it("renders pokemon ability", () => {
    const pokemonAbilities = wrapper.find(".Pokemon__abilities");
    pokemonAbilities.find(".Pokemon__info__ability").text();

    expect(pokemonAbilities.text()).toEqual(data.abilities[0]);
  });
});

//useState, useEffect
import React from "react";

//Params
import { useParams } from "react-router-dom";

//Selector , dispatch
import { useSelector } from "react-redux";

//React transition group
import { CSSTransition } from "react-transition-group";

//Components
import Navigation from "../Components/Navigation";
import Loading from "../Components/Loading";
import PokemonDetail from "../Components/PokemonDetail";

//Pokemon detail fetch
import DetailFetch from "../Fetching/DetailFetch";

const PokemonDetailView = () => {
  const thisPokemon = useSelector((state) => state.PokemonDetail);
  const isLoading = useSelector((store) => store.Loading);

  //Extract ID
  let { id } = useParams();
  let content = null;

  //Prevent fetching data when pokemon was already fetched
  if (thisPokemon.id === Number(id)) {
    content = <PokemonDetail thisPokemon={thisPokemon} />;
  } else {
    content = "";
  }

  return (
    <div className="PokemonDetail">
      <Navigation />

      {!thisPokemon || thisPokemon.id !== Number(id) ? (
        <DetailFetch id={id} />
      ) : (
        ""
      )}

      {isLoading ? <Loading /> : ""}
      <CSSTransition
        in={!isLoading && thisPokemon.id === Number(id)}
        timeout={300}
        classNames="animate-content"
        unmountOnExit
      >
        <div key="transition-group-content">{content}</div>
      </CSSTransition>
    </div>
  );
};

export default PokemonDetailView;

import React from "react";

//Selector
import { useSelector } from "react-redux";

//CSSTransition
import { CSSTransition } from "react-transition-group";

//Components
import Navigation from "../Components/Navigation";
import ListPokemons from "../Components/ListPokemons";
import Loading from "../Components/Loading";
import InitialFetch from "../Fetching/InitialFetch";

const MainView = () => {
  const Pokemons = useSelector((state) => state.Pokemons);
  const isLoading = useSelector((state) => state.Loading);

  return (
    <div className="view main">
      <Navigation />

      {!Pokemons[0] && !isLoading ? <InitialFetch /> : ""}

      {isLoading ? <Loading /> : ""}

      <CSSTransition
        in={!isLoading && Pokemons.length > 0}
        timeout={300}
        classNames="animate-content"
        unmountOnExit
      >
        <ListPokemons />
      </CSSTransition>
    </div>
  );
};

export default MainView;

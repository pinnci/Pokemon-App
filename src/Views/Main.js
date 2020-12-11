import React from 'react';

//Components
import Header from '../Components/Header';
import ListPokemons from '../Components/ListPokemons';

//Styles
import './Main.scss';

const MainView = () => {
    return(
        <div className="view main">
            <Header />
            <ListPokemons />
        </div>
    )
}

export default MainView;
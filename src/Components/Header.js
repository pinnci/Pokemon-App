import React from 'react';

//Components
import Search from '../Components/Search';

//Styles
import './Header.scss';

//Logo
import image from '../Img/pokemon-logo.png';

const Header = () =>{
    return(
        <nav>
            <div className="nav__logo">
                <img src={image} alt="pokemon-logo" />
            </div>

            <div className="nav__search">
                <Search />
            </div>
        </nav>
    )
}

export default Header;

import React from 'react';

//Link
import { Link } from 'react-router-dom';

//Logo
import image from '../Assets/Img/pokemon-logo.png';

//Arrow Icon
import LeftArrow from './LeftArrow';

const Navigation = () =>{
    const location = window.location.pathname;
    
    return(
        <nav>
            {location === '/' || location === '/error' ? null : <div className="nav__arrowback"><Link to='/'><LeftArrow/></Link></div>}
            
            <div className="nav__logo">
                <Link to='/'><img src={image} alt="pokemon-logo" /></Link>
            </div>
        </nav>
    )
}

export default Navigation;

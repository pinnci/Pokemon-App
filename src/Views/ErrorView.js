import React from 'react';

//Link
import { Link } from 'react-router-dom';

//Dispatch
import {useDispatch} from 'react-redux';

//Actions
import {hideErrorScreen} from '../Actions/ErrorActions';
import {turnOnLoading} from '../Actions/LoadingActions';

//Components
import Navigation from '../Components/Navigation';

//Errorview image
import ErrorViewImage from '../Assets/Img/error-image.png';

//Refresh icon
import Refresh from '../Assets/Icons/Refresh';

const ErrorView = () => {
    let dispatch = useDispatch();
    const tryagain =()=>{
        dispatch(hideErrorScreen());
        dispatch(turnOnLoading());
    }
    return(
        <div className="view error">
            <Navigation />
            <div className="error__message">
                <div className="error_message__img">
                    <img src={ErrorViewImage} alt="error" />
                </div>

                <div className="error__message__text">
                    <h2>Oops..</h2>
                    <p>There was an error with fetching data.</p>
                    <p>Please try again later.</p>
                </div>

                <Link to="/">
                    <div onClick={tryagain}>
                        <Refresh />
                    </div>
                    
                </Link>
               
            </div>
            
        </div>
    )
}

export default ErrorView;
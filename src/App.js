//Selector
import { useSelector } from 'react-redux';

//Views
import IntroView from './Views/Intro';
import MainView from './Views/Main';

//Styles
import './App.scss';

//React-trasition-group
import { CSSTransition } from 'react-transition-group';

function App(){
  const isLoading = useSelector(state => state.Loading);
  
  return (
    <div className="App">
      <div className="container">
        <CSSTransition
            in={isLoading}
            timeout={300}
            classNames="intro-view"
            unmountOnExit
            >
              <IntroView />
            
        </CSSTransition>

        <CSSTransition
            in={!isLoading}
            timeout={500}
            classNames="main-view"
            unmountOnExit
            >
              <MainView />
            
        </CSSTransition>

      </div>
    </div>
  );
}

export default App;

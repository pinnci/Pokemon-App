//Selector
import { useSelector } from 'react-redux';

//React-router-dom
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

//Views
import MainView from './Views/MainView';
import PokemonDetailView from './Views/PokemonDetailView';
import ErrorView from './Views/ErrorView';

//Components
import InitialFetch from './Components/InitialFetch';

//Styles
import './Assets/Styles/index.scss';

function App(){
  const Pokemons = useSelector(state => state.Pokemons);
  const isError = useSelector(state => state.Error); 

  return (
    <div className="App">
      <div className="container">
        <Router>
            <Route exact path="/">
              {Pokemons.length === 0 || isError ? <InitialFetch /> : null}
              <MainView />
            </Route>
                
            <Route path="/pokemons/:id">
              <PokemonDetailView />
            </Route>

               {isError ? <Redirect exact to="/error" /> : null}
            <Route path="/error">
              <ErrorView />
            </Route>
        </Router>
      </div>
    </div>
  );
}

export default App;

# Pokedex App

#### Simplified version of Pokédex made in React.js.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

Link - https://pokemon-app-pinnci.herokuapp.com/

## Description

Whole project is wrapped in Redux framework, which holds all app's states. It consists of four states.

1. Pokemons
2. PokemonDetail
3. Loading
4. Error

These states are updated in two cases.

- When app is initialized
- When user click on Pokemon card to see more details about it

#### 1. App initialization

When the app is initialized, Loading state change its value from false to true, so loading symbol will be visible and InitialFetch component is called. In this component I'm using [axios](https://github.com/axios/axios) to fetch data from [PokeApi](https://github.com/PokeAPI/pokeapi), specifically nine Pokémons. Response from this call is Pokemon's name and URL for additional info about that Pokemon. There I'm calling another axios calls on these URL's to get informations like name, type, image and abilities. When call for additional information is successful, I create an object (newPokemon) and fill it with these informations. Now I can finally dispatch this object to Pokemons state.

#### 2. Pokemon Detail

When user clicks on Pokemon card, Loading state change its value from false to true, so loading symbol will be visible. I'm using React-router-dom's useParams() method to get ID of clicked Pokémon. After that, DetailFetch component is called and ID is sent to this component as a prop. Here, I'm using axios to get additional information of that Pokemon based on ID (name, type, sprites, stats, weight, height, etc..). If this call is successful, I create an object (newPokemon) and fill it with these informations. Finally, this object is dispatched to PokemonDetail state.

Both of these cases first check whether the states are empty or not. If they are empty, only then calls will be made. This will prevent app from repeated fetching. 

### Views

App consists of three views.

- Main view (/)
- Pokemon detail view (/pokemons:id)
- Error view (/error)

For switching between these views I'm using [React-router-dom](https://reactrouter.com/).

The Main view and Detail view will be displayed only after successful retrieval of data from PokeApi. If any of the calls detects an error, the application will be redirected to an error page (/error).

All views contains a Navigation component with a Pokémon logo, which redirects user to Main view (/) when clicked.

#### Main view

Consists of Navigation component and ListPokemons component, which is responsible for displaying all of the Pokemons in the Pokemons state. They are displayed as a 'card' (Pokemon component), which contains name, image, abilities and background color which is changed depending on Pokemons type (/Components/colorSwitcher function). Also they serve as a link to Detail view.

#### Detail view

Consists of Navigation component and PokemonDetail component, which is responsible for displaying all of the information about displayed Pokémon. Color switcher function is also used here. (Changes background color and color of headings dependind on pokemon type).

#### Error view

Consists of Navigation component, sad Pokémon image, error message and button, which will try to reload page.


## Notes

- Application is fully responsive
- Try to click on sprites images in PokemonDetail view (Hero image will change).
- InitialFetch and DetailFetch loading animation takes about three seconds. It's on purpose to make feeling like real loading. I'm debouncing Loading action to set state to false, when axios call is successful (debounce from Lodash).
- 'Go back' arrow will appear in Navigation only on PokemonDetail view.
- In SRC folder, you can find 'Tests' folder, which contains of four test files (14 tests total). 

## Plugins

- Axios - API calls
- Node-sass - Styling
- React-trasition-group - Animation when data is successfully fetched
- React-router-dom - Routing between views
- Redux - State
- React-redux - Using state 
- Enzyme - Testing
- Lodash - Debouncing actions

## Possible upgrades

Add search box, where user can type any Pokémon's name or ID. Call to PokeApi will be made with value of that search box. User will get all details about searched Pokémon. 

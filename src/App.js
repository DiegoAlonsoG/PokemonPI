import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Landing from './components/Landing/Landing';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/create" component={CreatePokemon} />
      <Route exact path="/pokemon/:id" component={PokemonDetail} />
    </div>
  );
}

export default App;

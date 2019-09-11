import React from 'react';
import '../stylesheets/App.css';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      id: 1,
      name: 'bulbasaur',
      types: ['poison', 'grass'],
      evolution: null,
      url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    }
  }
  
  render(){
    debugger;
    return (
      <div className="App">
        <h1>Mi lista de Pokemon</h1>
        <PokeList pokemons={this.state}/>
      </div>
  )};
}

export default App;

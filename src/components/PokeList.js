import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) =>{ 
    
    const renderList= (props) =>{
    return props.pokemons.map((pokemon,index)=>{
      return <li className="poke__card-wrapper" key={index}> <Pokemon pokemons={pokemon}/> </li>
    })
    };
    
    return (
        <ul className = "poke__list-style">
           {renderList(props)}
       
        </ul>
    )
}

export default PokeList;
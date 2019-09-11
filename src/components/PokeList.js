import React from 'react';
import Pokemon from './Pokemon';
debugger;
const PokeList = (props) =>{
   debugger; 
    const renderList=(props)=>{
    props.map((pokemon,index)=>{
        return <li className="poke__list-card" key={index}><Pokemon pokemons={pokemon}/></li>
    })
    };

    return (
        <ul className = "poke__list-style">
            {renderList(props)}        
        </ul>
    )
}

export default PokeList;
import React from 'react';

const Pokemon =(props)=>{
    const printTypes = (types) =>{
        return types.map((type,index) =>{
            return <li className="poke__types-type" key={index}> {type} </li>
        })
    }

    return (
        <div>
            <img className="poke__pic" alt="Bulbasaur" src= {props.pokemons.url}/>
            <h3 className="poke__name">{props.pokemons.name}</h3>
            <ul className="poke__types">{printTypes(props.pokemons.types)}</ul>
        </div>
    )
}

export default Pokemon;
import React from 'react';

const Pokemon =(props)=>{

    const printTypes = (types) =>{
        return types.map((type,index) =>{
            return <li className="poke__types-type" key={index}> {type} </li>
        })
    }

    return (
        <div className="poke__card-wrapper">
            <img className="poke__pic" alt="Bulbasaur" src= {props.pokemons.pokemon.url}/>
            <h3 className="poke__name">{props.pokemons.name}</h3>
            <ul className="poke__types">{printTypes(props.pokemon.types)}</ul>
           {/*// <p> Soy un pokemon </p> */}
        </div>
    )
}

export default Pokemon;
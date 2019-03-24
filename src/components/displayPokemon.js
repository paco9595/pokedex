import React from 'react'
import styled from 'styled-components';


const DisplayPokemonContainer = styled.div`
    width:300px;
    div{
        display:flex;
        justify-content: center
    }
`
const ImagePokemon = styled.img`
    border: 1px solid black;
    width: 200px;
    height: 200px;
`

export const DisplayPokemon = props => {
    const { entry_number, pokemon_species: { name } = {} } = props.item
    return (
        <DisplayPokemonContainer>
            <div>
                {entry_number && <ImagePokemon alt={name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${entry_number}.png`} />}
            </div>
            <div>
                {name && <h2>{name}</h2>}
            </div>
        </DisplayPokemonContainer>
    )
}
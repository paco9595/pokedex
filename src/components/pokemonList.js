import React from 'react'
import styled from 'styled-components'
import { Card } from "@blueprintjs/core";
const PokemonListContainer = styled.div`
    width:300px;
    div  .cardClass{
        padding: 0;
    }
`
const CardWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img{
        width:50px;
    }
`
const PokemonItem = props => {
    const { pokemon_species, entry_number } = props.item
    return (
        <Card interactive={true} className="cardClass" onClick={() => props.click(props.item)}>
            <CardWrapper>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${entry_number}.png`} alt={pokemon_species.name} />
                <h4>{pokemon_species.name}</h4>
            </CardWrapper>
        </Card>
    )
}

export const PokemonList = props => {

    const click = (item) => console.log(item)
    return (
        <PokemonListContainer>
            <div className="bp3-input-group .modifier bp3-small">
                <span className="bp3-icon bp3-icon-search"></span>
                <input className="bp3-input" type="search" placeholder="Search input" dir="auto" />
            </div>
            <div>
                {props.list.map(item => <PokemonItem item={item} key={item.entry_number} click={click} />)}
            </div>
        </PokemonListContainer>
    )
}
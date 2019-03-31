import React from 'react'
import styled from 'styled-components'
import { Card } from "@blueprintjs/core";
const PokemonListContainer = styled.div`
    width:310px;
    div  .cardClass{
        padding: 0;
    }
    height: 500px;
    overflow: auto;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }
    ::-webkit-scrollbar-thumb {
        background-color: #10161a33;
        outline: 1px solid slategrey;
        border-radius: 10px;
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
    return (
        <div>

            <div className="bp3-input-group .modifier bp3-small">
                <span className="bp3-icon bp3-icon-search"></span>
                <input className="bp3-input" type="search" placeholder="Search input" dir="auto" onChange={props.search} />
            </div>
            <PokemonListContainer>
                <div>
                    {props.list && props.list.map(item => <PokemonItem item={item} key={item.entry_number} click={e => props.click(e)} />)}
                </div>
            </PokemonListContainer>
        </div>
    )
}
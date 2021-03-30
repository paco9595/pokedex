import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const DisplayPokemonContainer = styled.div`
    width: 300px;
    height: 280px;
    div {
        display: flex;
        justify-content: center;
    }
`;
const ImagePokemon = styled.img`
    border: 1px solid black;
    width: 200px;
    height: 200px;
    background-color: #fff;
`;
const DisplayPokemon = (props) => {
    const { name, id } = props.selected;
    const [description, setDescription] = useState({}) 
    useEffect(() => {
        console.log('effect', props)
        if (props.selected.flavor_text_entries) {
            setDescription(props.selected.flavor_text_entries.filter(
                (des) => des.language.name === "es"
            )[0]);
        }
    }, [props]);
    return (
        <DisplayPokemonContainer>
            <div style={{ marginLeft: 40, marginTop: 20 }}>
                {id && (
                    <ImagePokemon
                        alt={name}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    />
                )}
            </div>
            <div style={{ marginLeft: 40 }}>{name && <h2>#{id} {name}</h2>}</div>
            {description && (
                <div style={{ marginLeft: 40 }}>
                    <p>{description.flavor_text}</p>
                </div>
            )}
        </DisplayPokemonContainer>
    );
};

const mapStateToProps = (state) => ({
    selected: state.listPokedexReducer.selected
});
export default connect(mapStateToProps)(DisplayPokemon);

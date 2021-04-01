import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import arrowIconRight from "./../assets/icons/arrow-circle-right-solid.svg";
import arrowIconLeft from "./../assets/icons/arrow-circle-left-solid.svg";
import FlipCard from "./card";
import { Stats } from "./stats";
import { Characteristics } from "./Characteristics";
import { Type } from "./types";

const CardContainer = styled.div`
    width: 300px;
    height: 280px;
`;

const DisplayDetailsContainer = styled(CardContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Icon = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 10px;
`;
const Container = styled.div`
    display: flex;
    justify-content: center;
`;
const ImagePokemon = styled.img`
    border: 1px solid black;
    width: 200px;
    height: 200px;
    background-color: #fff;
`;
const Backbutton = styled(Icon)`
    position: absolute;
    top: 20px;
    left: 20px;
`;
const Displaydetails = styled.div`
    width: 100%;
    height: 100%;
    margin: 50px 10px 0px 40px;
    display: flex;
    justify-content: center;
    align-items:center;
`;
const Title = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    margin: 20px 0;
`
const DisplayPokemon = (props) => {
    const { name, id, stats, weight, height, types } = props.selected;
    const [description, setDescription] = useState({});
    const [showDetails, setShowDetails] = useState(false);
    useEffect(() => {
        console.log("effect", props);
        if (props.selected.flavor_text_entries) {
            setDescription(
                props.selected.flavor_text_entries.filter(
                    (des) => des.language.name === "es"
                )[0]
            );
        }
    }, [props]);
    return (
        <div style={{ width: 300, height: 280 }}>
            <FlipCard isFlipped={showDetails}>
                <CardContainer>
                    <Container style={{ marginLeft: 40, marginTop: 20 }}>
                        {id && (
                            <ImagePokemon
                                alt={name}
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                            />
                        )}
                    </Container>
                    <Container style={{ marginLeft: 40 }}>
                        {name && (
                            <h2>
                                #{id} {name}
                                <Icon
                                    src={arrowIconRight}
                                    onClick={() => setShowDetails(true)}
                                />
                            </h2>
                        )}
                    </Container>
                    {description && (
                        <Container style={{ marginLeft: 40 }}>
                            <p>{description.flavor_text}</p>
                        </Container>
                    )}
                </CardContainer>
                <DisplayDetailsContainer>
                    <Backbutton
                        src={arrowIconLeft}
                        onClick={() => setShowDetails(false)}
                    />
                    <Displaydetails>
                        <div>
                            <Title>
                                #{id} {name}
                            </Title>
                            <div>
                                <Type types={types}></Type>
                            </div>
                            <Characteristics weight={weight} height={height} />
                            <div>
                                <Stats stats={stats} />
                            </div>
                        </div>
                    </Displaydetails>
                </DisplayDetailsContainer>
            </FlipCard>
        </div>
    );
};

const mapStateToProps = (state) => ({
    selected: state.listPokedexReducer.selected,
});
export default connect(mapStateToProps)(DisplayPokemon);

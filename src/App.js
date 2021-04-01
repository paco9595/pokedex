import React, { Component } from "react";
import { connect } from "react-redux";
import { setPokemonList, setSelectedPokemon } from "./action/listPokedexAction";
import { PokemonList } from "./components/pokemonList";
import DisplayPokemon from "./components/displayPokemon";
import bgImage from "./assets/images/bg.png";
import "./app.css";
import styled from "styled-components";

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ImgContainer = styled.img`
    overflow: hidden;
    position: absolute;
    z-index: -100;
    top: 0;
    left: auto;
`;

class App extends Component {
    state = {
        item: {},
        list: [],
    };
    componentWillMount() {
        this.props.setPokemonList();
    }
    componentWillReceiveProps(props) {
        if (props.lists && props.lists.length > 0) {
            this.setState({ list: props.lists });
        }
    }
    click = (item) => {
        this.setState({ item });
        console.log(item);
        this.props.setSelectedPokemon(item.entry_number);
    };
    search = (e) => {
        const word = e.target.value;
        if (word !== "") {
            this.setState({ list: this.props.filterList }, () => {
                this.setState({
                    list: this.state.list.filter(
                        (item) =>
                            item.pokemon_species.name.includes(word) ||
                            item.entry_number.toString().includes(word)
                    ),
                });
            });
        } else {
            this.props.setPokemonList();
        }
    };
    render() {
        return (
            <AppContainer className="App">
                <div>
                    <ImgContainer src={bgImage} />
                </div>
                <DisplayPokemon />
                <PokemonList
                    list={this.state.list}
                    click={this.click}
                    search={this.search}
                />
            </AppContainer>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    setPokemonList: () => dispatch(setPokemonList()),
    setSelectedPokemon: (props) => dispatch(setSelectedPokemon(props)),
});
const mapStateToProps = (state) => ({
    lists: state.listPokedexReducer.list,
    filterList: state.listPokedexReducer.list,
    selected: state.listPokedexReducer.selected,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

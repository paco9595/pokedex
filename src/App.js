import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPokemonList, setSelectedPokemon } from "./action/listPokedexAction";
import { PokemonList } from './components/pokemonList'
import DisplayPokemon  from './components/displayPokemon'
import {DisplayPokedex }from './components/displayPokedex'
import bgImage from './images/bg.png'
import './app.css';
//import { pokemonListData as list } from './data/pokemonList'
import styled from 'styled-components'

const AppContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`
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
    list: []
  }
  componentWillMount() {
    this.props.setPokemonList()
    //this.setState({ list })
  }
  componentWillReceiveProps(props) {
    if (props.lists && props.lists.length > 0) {
      this.setState({ list: props.lists })
    }
  }
  click = item => {
    this.setState({ item })
    this.props.setSelectedPokemon(item.pokemon_species.url);
  }
  search = e => {
    const word = e.target.value;
    if (word !== '') {
      this.setState({ list: this.props.filterList }, () => {
        this.setState({
          list: this.state.list
            .filter(item =>
              item.pokemon_species.name.includes(word) || item.entry_number.toString().includes(word)
            )
        })
      })
    } else {
      this.props.setPokemonList()
      // this.setState({ list })
    }
  }
  render() {
    return (
      <AppContainer className="App">
        <div>
          <ImgContainer src={bgImage}/>
        </div>
        <DisplayPokedex>
          <DisplayPokemon/>
        </DisplayPokedex>
        <PokemonList list={this.state.list} click={this.click} search={this.search} />
      </AppContainer>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setPokemonList: () => dispatch(setPokemonList()),
  setSelectedPokemon: (props) => dispatch(setSelectedPokemon(props))
})
const mapStateToProps = state => ({
  lists: state.listPokedexReducer.list,
  filterList: state.listPokedexReducer.list,
  selected: state.listPokedexReducer.selected
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

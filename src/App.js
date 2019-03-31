import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPokemonList } from "./action/listPokedexAction";
import { PokemonList } from './components/pokemonList'
import { DisplayPokemon } from './components/displayPokemon'
//import { pokemonListData as list } from './data/pokemonList'
import styled from 'styled-components'

const AppContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

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
        <DisplayPokemon item={this.state.item} />
        <PokemonList list={this.state.list} click={this.click} search={this.search} />
      </AppContainer>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setPokemonList: () => dispatch(setPokemonList())
})
const mapStateToProps = state => ({
  lists: state.listPokedexReducer.list,
  filterList: state.listPokedexReducer.list
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

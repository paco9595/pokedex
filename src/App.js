import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPokemonList } from "./action/listPokedexAction";
import { PokemonList } from './components/pokemonList'
class App extends Component {
  componentDidMount() {
    this.props.setPokemonList()
  }
  render() {
    return (
      <div className="App">
        <PokemonList list={this.props.list} />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setPokemonList: () => dispatch(setPokemonList())
})
const mapStateToProps = state => {
  console.log(state)
  return {
    list: state.listPokedexReducer.list.pokemon_entries
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

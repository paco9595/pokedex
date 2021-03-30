import { GET_POKEDEX_LIST, GET_SELECTED_POKEMON } from "./actionTypes";
import { ActionCreator } from "./../utils/actionCreator";

export const setPokemonList = ActionCreator(GET_POKEDEX_LIST, 'list')
export const setSelectedPokemon = ActionCreator(GET_SELECTED_POKEMON, 'Selected')
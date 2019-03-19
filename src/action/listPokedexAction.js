import { GET_POKEDEX_LIST } from './actionTypes'
import { ActionCreator } from "./../utils/actionCreator";

export const setPokemonList = ActionCreator(GET_POKEDEX_LIST, 'list')
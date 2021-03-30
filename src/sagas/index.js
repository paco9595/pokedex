import * as actionType from './../action/actionTypes'
import { getListPokedex } from './getListPokedexSagas'
import { getSelectedPokedex } from "./getSelectedPokedexSagas";
import { takeEvery } from 'redux-saga/effects'

export function* Sagas() {
    yield takeEvery(actionType.GET_POKEDEX_LIST, getListPokedex);
    yield takeEvery(actionType.GET_SELECTED_POKEMON, getSelectedPokedex);
}
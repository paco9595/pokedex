import { put } from 'redux-saga/effects';
import { GET_POKEDEX_LIST } from './../action/actionTypes'
export function* getListPokedex() {
    try {
        const response = yield fetch('https://pokeapi.co/api/v2/pokedex/1/').then(response => response.json());
        yield put({ type: GET_POKEDEX_LIST, list: response });
    } catch (e) {
        return;
    }
}
import { put } from "redux-saga/effects";
import { SET_SELECTED_POKEMON } from "./../action/actionTypes";

export function* getSelectedPokedex(props) {
    try {
        const response = yield fetch(
            `https://pokeapi.co/api/v2/pokemon/${props.Selected}`
        ).then((response) => response.json());
        console.log(response)
        yield put({ type: SET_SELECTED_POKEMON, selected: response });
    } catch (e) {
        return;
    }
}

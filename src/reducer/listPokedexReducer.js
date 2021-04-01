import * as actionTypes from './../action/actionTypes'
import { defaultState } from './../defaultState'
const  reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_POKEDEX_LIST:
            return {
                ...state,
                list: action.list.pokemon_entries,
            };
        case actionTypes.SET_SELECTED_POKEMON:
            return {
                ...state,
                selected: action.selected,
            };
        default:
            return state;
    }
}
export default reducer
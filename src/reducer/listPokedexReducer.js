import * as actionTypes from './../action/actionTypes'
import { defaultState } from './../defaultState'

export default (state = defaultState, action) => {
    console.log(state, action)
    switch (action.type) {
        case actionTypes.SET_POKEDEX_LIST:
            return {
                ...state,
                list: action.list.pokemon_entries
            }
        default:
            return state
    }
}
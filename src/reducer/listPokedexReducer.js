import * as actionTypes from './../action/actionTypes'
import { defaultState } from './../defaultState'

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_POKEDEX_LIST:
            return {
                ...state,
                list: action.list
            }
        default:
            return state
    }
}
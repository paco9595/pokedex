import * as actionTypes from './../action/actionTypes'


export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.GET_POKEDEX_LIST:
            return {
                result: action.payload
            }
        default:
            return state
    }
}
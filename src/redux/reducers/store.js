import * as actionTypes from '../config/store'

const initialState = []

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.STORE_UPDATE:
            return  Object.assign(state, action.data)
            case actionTypes.STORE_ADD:
            state.unshift(action.data)
            return state
        case actionTypes.STORE_RM:
            return state.filter(item => {
                if (item.id !== action.data.id) {
                    return item
                }
                return null
            })
        default:
            return state
    }
}
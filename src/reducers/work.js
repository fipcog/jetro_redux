import {SET_WORK_ID} from "../actions/setWorkIDAction";

const initialState = {
    currentWorkID: 0,
}

export function workReducer(state = initialState, action) {
    switch (action.type) {
        case SET_WORK_ID:
            return {...state, currentWorkID: action.payload}

        default:
            return state
    }
}
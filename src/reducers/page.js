import {SET_PAGE} from "../actions/setPageAction";

const initialState = {
    page: "home",
}

export function pageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PAGE:
            return {...state, page: action.payload}

        default:
            return state
    }
}
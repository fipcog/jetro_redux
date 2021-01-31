import {SET_WORKS_DATA} from "../actions/setWorksDataAction";
import mocks from "../mocks";

const initialState = {
    worksData: mocks,
}

export function  worksDataReducer(state = initialState, action) {
    switch (action.type) {
        case SET_WORKS_DATA:
            return {...state, worksData: action.payload}

        default:
            return state
    }
}
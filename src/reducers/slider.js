import {SET_SLIDE} from "../actions/setSlideAction";
import {SET_NEXT_SLIDE} from "../actions/setSlideAction";
import {SET_PREV_SLIDE} from "../actions/setSlideAction";

const initialState = {
    slideIndex: 0,
}

export function sliderReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SLIDE:
            return {...state, slideIndex: action.payload}

        case SET_NEXT_SLIDE:
            if(state.slideIndex === 5) return {...state, slideIndex: 0};
            return {...state, slideIndex: state.slideIndex + action.payload}

        case SET_PREV_SLIDE:
            if(state.slideIndex === 0) return {...state, slideIndex: 5};
            return {...state, slideIndex: state.slideIndex - action.payload}

        default:
            return state
    }
}

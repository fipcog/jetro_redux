export const SET_SLIDE = "SET_SLIDE";

export function setSlide (index) {
    return {
        type: SET_SLIDE,
        payload: index,
    }
}

export const SET_NEXT_SLIDE = "SET_NEXT_SLIDE";

export function setNextSlide () {
    return {
        type: SET_NEXT_SLIDE,
        payload: 1,
    }
}

export const SET_PREV_SLIDE = "SET_PREV_SLIDE";

export function setPrevSlide () {
    return {
        type: SET_PREV_SLIDE,
        payload: 1,
    }
}
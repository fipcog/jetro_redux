export const SET_FIRST_NAME = "SET_FIRST_NAME";

export function setFirstName (data) {
    return {
        type: SET_FIRST_NAME,
        payload: data,
    }
}

export const SET_LAST_NAME = "SET_LAST_NAME";

export function setLastName (data) {
    return {
        type: SET_LAST_NAME,
        payload: data,
    }
}

export const SET_EMAIL = "SET_EMAIL";

export function setEmail (data) {
    return {
        type: SET_EMAIL,
        payload: data,
    }
}

export const SET_MESSAGE = "SET_MESSAGE";

export function setMessage (data) {
    return {
        type: SET_MESSAGE,
        payload: data,
    }
}

export const IS_FORM_VALID = "IS_FORM_VALID";

export function isFormValid (boolean) {
    return {
        type: IS_FORM_VALID,
        payload: boolean,
    }
}

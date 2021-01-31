import {SET_FIRST_NAME} from "../actions/setFormDataAction";
import {SET_LAST_NAME} from "../actions/setFormDataAction";
import {SET_EMAIL} from "../actions/setFormDataAction";
import {SET_MESSAGE} from "../actions/setFormDataAction";
import {IS_FORM_VALID} from "../actions/setFormDataAction";

const initialState = {
    firstName: {
        value: "",
        isValid: true,
    },
    lastName: {
        value: "",
        isValid: true,
    },
    email: {
        value: "",
        isValid: true,
    },
    message: {
        value: "",
        isValid: true,
    },
    isFormValid: true
}

export function  contactFormDataReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FIRST_NAME:
            return {...state, firstName: action.payload}

        case SET_LAST_NAME:
            return {...state, lastName: action.payload}

        case SET_EMAIL:
            return {...state, email: action.payload}

        case SET_MESSAGE:
            return {...state, message: action.payload}

        case IS_FORM_VALID:
            return {...state, isFormValid: action.payload}

        default:
            return state
    }
}
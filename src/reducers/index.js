import {combineReducers} from "redux";
import {pageReducer} from "./page";
import {sliderReducer} from "./slider";
import {workReducer} from "./work";
import {worksDataReducer} from "./worksData";
import {contactFormDataReducer} from "./contactFormData";

export const rootReducer = combineReducers(
    {
        page: pageReducer,
        slider: sliderReducer,
        work: workReducer,
        worksData: worksDataReducer,
        contactFormData: contactFormDataReducer
    }
)
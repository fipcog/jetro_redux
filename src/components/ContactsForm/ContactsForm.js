import React from "react";
import classnames from "classnames";
import {connect} from "react-redux";
import {setFirstName, setLastName, setEmail, setMessage, isFormValid} from "../../actions/setFormDataAction";
import Btn from "../Btn/Btn";

class ContactsForm extends React.Component{
    onBlur = (e) => {
        const value = e.target.value;
        const {setFirstNameAction, setLastNameAction, setEmailAction, setMessageAction} = this.props;

        if(e.target.name === "user_name") {
            setFirstNameAction({
                value: value,
                isValid: this.isStringValid(value),
            })
        }

        if(e.target.name === "user_last_name") {
            setLastNameAction({
                value: value,
                isValid: this.isStringValid(value),
            })
        }

        if(e.target.name === "user_email") {
            setEmailAction({
                value: value,
                isValid: this.isStringValid(value),
            })
        }

        if(e.target.name === "user_message") {
            setMessageAction({
                value: value,
                isValid: this.isStringValid(value),
            })
        }
        this.isFormValid()
    }

    onBtnClick = (e) => {
        e.preventDefault();

        if(this.isFormValid()) alert("success")
    }

    isStringValid = (string) => {
        if(string === "") {

            return false
        } else {

            return true
        }
    }

    isFormValid = () => {
        const {firstName, lastName, email, message} = this.props.contactFormData;

        if(this.isStringValid(firstName.value) && this.isStringValid(lastName.value)
            && this.isStringValid(email.value) && this.isStringValid(message.value)) {

            this.props.isFormValidAction(true)
            return true
        } else {

            this.props.isFormValidAction(false)
            return false
        }
    }

    render() {
        const {firstName, lastName, email, message, isFormValid} = this.props.contactFormData;

        const userNameClass = classnames("contacts_form__user_data", {"unvalid": firstName.isValid === false})
        const userLastNameClass = classnames("contacts_form__user_data", {"unvalid": lastName.isValid === false})
        const userEmailClass = classnames("contacts_form__user_data", {"unvalid": email.isValid === false})
        const userMessageClass = classnames("contacts_form__user_message", {"unvalid": message.isValid === false})

        return (
            <form className={"contacts_form"} name={"contact_form"}>
                <input className={userNameClass} onChange={this.onBlur} name={"user_name"} placeholder={"firstname"}/>
                <input className={userLastNameClass} onChange={this.onBlur} name={"user_last_name"} placeholder={"lastname"}/>
                <input className={userEmailClass} onChange={this.onBlur} name={"user_email"} placeholder={"email address"}/>
                <textarea className={userMessageClass} onChange={this.onBlur} name={"user_message"} placeholder={"message"}/>
                <Btn classRow = "contacts_form__form_btn btn" disabled={!isFormValid} onClickHandler={this.onBtnClick}>Submit</Btn>
            </form>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        contactFormData: store.contactFormData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFirstNameAction: (data) => dispatch(setFirstName(data)),
        setLastNameAction: (data) => dispatch(setLastName(data)),
        setEmailAction: (data) => dispatch(setEmail(data)),
        setMessageAction: (data) => dispatch(setMessage(data)),
        isFormValidAction: (boolean) => dispatch(isFormValid(boolean)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);
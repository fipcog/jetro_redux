import React from "react";
import SocialList from "../SocialList/SocialList";
import Comment from "../Comment/Comment";

function Footer (props) {
    return (
        <footer className={"footer"}>
            <div className={"footer__content_wrapper"}>
                <h2 className={"footer__title"}>About  Jetro</h2>
                <p className={"footer__text_content"}>
                    Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel.
                    Urbanitas adolescens vim te, per at tritani aperiri.
                    Adhuc invenire convenire his ea.
                    Id mei vitae denique,
                    in eam commodo veritus disputando.
                </p>
                <p className={"footer__text_content"}>
                    Pro et erant delicata, eu vim essent imperdiet accommodare,
                    dictas deseruisse ius an. Solet everti definitionem id ius,
                    sonet oporteat cu vim.
                </p>
            </div>
            <div className={"footer__content_wrapper"}>
                <h2 className={"footer__title"}>Twitter  Widget</h2>
                <Comment user="@pixelmater " date="about 1 hour ago">
                    What an awesome design with great functionality :)
                </Comment>
                <Comment user="@designdude " date="about 2 hour ago">
                    What an awesome design with great functionality :)
                </Comment>
            </div>
            <div className={"footer__content_wrapper"}>
                <h2 className={"footer__title"}>Contact  Us</h2>
                <p className={"footer__text_content"}>
                    Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel.
                    Urbanitas adolescens vim te, per at tritani aperiri.
                </p>
                <span className={"footer__email"}>information@jetro.com</span>
                <span className={"footer__number"}>1.222.333.4444</span>
                <SocialList/>
            </div>
        </footer>
    )
}

export default Footer;
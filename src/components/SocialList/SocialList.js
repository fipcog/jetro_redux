import React from "react";
import Vimeo from "../icons/Vimeo";
import Rss from "../icons/Rss";
import Twitter from "../icons/Twitter";
import Facebook from "../icons/Facebook";
import Email from "../icons/Email";

function SocialList (props) {
    return (
        <ul className={"social_icons"}>
            <li className={"social_icons__item"}>
                <a className={"social_icons__link"} href={"*"}>
                    <Facebook/>
                </a>
            </li>
            <li className={"social_icons__item"}>
                <a className={"social_icons__link"} href={"*"}>
                    <Twitter/>
                </a>
            </li>
            <li className={"social_icons__item"}>
                <a className={"social_icons__link"} href={"*"}>
                    <Email/>
                </a>
            </li>
            <li className={"social_icons__item"}>
                <a className={"social_icons__link"} href={"*"}>
                    <Rss/>
                </a>
            </li>
            <li className={"social_icons__item"}>
                <a className={"social_icons__link"} href={"*"}>
                    <Vimeo/>
                </a>
            </li>
        </ul>
    )
}

export default SocialList;
import React, {Fragment} from "react";
import Slider from "../Slider/Slider";
import Features from "../Features/Features";
import RecentWorks from "../RecentWorks/ResentWorks";

function StartPage (props) {
    return (
        <Fragment>
            <Slider/>
            <Features/>
            <RecentWorks/>
        </Fragment>
    )
}

export default StartPage;
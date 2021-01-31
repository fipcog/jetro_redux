import React, {Fragment} from "react";
import WorksList from "../WorksList/WorksList";
import PageTitle from "../PageTitle/PageTitle";

function PortfolioPage (props) {
    return (
        <Fragment>
            <PageTitle>Portfolio</PageTitle>
            <WorksList/>
        </Fragment>
    )
}

export default PortfolioPage;
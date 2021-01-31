import React, {Fragment} from "react";
import { connect } from "react-redux";
import PageTitle from "../PageTitle/PageTitle";
import RecentWorks from "../RecentWorks/ResentWorks";
import WorkDescription from "../WorkDescription/WorkDescription";
import {ScrollToTop} from "../ScrollToTop/ScrollToTop";

class PageOfWork extends React.Component {

    render() {
        const {worksData} = this.props.worksData;
        const projectData = worksData.find(item => item["id"] === this.props.work.currentWorkID);

        return (
            <Fragment>
                <ScrollToTop/>
                <PageTitle>{projectData.name}</PageTitle>
                <WorkDescription project = {projectData} />
                <RecentWorks/>
            </Fragment>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        work: store.work,
        worksData: store.worksData,
    }
}

export default connect(mapStateToProps)(PageOfWork);
import React, {Fragment} from "react";
import PageTitle from "../PageTitle/PageTitle";
import Sidebar from "../Sidebar/Sidebar";
import Post from "../Post/Post";

function Blog (props) {
    return (
        <Fragment>
            <PageTitle>Blog</PageTitle>
            <div className={"blog__page_wrapper"}>
                <section className={"blog__container"}>
                    <Post/>
                    <Post/>
                    <Post/>
                </section>
                <Sidebar/>
            </div>
        </Fragment>
    )
}

export default Blog;
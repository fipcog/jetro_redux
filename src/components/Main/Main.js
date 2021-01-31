import React from "react";
import StartPage from "../StartPage/StartPage";
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import PageOfWork from "../PageOfWork/PageOfWork";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Blog from "../Blog/Blog";


class Main extends React.Component {
    render() {
        const {page} = this.props.page;

        return (
            <main className={"main"}>
                {page === "home" && <StartPage/>}
                {page === "portfolio" && <PortfolioPage/>}
                {page === "about as" && <AboutUs/>}
                {page === "contact us" && <ContactUs/>}
                {page === "blog" && <Blog/>}
                {page === "page of work" && <PageOfWork/>}
            </main>
        )
    }
}

export default Main;
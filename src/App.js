import React, {Fragment} from "react";
import { connect } from "react-redux";
import { setPage } from "./actions/setPageAction";
import Header from './components/Header/Header';
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.scss";

class App extends React.Component {

    render() {
        return (
            <Fragment>
                <Header setPage = {this.props.setPageAction} page = {this.props.page}/>
                <Main page = {this.props.page}/>
                <Footer/>
            </Fragment>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        page: store.page,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPageAction: (page) => dispatch(setPage(page)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

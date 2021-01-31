import React from "react";
import { connect } from "react-redux";
import {setPage} from "../../actions/setPageAction";
import {setWorkID} from "../../actions/setWorkIDAction";
import Btn from "../Btn/Btn";
import MoreIcon from "../icons/MoreIcon";

class Work extends React.Component {
    onClick = (e) => {
        this.props.setPageAction("page of work")
        this.props.setWorkIDAction(this.props.id)
    }

    render() {
        return (
            <article className={"work"} id={this.props.id}>
                <div className={"work__img_wrapper"}>
                    <div className={"work__shading"}>
                        <Btn classRow = "btn work__btn"
                             onClickHandler = {this.onClick}
                        >
                            <MoreIcon/>
                        </Btn>
                    </div>
                    <img className={"work__img"} src={this.props.image} alt={this.props.title}/>
                </div>
                <div className={"work__title_wrapper"}>
                    <h4 className={"work__title"}>{this.props.title}</h4>
                    <span className={"work__date"}>{this.props.date}</span>
                </div>
            </article>
        )
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
        setWorkIDAction: (id) => dispatch(setWorkID(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Work);
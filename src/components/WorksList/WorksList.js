import React from "react";
import { connect } from "react-redux";
import Work from "../Work/Work";

class WorksList extends React.Component {
    render() {
        const {worksData} = this.props.worksData;

        let items = worksData.map((item) => {
            return <li className={"works_list__item"} key={item.id}>
                <Work
                    id = {item.id}
                    image = {item.img_min}
                    title ={item.name}
                    date ={item.date}
                />
            </li>

        })

        return (
            <ul className={"works_list"}>
                {items}
            </ul>
        )
    }
}

const mapStateToProps = store => {
    return {
        worksData: store.worksData,
    }
}

export default connect(mapStateToProps)(WorksList);
import React from 'react';
import { connect } from "react-redux";
import Work from '../Work/Work';

class RecentWorks extends React.Component {
    render() {
        const {worksData} = this.props.worksData;

        let items = worksData.slice(-4).reverse().map(item => {
            return <li className={"recent_works__work"} key={item.id}>
                <Work
                    id = {item.id}
                    image = {item.img_min}
                    title ={item.name}
                    date ={item.date}
                />
            </li>
        })

        return (
            <section className={"recent_works"}>
                <h3 className={"recent_works__title"}>Recent  Works</h3>
                <div className={"recent_works__decoration"}/>
                <ul className={"recent_works__list"}>
                    {items}
                </ul>
            </section>
        )
    }
}

const mapStateToProps = store => {
    return {
        worksData: store.worksData
    }
}

export default connect(mapStateToProps)(RecentWorks);
import React from "react";

function WorkDescription (props) {
    return (
        <section className={"project_description"}>
            <div className={"project_description__img_container"}>
                <img className={"project_description__img"} src={props.project.img_full} alt={props.project.name}/>
            </div>
            <p className={"project_description__short_info"}>{props.project.short_info}</p>
            <p className={"project_description__main_info"}>{props.project.main_info}</p>
        </section>
    )
}

export default WorkDescription;

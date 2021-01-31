import React from "react";

function Comment (props) {
    return (
        <article className={"comment"}>
            <p className={"comment__text_content"}>
                <span className={"comment__user"}>{props.user}</span>
                {props.children}
            </p>
            <span className={"comment__date"}>{props.date}</span>
        </article>
    )
}

export default Comment;
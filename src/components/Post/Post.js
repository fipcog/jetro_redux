import React from 'react';
import PostDocumentIcon from "../icons/PostDocumentIcon";

function Post () {
    return (
        <article className={"post"}>
            <div className={"post__icon_wrapper"}>
                <PostDocumentIcon/>
            </div>
            <img className={"post__img"} src={"img/img_blog.jpg"} alt={"img_blog"}/>
            <ul className={"post__info_list"}>
                <li className={"post__info_item"}>
                    <h3 className={"post__info_title"}>Date</h3>
                    <span className={"post__info"}>April 15, 2012</span>
                </li>
                <li className={"post__info_item"}>
                    <h3 className={"post__info_title"}>Tags</h3>
                    <span className={"post__info"}>Website  |  Design</span>
                </li>
            </ul>
            <div className={"post__content_wrapper"}>
                <h3 className={"post__title"}>Jesus  Typography  Wallpaper  Giveaway!</h3>
                <p className={"post__content"}>Lorem ipsum dolor sit amet, sit an molestie
                    neglegentur concludaturque. Possim hendrerit in usu. Iriure delectus mea
                    at, vis dicit laudem ex, vel eu possim imperdiet consequuntur. Brute ipsum
                    tincidunt vim ei. Ne eos vidisse splendide instructior. Mei no latine praesent
                    forensibus, te sed habemus tacimates, ad ipsum officiis constituto usu.
                </p>
                <p className={"post__content"}>
                    Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus.
                    Aliquam ullamcorper dui sed magna posuere ut elementum enim rutrum.
                    Nam mi erat, porta id ultrices nec, pellentesque vel nunc.</p>
            </div>
            <div className={"post__decoration"}/>
        </article>
    )
}

export default Post;
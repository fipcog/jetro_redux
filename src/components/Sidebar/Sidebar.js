import React from "react";

function Sidebar (props) {
    return (
        <section className={"sidebar"}>
            <section className={"sidebar__section"}>
                <h4 className={"sidebar__title"}>AbouT  Jetro</h4>
                <div className={"sidebar__decoration"}/>
                <p className={"sidebar__text"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praese nt libero. Sed cursus ante dapibus diam.
                    Sed nisi. Nulla quis sem at nibh elemen tum imperdiet.
                    Duis sagittis ipsum.
                </p>
            </section>
            <section className={"sidebar__section"}>
                <h4 className={"sidebar__title"}>Categories</h4>
                <div className={"sidebar__decoration"}/>
                <ul className={"sidebar__categories_list"}>
                    <li className={"sidebar__categories_item"}>
                        <a className={"sidebar__categories_link"} href={"*"}>Video (3)</a>
                    </li>
                    <li className={"sidebar__categories_item"}>
                        <a className={"sidebar__categories_link"} href={"*"}>Sports (5)</a>
                    </li>
                    <li className={"sidebar__categories_item"}>
                        <a className={"sidebar__categories_link"} href={"*"}>Media (2)</a>
                    </li>
                    <li className={"sidebar__categories_item"}>
                        <a className={"sidebar__categories_link"} href={"*"}>Entertainment (7)</a>
                    </li>
                    <li className={"sidebar__categories_item"}>
                        <a className={"sidebar__categories_link"} href={"*"}>Life (4)</a>
                    </li>
                    <li className={"sidebar__categories_item"}>
                        <a className={"sidebar__categories_link"} href={"*"}>Super Cool Stuff (8)</a>
                    </li>
                </ul>
            </section>
            <section className={"sidebar__section"}>
                <h4 className={"sidebar__title"}>Photo  Gallery</h4>
                <div className={"sidebar__decoration"}/>
                <ul className={"sidebar__gallery_list"}>
                    <li className={"sidebar__gallery_item"}/>
                    <li className={"sidebar__gallery_item"}/>
                    <li className={"sidebar__gallery_item"}/>
                    <li className={"sidebar__gallery_item"}/>
                    <li className={"sidebar__gallery_item"}/>
                    <li className={"sidebar__gallery_item"}/>
                    <li className={"sidebar__gallery_item"}/>
                    <li className={"sidebar__gallery_item"}/>
                </ul>
            </section>
        </section>
    )
}

export default Sidebar;
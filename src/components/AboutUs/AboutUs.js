import React, {Fragment} from "react";
import PageTitle from "../PageTitle/PageTitle";
import Sidebar from "../Sidebar/Sidebar";

function AboutUs (props) {
    return (
        <Fragment>
            <PageTitle>About us</PageTitle>
            <section className={"about_us"}>
                <div className={"about_us__content_wrapper"}>
                    <p className={"about_us__text"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                        Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                        Praesent mauris. Maecenas in magna mollis lectus lacinia mollis.
                    </p>
                    <p className={"about_us__text"}>
                        <img className={"about_us__img"} src={"img/mike.jpg"} alt={"developer"}/>
                        Maecenas ipsum metus, semper hendrerit varius mattis,
                        hasr congue sit amet tellus. Aliquam ullamcorper dui sed magna posuere ut
                        elem entum enim rutrum. Nam mi erat, porta idso ultrices nec, pellentesq ue vel nunc.
                        Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a
                        interdumni justo ultricies. Sed luctus dui nec ni  sl tem pus faucibus sit amet
                        et sem. Aenean augue sapien, sodales ac bibendum ut, pellentesque id eros.
                        Duis tristique porta aliquam. Curabitur sagittis tincidunt erat, quis hendrerit
                        nibh iaculis vitae. Pellentesque ultricies nisl quis odio posuere facilisis.
                        In ut felis erat, ac laoreet orci. Sed lectus nulla, bibendum at vulputate sit amet,
                        tincidunt volutpat lorem. Maecenas in magna mollis lectus lacinia mollis.
                        Donec sit amet volutpat lorem. Pellentesque ultricies nisl quis odio posuere facilisis.
                        In ut felis erat, ac laoreet orci.  Aenean augue sapien, sodales ac bibendum ut,
                        pellentesque id eros.
                    </p>
                    <p className={"about_us__text"}>
                        Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus.
                        Aliquam ullamcorper dui sed magna posuere ut elementum enim rutrum.
                        Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis.
                        Aenean sodales nibh non lectus tempor a interdum justo ultricies.
                        Sed luctus dui nec nisl tempus faucibus sit amet et sem.
                        Aenean augue sapien, sodales ac bibendum ut, pellentesque id eros.
                    </p>
                    <p className={"about_us__text"}>
                        Quisque mollis, sem id laoreet pretium, lectus elit molestie urna,
                        id tristique risus ante at est. Sed pretium metus sit amet erat blandit vitae
                        pulvinar lorem egestas. Sed lectus nulla, bibendum at vulputate sit amet,
                        tincidunt volutpat lorem. Maecenas in magna mollis lectus lacinia mollis.
                        Donec sit amet volutpat lorem. Duis tristique porta aliquam.
                        Curabitur sagittis tincidunt erat, quis hendrerit nibh iaculis vitae.
                    </p>
                    <p className={"about_us__text"}>
                        <svg className={"about_us__svg"}
                            xmlns="http://www.w3.org/2000/svg"
                            width="25px" height="26px">
                            <text kerning="auto" fill="rgb(0, 0, 0)" font-size="36px" x="0px" y="24px">
                                <tspan font-size="36px" font-family="HelveticaNeue" font-weight="bold" fill="#E8603C">D</tspan>
                            </text>
                        </svg>
                        Quisque mollis, sem id laoreet pretium, lectus elit molestie urna,
                        id tristique risus ante at est. Sed pretium metus sit amet erat blandit vitae
                        pulvinar lorem egestas. Sed lectus nulla, bibendum at vulputate sit amet,
                        tincidunt volutpat lorem. Maecenas in magna mollis lectus lacinia mollis.
                        Donec sit amet volutpat lorem. Duis tristique porta aliquam. Curabitur sagittis
                        tincidunt erat, quis hendrerit nibh iaculis vitae. Pellentesque ultricies nisl
                        quis odio posuere facilisis. In ut felis erat, ac laoreet orci.
                    </p>
                    <p className={"about_us__quote"}>
                        Quisque mollis, sem id laoreet pretium, lectus elit molestie urna,
                        id tristique risus ante at est. Sed pretium metus sit amet erat blandit
                        vitae pulvinar lorem egestas. Sed lectus nulla, bibendum at vulputate sit amet,
                        tincidunt volutpat lorem. Mae trenas in magna mollis lectus lacinia mollis.
                        Donec sit amet volutpat lorem. Du tristique porta aliquam. Curabitur sagittis
                        tincidunt erat, quis hendrerit nibh iaculis vitae. Pellentesque ultric nisl
                        quis odio posuere facilisis. In ut felis erat, ac laoreet orci donec sed nulla at sit amet.
                    </p>
                    <div className={"about_us__text_wrapper about_us__text_wrapper--2col"}>
                        <p className={"about_us__text"}>
                            Quisque mollis, sem id laoreet pretium, lectus elit molestie urna, id
                            tristique risus ante at est. Sed pretium metus sit amet erat blandit vitae
                            pulvinar lorem egestas. Sed lectus nulla, bibendum at vulputate sit amet,
                            tincidunt volutpat lorem.
                        </p>
                        <p className={"about_us__text"}>
                            Quisque mollis, sem id laoreet pretium, lectus elit molestie urna,
                            id tristique risus ante at est. Sed pretium metus sit amet erat blandit
                            vitae pulvinar lorem egestas. Sed lectus nulla, bibendum at vulputate sit
                            amet, tincidunt volutpat lorem.
                        </p>
                    </div>
                    <div className={"about_us__text_wrapper about_us__text_wrapper--3col"}>
                        <p className={"about_us__text"}>
                            Quisque mollis, sem id laoreet pretium, lectus elit molestie urna,
                            id tristique risus ante at est. Sed pretium metus sit amet erat
                            blandit vitae pulvinar lorem egestas.
                        </p>
                        <p className={"about_us__text"}>
                            Quisque mollis, sem id laoreet pretium, lectus elit molestie urna,
                            id tristique risus ante at est. Sed pretium metus sit amet erat
                            blandit vitae pulvinar lorem egestas.
                        </p>
                        <p className={"about_us__text"}>
                            Quisque mollis, sem id laoreet pretium, lectus elit molestie urna,
                            id tristique risus ante at est. Sed pretium metus sit amet erat
                            blandit vitae pulvinar lorem egestas.
                        </p>
                    </div>
                    <section className={"about_us__alert_wrapper"}>
                        <p className={"about_us__alert_text"}>Alert text</p>
                        <p className={"about_us__alert_text"}>Alert text</p>
                        <p className={"about_us__alert_text"}>Alert text</p>
                        <p className={"about_us__alert_text"}>Alert text</p>
                    </section>
                </div>
                <Sidebar/>
            </section>
        </Fragment>
    )
}

export default AboutUs;
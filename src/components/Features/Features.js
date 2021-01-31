import React from "react";
import Btn from "../Btn/Btn";
import GearIcon from "../icons/GearIcon";
import CheckIcon from "../icons/CheckIcon";
import ManIcon from "../icons/ManIcon";

function Features () {
    return (
        <section className={"features"}>
            <article className={"features__item"}>
                <GearIcon/>
                <h3 className={"features__title"}>Check  out  my  latest
                    portfolio  items</h3>
                <p className={"features__descr"}>
                    Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus.
                    Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum.
                    Nam mi erat, porta id ultrices nec, pellentesque vel nunc.
                    Cras varius fermentum iaculis. Aenean sodales nibh
                    non lectus tempor a interdum justo ultricies.
                </p>
                <Btn classRow = "btn features__btn">More</Btn>
            </article>
            <article className={"features__item"}>
                <CheckIcon/>
                <h3 className={"features__title"}>Offer  Top  Notch  Quality
                    Work  &  Services</h3>
                <p className={"features__descr"}>
                    Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus.
                    Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum.
                    Nam mi erat, porta id ultrices nec, pellentesque vel nunc.
                    Cras varius fermentum iaculis. Aenean sodales nibh
                    non lectus tempor a interdum justo ultricies.
                </p>
                <Btn classRow = "btn features__btn">More</Btn>
            </article>
            <article className={"features__item"}>
                <ManIcon/>
                <h3 className={"features__title"}>Follow  Me  on  Twitter,
                    Facebook  &  Pinterest</h3>
                <p className={"features__descr"}>
                    Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus.
                    Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum.
                    Nam mi erat, porta id ultrices nec, pellentesque vel nunc.
                    Cras varius fermentum iaculis. Aenean sodales nibh
                    non lectus tempor a interdum justo ultricies.
                </p>
                <Btn classRow = "btn features__btn">More</Btn>
            </article>
        </section>
    )
}

export default Features;
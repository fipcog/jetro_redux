import React, {Fragment} from "react";
import PageTitle from "../PageTitle/PageTitle";
import Sidebar from "../Sidebar/Sidebar";
import ContactsForm from "../ContactsForm/ContactsForm";

function ContactUs (props) {
    return (
        <Fragment>
            <PageTitle>Contact us</PageTitle>
            <section className={"contact_us"}>
                <div className={"contact_us__content_wrapper"}>
                    <img className={"contact_us__map"} src={"img/map.jpg"} alt={"map"}/>
                    <section className={"contact_us__contacts_container"}>
                        <p className={"contact_us__description"}>
                            Lorem ipsum dolor sit amet, in consectetur adipiscing elit.
                            Siri Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                            Sed nisi. Nulla quis sem at nibh elementum.
                        </p>
                        <span className={"contact_us__address"}>
                            <strong className={"contact_us__accent"}>Best PSD Freebies</strong><br/>
                            328 Ave C<br/>
                            Saskatoon, SK<br/>
                            S7R 2V9
                        </span>
                        <ul className={"contact_us__contacts"}>
                            <li className={"contact_us__contact"}><b>t:</b> (888) 842 - 8356</li>
                            <li className={"contact_us__contact"}><b>f:</b> (888) 452 - 9257</li>
                            <li className={"contact_us__contact"}><b>e:</b> info@psdfreebies.com</li>
                        </ul>
                    </section>
                    <ContactsForm/>
                </div>
                <Sidebar/>
            </section>
        </Fragment>
    )
}

export default ContactUs;
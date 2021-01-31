import React from "react";

export class ScrollToTop extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 70);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        window.scrollTo(0, 70);
    }

    render() {
        return null;
    }
}

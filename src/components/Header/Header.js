import React from "react";
import Logo from "../icons/Logo";

class Header extends React.Component{

    onMenuClick = (e) => {
        e.preventDefault()
        const pageName = e.target.innerText.toLowerCase()
        this.props.setPage(pageName)
    }

    onLogoClick = (e) => {
        e.preventDefault()
        this.props.setPage("home")
    }

    setClassName = (name) => {
        const {page} = this.props.page;
        let className = "heaver__nav_link";

        if(page === name) className += " active";

        return className
    }

    render() {
        return (
            <header className={"header"} id={"header"}>
                <a className={"header_logo"} href={"*"} onClick={this.onLogoClick}>
                    <Logo/>
                </a>
                <nav className={"header_nav"}>
                    <ul className={"header__list"}>
                        <li className={"header__list_item"}>
                            <a className={this.setClassName("home")} onClick={this.onMenuClick} href={"*"}>home</a>
                        </li>
                        <li className={"header__list_item"}>
                            <a className={this.setClassName("about as")} onClick={this.onMenuClick} href={"*"}>about as</a>
                        </li>
                        <li className={"header__list_item"}>
                            <a className={this.setClassName("blog")} onClick={this.onMenuClick} href={"*"}>blog</a>
                        </li>
                        <li className={"header__list_item"}>
                            <a className={this.setClassName("portfolio")} onClick={this.onMenuClick} href={"*"}>portfolio</a>
                        </li>
                        <li className={"header__list_item"}>
                            <a className={this.setClassName("contact us")} onClick={this.onMenuClick} href={"*"}>contact us</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;
import "./nav.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import myResume from "../../assets/MyResume.pdf";

function Nav() {
    let [isOpen, setIsOpen] = useState(false);

    let handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav">
            <div className="container">
                <img src={logo} alt="User one" />
                <ul className={isOpen ? "active" : null}>
                    <li>
                        <NavLink to="/home" activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" activeClassName="active">
                            Blog
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/contact" activeClassName="active">
                            Hire me
                        </NavLink>
                    </li> */}
                    <li>
                        <a href={myResume}>CV</a>
                    </li>
                </ul>
                <div
                    className={`ham-btn ${isOpen ? "active" : null}`}
                    onClick={handleClick}
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    <div className="bar4"></div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;

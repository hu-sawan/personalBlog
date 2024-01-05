import "./nav.css";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import myResume from "../../assets/MyResume.pdf";

function Nav() {
    let [isOpen, setIsOpen] = useState(false);
    let mobileMenuRef = useRef(null);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleDocumentClick = (e) => {
        // if the click is outside the nav, close the mobile menu
        if (
            mobileMenuRef.current &&
            !mobileMenuRef.current.contains(e.target)
        ) {
            setIsOpen(false);
        }
    };

    // listen for clicks on the document to close the mobile menu when clicked outside the nav
    useEffect(() => {
        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    return (
        <nav className="nav" ref={mobileMenuRef}>
            <div className="container">
                <img src={logo} alt="User one" />
                <ul className={isOpen ? "active" : null}>
                    <li>
                        <NavLink
                            to="/home"
                            activeClassName="active"
                            onClick={handleClick}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            activeClassName="active"
                            onClick={handleClick}
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            activeClassName="active"
                            onClick={handleClick}
                        >
                            Hire me
                        </NavLink>
                    </li>
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

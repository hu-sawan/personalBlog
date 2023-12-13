import "./footer.css";
import React from "react";

let currentDate = new Date();

function Footer() {
    return (
        <div className="footer">
            <span>Copyright &copy; {currentDate.getFullYear()}</span>
        </div>
    );
}

export default Footer;

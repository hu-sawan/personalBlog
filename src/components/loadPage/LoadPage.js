import "./loadPage.css";
import React from "react";

function LoadPage({ isActive }) {
    return (
        <div className={`load-page ${isActive ? "active" : null}`}>
            <div className="loader-wrapper">
                <div className="loader"></div>
                <div className="loader-text">Loading...</div>
            </div>
        </div>
    );
}

export default LoadPage;

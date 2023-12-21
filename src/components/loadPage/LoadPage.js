import React from "react";

function LoadPage({ isActive }) {
    return (
        <div className={`load-page ${isActive ? "active" : null}`}>
            <div>
                <div className="loader"></div>
                <div className="loader-text">Loading...</div>
            </div>
        </div>
    );
}

export default LoadPage;

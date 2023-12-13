import { Link } from "react-router-dom";
import "./pageNotFound.css";
import React from "react";

function PageNotFound() {
    return (
        <div className="pageNotFound">
            <h1 className="error">404</h1>
            <div className="page">
                Ooops!!! The page you are looking for is not found
            </div>
            <Link to="/home" className="back-home">
                Back to home
            </Link>
        </div>
    );
}

export default PageNotFound;

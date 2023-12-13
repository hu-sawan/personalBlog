import "./social.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Social({ platform, link }) {
    const icon = {
        youtube: faYoutube,
        github: faGithub,
        linkedin: faLinkedin,
        email: faEnvelope,
    }[platform];

    if (!icon) {
        return null;
    }

    return (
        <a className="social-link" href={link}>
            <FontAwesomeIcon icon={icon} />
        </a>
    );
}

export default Social;

import "./social.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faYoutube,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Social({
    platform,
    link,
    color = "#000000",
    backgroundColor = "transparent",
}) {
    const icon = {
        facebook: faFacebook,
        youtube: faYoutube,
        github: faGithub,
        linkedin: faLinkedin,
        email: faEnvelope,
    }[platform];

    if (!icon) {
        return null;
    }

    return (
        <a
            className="social-link"
            href={link}
            style={{ backgroundColor: backgroundColor }}
        >
            <FontAwesomeIcon icon={icon} style={{ color: color }} />
        </a>
    );
}

export default Social;

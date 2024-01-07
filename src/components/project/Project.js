import "./project.css";
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Project({ img, title, skills, description, githubRepo, link }) {
    return (
        <>
            <div className="project-card">
                <div className="image">
                    <img src={img} alt="project" />
                </div>
                <div className="project-details">
                    <div className="info">
                        <h3 className="project-title">{title}</h3>
                        <p className="project-description">{description}</p>
                    </div>
                    <div className="skills">
                        {skills.map((skill) => (
                            <strong className="skill" key={skill}>
                                {skill}
                            </strong>
                        ))}
                    </div>
                    <div className="project-links">
                        <a href={githubRepo}>
                            Code <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href={link} disable={true}>
                            Live Demo{" "}
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;

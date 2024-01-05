import "./project.css";
import React from "react";

function Project({ img, title, skills, description, githubRepo, link }) {
    return (
        <>
            <div className="project-card">
                <div className="image">
                    <img src={img} alt="project" />
                </div>
                <div className="info">
                    <h3 className="project-title">{title}</h3>
                    <p className="project-description">{description}</p>
                    <div>
                        <strong>Skills: </strong>
                        {skills.join(", ")}
                    </div>
                </div>
                <div className="project-links">
                    <a href={githubRepo}>See on github</a>
                    <a href={link}>Go to project</a>
                </div>
            </div>
        </>
    );
}

export default Project;

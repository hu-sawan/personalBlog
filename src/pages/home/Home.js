import "./home.css";
import React from "react";
import progModel from "../../assets/model.png";
import Social from "../../components/social/Social";
import Project from "../../components/project/Project";
import portfoioImg from "../../assets/portfolio-project/p-1.png";
import pacmanImg from "../../assets/pacman-project/p-1.png";
import personalBlogImg from "../../assets/personalBlog-project/p-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
    {
        title: "Portfolio Website",
        img: portfoioImg,
        skills: ["HTML", "CSS", "JS"],
        description:
            "A portfolio website to showcase my projects and skills. The website is built using HTML, CSS, and JavaScript.",
        githubRepo: "https://github.com/hu-sawan/personalPortfolio",
        link: "https://hu-sawan.github.io/personalPortfolio/",
    },
    {
        title: "Pacman web game",
        img: pacmanImg,
        skills: ["Canvas", "JS"],
        description:
            "A Pacman web game built using HTML Canvas and JavaScript.",
        githubRepo: "https://github.com/hu-sawan/pacman",
        link: "https://hu-sawan.github.io/pacman/",
    },
    {
        title: "Personal Blog",
        img: personalBlogImg,
        skills: ["Reactjs", "Nodejs", "Expressjs", "MongoDB/Firebase"],
        description:
            "A personal blog website built using Reactjs, Nodejs, Expressjs, and MongoDB/Firebase.",
        githubRepo: "https://github.com/hu-sawan/personalBlog",
        link: "",
    },
];

function Home() {
    return (
        <section className="home-section">
            <div className="brief-intro">
                <div className="container flex">
                    <div className="info">
                        <h1>Hello my name is Hussein Sawan</h1>
                        <p>
                            I am a dedicated second-year computer science
                            student with a strong emphasis on{" "}
                            <strong>C++</strong> programming. My academic
                            journey has provided me with a robust foundation in
                            computer science, and I have honed my technical
                            skills in front-end development using{" "}
                            <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
                            <strong>React.js</strong>, as well as back-end
                            development with <strong>Node.js</strong> and{" "}
                            <strong>Express.js</strong>. In addition to my
                            proficiency in <strong>C++</strong>, I have also
                            acquired expertise in utilizing{" "}
                            <strong>Firebase</strong> for backend development
                            and <strong>TypeScript</strong> and{" "}
                            <strong>Python</strong> for various projects.
                        </p>
                        <div className="social-links">
                            <Social
                                platform="email"
                                link="mailto:husseinsawan2003@gmail.com"
                                backgroundColor="#00000054"
                            />
                            <Social
                                platform="linkedin"
                                link="https://www.linkedin.com/in/husseinsawan/"
                                backgroundColor="#00000054"
                            />
                            <Social
                                platform="github"
                                link="https://github.com/hu-sawan"
                                backgroundColor="#00000054"
                            />
                        </div>
                    </div>
                    <div className="img">
                        <img src={progModel} alt="programmer" />
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 style={{ margin: "20px 0 10px 0" }}>Projects: </h2>
                <div className="project-wrapper">
                    {projects.map((project, index) => {
                        return <Project right={index % 2} {...project} />;
                    })}
                    <div className="more-projects">
                        <div>
                            <span className="icon left">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                            And more projects on my{" "}
                            <a href="https://github.com/hu-sawan">
                                GitHub <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <span className="icon right">
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;

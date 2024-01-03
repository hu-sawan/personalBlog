import "./home.css";
import React from "react";
import progModel from "../../assets/model.png";
import Social from "../../components/social/Social";

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
            <div className="container"></div>
        </section>
    );
}

export default Home;

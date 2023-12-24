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
                            I'm a dedicated computer science student with a
                            broad skill set and a passion for software
                            engineering. My academic journey has given me a
                            solid foundation in computer science, and I've honed
                            my technical skills in both front-end development,
                            utilizing <strong>HTML</strong>,{" "}
                            <strong>CSS</strong>, and <strong>React.js</strong>,
                            as well as back-end development with{" "}
                            <strong>Node.js</strong> and{" "}
                            <strong>Express.js</strong>. Additionally, I have a
                            strong command of <strong>C++</strong>.
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

import React, { useEffect, useState } from "react";
import "./css/Home.css";
import ReactTypingEffect from "react-typing-effect";

export default function Home(props) {
  const pic1 = "../../img/intro.JPG";
  const pic2 = "../../img/intro_2.JPG";

  const [bg, setBg] = useState(pic1);

  useEffect(() => {
    const interval = setInterval(() => {
      setBg((bg) => (bg === pic1 ? pic2 : pic1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
      <section id="home">
        <div className="home-sect">
          <div className="intro-bg"></div>
          <div className="home-title">
            <h1>I am {props.name} </h1>
            <h2 className="subtitle">
              I stand where Problems and Solutions meet.
            </h2>
            <ReactTypingEffect
              className="subtitle"
              text={[
                "FullStack Developer",
                "Machine Learning Engineer",
                "Data Scientist",
                "Bad Designer",
              ]}
              speed={50}
              eraseDelay={500}
              eraseSpeed={50}
              typingDelay={500}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

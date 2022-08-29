import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./css/Home.css";

export default function Home(props) {
  return (
    <React.Fragment>
      <section id="home">
        <div className="home-sect">
          <div className={"intro-bg"}></div>
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

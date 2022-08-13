import React from "react";
import "./css/Home.css"
import Typed from "react-typed";

export default function Home() {


  return (
    <React.Fragment>
      <div id="home" className="full-height dark-bg">
        <div className="home-title">
          <h1>I am Gabriele Aquaro</h1>
          <h2 className="subtitle"> I stand where Problems and <s>ugly</s> Solutions meet. </h2>
          <Typed
            className="subtitle"
            strings={[
              "Full-Stack Developer",
              "Machine Learning Engineer",
              "Bad Designer",
            ]}
            typeSpeed={50}
            backDelay={1100}
            backSpeed={50}
            loop
          />
        </div>
      </div>
    </React.Fragment>
  )
}
import React from "react";
import "./css/Home.css"
import Typed from "react-typed";

export default function Home(props) {


  return (
    <React.Fragment>
      <section id="home">
        <div className="home-sect">


          <div className="intro-bg"> </div>
          <div className="home-title">
            <h1>I am {props.name} </h1>
            <h2 className="subtitle"> I stand where Problems and Solutions meet. </h2>
            <Typed
              className="subtitle"
              strings={[
                "FullStack Developer",
                "Machine Learning Engineer",
                "Data Scientist",
                "Bad Designer",
              ]}
              typeSpeed={50}
              backDelay={1100}
              backSpeed={50}
              loop
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
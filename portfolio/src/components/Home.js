import React, { useState } from "react";
import "./Home.css"
import Typed from "react-typed";

export default function Home() {


  return (
    <React.Fragment id="home">
      <div className="home-title">
        <h1> GABRIELE AQUARO</h1>
        <h2> I stand where prbloems and solution meet! </h2>
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
    </React.Fragment>
  )
}
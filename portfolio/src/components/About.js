import React from "react";
import { Container } from "react-bootstrap";
import "./css/about.css"

export default function About() {


  return (
    <div className="full-height pt-5 mt-5 mb-0" id="about">
      <Container className="bg-white m-auto p-auto h-75 box-shadow">
        <div className="d-flex justify-content-between h-100">
          <div className="w-35 p-2 h-100">
            <div className="mb-4">
              <h5 className="title-about">About</h5>
            </div>
            <span className="lead" >
              Hello World! <br /> I am a computer engineer specialized in Machine Learning and Artificial intelligence,
              with also a strong background in software development. <br />
              I graduated at Polytechnic of Milan in 2021 and in the same period I started working as a Full stack developer at Cisco Systems, where I'm still working. <br />
              About myself...
            </span>
          </div>
          <div className="w-65 p-2">1  </div>
        </div>
      </Container>
    </div>
  )
}

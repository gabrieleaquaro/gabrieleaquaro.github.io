import React from "react";
import { Container } from "react-bootstrap";
import './css/sectionBreaker.css';



export default function SectionBreaker(props) {

  return (
    <div className="position-relative large-padding img-bg generic-bg" >
      <div className="overlay-mf"></div>
      <Container className="position-relative">
        <div className="row">
          {props.content}
        </div>
      </Container>
    </div>
  )
}
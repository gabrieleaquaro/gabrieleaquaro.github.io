import React from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "./SectionTitle"
import WorkBox from './WorkBox'


export default function Works(props) {



  return (
    <section id="projects">
      <div className="col-md-12">
        <SectionTitle title={"Projects"} subtitle={"Projects and Work Experience."}> </SectionTitle>
        <Container>
          <div className="row">
            {props.data.experiences.map((exp, index) => {
              return <WorkBox key={index} title={exp.title} text={exp.text} img={exp.img} date={exp.date}></WorkBox>
            })}
          </div>
        </Container>
      </div>
    </section>
  )
}
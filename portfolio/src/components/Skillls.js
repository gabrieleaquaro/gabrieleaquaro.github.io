import React from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "./SectionTitle"
import CardBox from './CardBox'

export default function Skills(props) {



  return (
    <section id="skills">
      <div className="col-md-12">
        <SectionTitle title={"Knowledge & Abilities"} subtitle={"Something about how I work."}> </SectionTitle>
        <Container>
          <div className="row">
            <CardBox title="Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit." icon={"bi-bar-chart"}></CardBox>
          </div>
        </Container>
      </div>
    </section>
  )
}
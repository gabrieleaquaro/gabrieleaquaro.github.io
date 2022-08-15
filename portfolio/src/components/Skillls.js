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
            {props.data.abilities.map((ab, index) => {
              return <CardBox key={index} title={ab.title} text={ab.text} icon={ab.icon}></CardBox>
            })}
          </div>
        </Container>
      </div>
    </section>
  )
}
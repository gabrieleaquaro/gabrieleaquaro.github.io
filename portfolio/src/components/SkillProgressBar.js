import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function SkillProgressBar(props) {


  return (
    <React.Fragment>
      <div className="m-auto">
        <span> {props.name} &nbsp;&nbsp; {props.value}</span>
        <ProgressBar now={props.value} />
      </div>

    </React.Fragment>

  )

}
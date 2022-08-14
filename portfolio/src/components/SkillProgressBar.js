import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function SkillProgressBar(props) {


  return (
    <React.Fragment>
      <div className="m-auto mb-2 pb-2">
        <span> {props.name}&nbsp;&nbsp;{props.value}%</span>
        <ProgressBar now={props.value} className={'custom-progress-bar'} />
      </div>
    </React.Fragment>

  )

}
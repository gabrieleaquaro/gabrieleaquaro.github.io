import React from "react";


export default function SectionTitle(props) {
  return (<div className="mb-3 text-center">
    <h3 className="section-title">
      {props.title}
    </h3>
    <p className="section-subtitle"> {props.subtitle} </p>
    <div className={'line-mf'}></div>
  </div>

  )

}
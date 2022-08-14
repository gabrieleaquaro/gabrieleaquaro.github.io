import React from "react";
import './css/cardbox.css'
import { FaBeer } from 'react-icons/fa';

export default function CardBox(props) {


  return (
    <div className="col-md-4">
      <div className="card-box">
        <div className="card-box-ico mb-4">
          <span className="ico-circle">
            <FaBeer />
          </span>
        </div>
        <div>
          <h2 className="s-title">{props.title}</h2>
          <p className="s-description text-center">
            {props.text}
          </p>
        </div>
      </div>
    </div >
  )
}
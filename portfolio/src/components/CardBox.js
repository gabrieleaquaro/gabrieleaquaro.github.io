import React from "react";
import  {icons} from '../utils/images';
import './css/cardbox.css';

export default function CardBox(props) {

  return (
    <div className="col-md-4">
      <div className="card-box box-shadow">
        <div className="card-box-ico mb-4 ">
          <span className="ico-circle">
            {icons[props.icon] ? icons[props.icon] : null}
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
import React from "react";
import './css/cardbox.css'
import { FaBeer, } from 'react-icons/fa';
import { GiArtificialIntelligence, } from 'react-icons/gi';
import { RiCodeSSlashFill } from 'react-icons/ri';

export default function CardBox(props) {

  const iconSwitch = (name) => {
    switch (name) {
      case 'ai':
        return <GiArtificialIntelligence />

      case 'code':
        return <RiCodeSSlashFill />

      default:
        return <FaBeer />
    }
  }

  return (
    <div className="col-md-4">
      <div className="card-box">
        <div className="card-box-ico mb-4">
          <span className="ico-circle">
            {iconSwitch(props.icon)}
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
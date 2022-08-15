import React from "react";
import { FaBeer, FaCalendarCheck, FaChessBoard, FaBook, FaCode } from 'react-icons/fa';
import { GiStairsGoal } from 'react-icons/gi';
import { VscGraphScatter } from "react-icons/vsc";
import './css/cardbox.css';

export default function CardBox(props) {

  const iconSwitch = {
    'ai': <VscGraphScatter />,
    'code': <FaCode />,
    'chess': <FaChessBoard />,
    'time': <FaCalendarCheck />,
    'goal': <GiStairsGoal />,
    'book': <FaBook />,
  }

  return (
    <div className="col-md-4">
      <div className="card-box box-shadow">
        <div className="card-box-ico mb-4 ">
          <span className="ico-circle">
            {iconSwitch[props.icon] ? iconSwitch[props.icon] : <FaBeer />}
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
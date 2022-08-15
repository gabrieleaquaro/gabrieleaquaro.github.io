import React from "react";
import { Image } from "react-bootstrap";
import { BiPlusCircle } from 'react-icons/bi';
import './css/workBox.css'
import work1 from '../img/work1.png';
import work2 from '../img/work2.png';
import work3 from '../img/work3.jpg';
import work4 from '../img/work4.jpg';
import work5 from '../img/work5.jpg';
import work6 from '../img/work6.jpg';

export default function WorkBox(props) {

  const images = {
    work1: work1,
    work2: work2,
    work3: work3,
    work4: work4,
    work5: work5,
    work6: work6,
  }

  return (
    <div className="col-md-4">
      <div className="work-box box-shadow">
        <div className="work-img">
          <Image src={images[props.data.img]} alt="Work" className="img-fluid" />
        </div>
        <div className="work-content">
          <div className="row">
            <div className="col-sm-8">
              <h2 className="w-title">{props.data.title}</h2>
              <div className="w-more">
                <span className="w-ctegory">{props.data.text}</span>
                &nbsp;/&nbsp;
                <span className="w-date">{props.data.date}</span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="w-like">
                <a href={props.data.url} target="_blank" rel="noreferrer">
                  <BiPlusCircle > </BiPlusCircle>
                </a> { /* TODO :   Project page*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}
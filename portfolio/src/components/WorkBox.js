import React from "react";
import { Image } from "react-bootstrap";
import { BiPlusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import work1 from "../img/work1.png";
import work2 from "../img/work2.png";
import work3 from "../img/work3.png";
import work4 from "../img/work4.jpg";
import work5 from "../img/work5.png";
import work6 from "../img/work6.jpg";
import work7 from "../img/work7.jpg";
import "./css/workBox.css";

const images = {
  work1: work1,
  work2: work2,
  work3: work3,
  work4: work4,
  work5: work5,
  work6: work6,
  work7: work7,
};

export default function WorkBox(props) {
  return (
    <div className="col-md-4">
      <div className="work-box box-shadow">
        <div className="work-img">
          <Image
            src={images[props.data.img]}
            alt="Work"
            className="img-fluid"
          />
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
                <Link
                  to={props.data.url}
                  target={props.newPage ? "_blank" : ""}
                  rel="noreferrer"
                >
                  <BiPlusCircle> </BiPlusCircle>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Container, Image } from "react-bootstrap";
import pic from "../img/profile.png";
import "./css/about.css";
import SkillProgressBar from "./SkillProgressBar";

export default function About(props) {
  return (
    <section className="pt-5 mt-5 mb-5" id="about">
      <Container className="bg-white m-auto p-auto box-shadow">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              {/** SKILLS PHOTO and Contacts */}
              <div className="col-md-6 align-center">
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-lg-3 my-auto">
                    <div className="ml-2 my-auto">
                      <Image
                        src={pic}
                        className="img-fluid rounded b-shadow-a"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-7 mt-3">
                    <div>
                      <p>
                        <span className="title-s">Name: </span>
                        <span>{props.data.name}</span>
                      </p>
                      <p>
                        <span className="title-s">Profile: </span>
                        <span>{props.data.profile}</span>
                      </p>
                      <p>
                        <span className="title-s">Email: </span>
                        <span> {props.data.email}</span>
                      </p>
                      <p>
                        <span className="title-s">Location: </span>
                        <span> {props.data.location}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row  pt-2 ">
                  <p>
                    <span className="title-s"> Skill </span>
                  </p>

                  {props.data.skills.map((skill) => {
                    return (
                      <SkillProgressBar
                        name={skill.name}
                        value={skill.value}
                        key={skill.name}
                      ></SkillProgressBar>
                    );
                  })}
                </div>
              </div>

              {/** DESCRIPTION*/}
              <div className="col-md-6 mt-1">
                <div className="mt-2 mb-4">
                  <h5 className="title-about">About me</h5>
                </div>
                <p className="lead">
                  {props.data.about.map((text, index) => {
                    return (
                      <span key={index}>
                        {text} <br />
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

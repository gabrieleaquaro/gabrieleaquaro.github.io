import React, { useEffect } from "react";
import { Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Navigation from "./components/Navigation";
import data from "./data.json";
import work1 from "./img/work1.png";
import "./style/MainPage.css";
import "./style/projectPage.css";

export default function ProjectPage(props) {
  const { projectId } = useParams();
  const projectData = data.projectsDetails[projectId];

  useEffect(() => {
    document.title = projectData.title;
  }, [projectData.title]);

  return (
    <>
      <div className="position-relative large-padding img-bg generic-bg">
        <div className="overlay-mf"></div>
        <Navigation logo={data.logo} baseUrl="/"></Navigation>
        <Container className="position-relative">
          <Row>
            <div className="col-12 text-center dark-color">
              <h2 className="main-title"> Project Details </h2>
              <span className="subtitle-project">
                / &nbsp; Home &nbsp; / &nbsp; Projects &nbsp; / &nbsp;
                {projectData.title}
              </span>
            </div>
          </Row>
        </Container>
      </div>

      <div className="container-fluid px-5">
        <div className="row d-flex justify-content-between">
          <div className="col-md-6 mt-5 light-bg">
            <div className="d-flex justify-content-center pt-4">
              <Image src={work1} alt="Work" className="img-fluid w-75" />
            </div>
            <div className="mt-4">
              <h2 className="overview-title">
                {projectData["long-title"].toUpperCase()}
              </h2>
              <p>
                {projectData.description ||
                  `Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Cras ultricies ligula sed magna dictum porta. Quisque velit
                nisi, pretium ut lacinia in, elementum id enim. Praesent sapien
                massa, convallis a pellentesque nec, egestas non nisi.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque, auctor sit amet
                aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut
                libero malesuada feugiat.`}
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-5 p-5 h-100 light-bg">
            <span className="overview-title"> OVERVIEW </span>
            <div className="mt-3">
              <span>
                <p>Category: {projectData.category} </p>
              </span>
              <span>
                <p>Date: {projectData.date} </p>
              </span>
              {projectData.url && (
                <span>
                  <p>Url: {projectData.url} </p>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

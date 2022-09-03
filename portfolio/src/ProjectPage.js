import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "./components/Navigation";
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
            <Col className="col-12">
              <Container className="text-center py-5 mb-3 light-color">
                <div>
                  <h2 className="main-title"> Project Details </h2>

                  <span className="lead">
                    / &nbsp; Home &nbsp; / &nbsp; projects &nbsp; / &nbsp;
                    {projectData.title}
                  </span>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="my-3">
          <Col className="col-md-8">
            <Container className="text-center">
              <div style={{ height: "80vh", backgroundColor: "green" }}> </div>
            </Container>
          </Col>
          <Col className="col-md-4">
            <Container className="text-center">
              <div
                style={{ height: "80vh", backgroundColor: "green" }}
                className="py-5"
              >
                <span>
                  <p>Description: {projectData.description} </p>
                </span>
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
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

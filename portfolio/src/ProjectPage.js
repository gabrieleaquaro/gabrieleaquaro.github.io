import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";
import Navigation from "./components/Navigation";
import { Col, Container, Row } from "react-bootstrap";

export default function ProjectPage(props) {
  const { projectId } = useParams();
  const projectData = data.projectsDetails[projectId];

  useEffect(() => {
    document.title = "G. Aquaro";
  }, []);

  return (
    <>
      <Row>
        <Col className="col-12">
          <Container className="text-center py-5 mb-3">
            <div>{projectData.title} </div>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className="col-8">
          <Container className="text-center">
            <div style={{ height: "80vh", backgroundColor: "green" }}> </div>
          </Container>
        </Col>
        <Col className="col-4">
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
    </>
  );
}

import React, { useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { MyFooter } from "./components/footer";
import data from "./data.json";
import "./style/MainPage.css";
import "./style/projectPage.css";
import { projectImages } from "./utils/images";

export default function ProjectPage(props) {
  const { projectId } = useParams();
  const projectData = data.projectsDetails[projectId];

  useEffect(() => {
    document.title = projectData.title;
  }, [projectData.title]);

  return (
    <>
      <div style={{ minHeight: "95vh" }}>
        <div className="position-relative large-padding generic-bg">
          <div className="overlay-mf"></div>

          <div className="container position-relative">
            <div className="row">
              <div className="col-12 text-center dark-color">
                <h2 className="main-title"> Project Information </h2>
                <span className="subtitle-project">
                  / &nbsp;
                  <Link to="/" className="project-link">
                    Home
                  </Link>
                  &nbsp; / &nbsp; Projects &nbsp; / &nbsp;
                  {projectData.title}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container position-relative">
          <div className="row  mt-5 mb-3 ">
            <div className="col-md-6">
              <Carousel className="cust-carousel">
                {projectData.imgs.map((img, index) => {
                  return (
                    <Carousel.Item key={img + "_" + index}>
                      <Image
                        src={projectImages[img]}
                        alt="Image"
                        className="project-image"
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>

            <div className="col-md-6 h-100">
              <div className="row light-bg">
                <span className="overview-title mb-3"> OVERVIEW </span>
                <div>
                  <span>
                    <p>
                      <b>Category:</b>&nbsp;
                      {projectData.category}
                    </p>
                  </span>
                  <span>
                    <p>
                      <b>Date:</b>&nbsp;{projectData.date}
                    </p>
                  </span>
                  {projectData.url && (
                    <span>
                      <p>
                        <b>Url:</b>&nbsp;
                        <a href={projectData.url}> {projectData.url}</a>
                      </p>
                    </span>
                  )}
                </div>
              </div>

              <div className="row light-bg mt-5">
                <h2 className="overview-title mb-4">
                  {projectData["long-title"].toUpperCase()}
                </h2>
                <p>{projectData.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyFooter />
    </>
  );
}

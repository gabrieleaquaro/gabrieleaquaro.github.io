import React, { useEffect } from "react";
import { Carousel, Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MyFooter } from "./components/footer";
import Navigation from "./components/Navigation";
import data from "./data.json";
import "./style/MainPage.css";
import "./style/projectPage.css";
import { images } from "./utils/images";

export default function ProjectPage(props) {
  const { projectId } = useParams();
  const projectData = data.projectsDetails[projectId];

  useEffect(() => {
    document.title = projectData.title;
  }, [projectData.title]);

  return (
    <>
      <div style={{ minHeight: "95vh" }}>
        <div className="position-relative large-padding img-bg generic-bg">
          <div className="overlay-mf"></div>

          <Navigation logo={data.logo} baseUrl="/"></Navigation>

          <Container className="position-relative">
            <div className="row">
              <div className="col-12 text-center dark-color">
                <h2 className="main-title"> Project Information </h2>
                <span className="subtitle-project">
                  / &nbsp; Home &nbsp; / &nbsp; Projects &nbsp; / &nbsp;
                  {projectData.title}
                </span>
              </div>
            </div>
          </Container>
        </div>

        <div className="row d-flex justify-content-center mt-5 mb-3 ">
          <div className="col-md-6 d-flex justify-content-center ">
            <Carousel className="cust-carousel">
              {projectData.imgs.map((img, index) => {
                return (
                  <Carousel.Item
                    key={img + "_" + index}
                    className="align-middle"
                  >
                    <Image
                      src={images[img]}
                      alt="Image"
                      className="project-image"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>

          <div className="col-md-4 h-100">
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
        </div>
      </div>
      <MyFooter />
    </>
  );
}

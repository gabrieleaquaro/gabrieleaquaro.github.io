import React from "react";
import { Container } from "react-bootstrap";
import { icons } from "../utils/images";
import SectionTitle from "./SectionTitle";

export default function Contact(props) {
  return (
    <section id="contact">
      <div className="position-relative large-padding img-bg generic-bg">
        <div className="overlay-mf"></div>
        <Container className="position-relative dark-color">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <SectionTitle
                  title={"Contacts"}
                  subtitle={"Where to find more information about me."}
                />
              </div>
              <div className="row py-5 d-flex justify-content-between">
                {props.contactInfo.map((el) => {
                  return (
                    <div className="col-md-4 my-4 d-flex justify-content-center">
                      <div className="card-box-ico">
                        <a href={el.url} target="_blank" rel="noreferrer">
                          <span className="ico-circle dark-color">
                            {icons[el.icon] ? icons[el.icon] : null}
                          </span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

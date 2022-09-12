import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./style/MainPage.css";
import About from "./components/About";
import Citation from "./components/CitationBox";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import SectionBreaker from "./components/SectionBreaker";
import Skills from "./components/Skillls";
import Works from "./components/Works";
import data from "./data.json";
import { MyFooter } from "./components/footer";

export default function MainPage() {
  return (
    <React.Fragment>
      <Navigation logo={data.logo}></Navigation>
      <Home name={data.name} />
      <About data={data} />
      <Skills data={data} />
      <SectionBreaker
        content={
          <Citation author={data.citation.author} text={data.citation.text} />
        }
      />
      <Works data={data} />
      <Contact contactInfo={data.contact}></Contact>

      <MyFooter />
    </React.Fragment>
  );
}

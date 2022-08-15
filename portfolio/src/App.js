import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import About from './components/About';
import Skills from './components/Skillls'
import SectionBreaker from './components/SectionBreaker';
import Works from './components/Works';
import data from './data.json';


export default function App() {

  useEffect(() => {
    document.title = "Gabriele Aquaro"
  }, []);

  return (
    <React.Fragment>
      <Navigation logo={data.logo}></Navigation>
      <Home name={data.name} />
      <About data={data} />
      <Skills data={data} />
      <SectionBreaker> </SectionBreaker>
      <Works data={data} />
    </React.Fragment>
  );
}
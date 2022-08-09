import React from "react";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
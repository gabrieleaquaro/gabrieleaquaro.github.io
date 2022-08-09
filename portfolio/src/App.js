import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./App.css";
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import About from './components/About';


export default function App() {
  return (
    <React.Fragment>
      <Navigation></Navigation>
      <Home></Home>
      <About />
    </React.Fragment>
  );
}
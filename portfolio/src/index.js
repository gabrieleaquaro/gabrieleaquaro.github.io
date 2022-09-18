import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import MainPage from "./MainPage";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from "./ProjectPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<MainPage />} />
    </Routes>
    <Routes>
      <Route path="project-details/:projectId" element={<ProjectPage />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();

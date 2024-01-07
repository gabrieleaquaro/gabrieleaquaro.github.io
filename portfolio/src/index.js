import React from "react";
import ReactDOM from "react-dom/client";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import ProjectPage from "./ProjectPage";
import { PacemakerMain } from "./pacemaker/main";
import reportWebVitals from "./reportWebVitals";
import "./style/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route exact path="" element={<MainPage />} />
      <Route exact path="pacemaker" element={<PacemakerMain />} />
      <Route path="project-details/:projectId" element={<ProjectPage />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();

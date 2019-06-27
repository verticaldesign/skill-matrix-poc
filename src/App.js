import React from "react";
//import logo from "./logo.svg";
import "./app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SkillGrid from "./components/SkillGrid";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import NavHeader from "./components/NavHeader";

function App() {
  return (
    <Router basename={"/"}>
      <div className="app-container">
        <NavHeader />
        <div className="width-container content-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/skill-grid" component={SkillGrid} />
            <Route path="/projects" component={Projects} />
            <Route path="/project-details" component={ProjectDetails} />
            <Route path="/training-schedule" component={SkillGrid} />
            <Route path="/my-profile" component={SkillGrid} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

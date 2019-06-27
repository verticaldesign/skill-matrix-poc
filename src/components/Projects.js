import React, { Component } from "react";
import { Link } from "react-router-dom";

class Projects extends Component {
  render() {
    return (
      <>
        <div className="page-header">
          <h2 className="title">Active Projects</h2>
        </div>
        <div className="project-content-container">
          <div className="project-row header-row">
            <div className="project-facet">
              <label>Name</label>
            </div>
            <div className="project-facet">
              <label>Project Status</label>
            </div>
            <div className="project-facet">
              <label>People in Project</label>
            </div>
            <div className="project-facet">
              <label>Unique Knowledge Count</label>
            </div>
            <div className="project-facet">
              <label>Knowledge Gap Count</label>
            </div>
          </div>
          <div className="project-row">
            <div className="project-facet project-title">
              <Link to="project-details">OM</Link>
            </div>
            <div className="project-facet">
              <span className="status active">Active</span>
            </div>
            <div className="project-facet">3</div>
            <div className="project-facet">5</div>
            <div className="project-facet">7</div>
          </div>

          <div className="project-row">
            <div className="project-facet project-title">
              <Link to="project-details">Sales Center</Link>
            </div>
            <div className="project-facet">
              <span className="status active">Active</span>
            </div>
            <div className="project-facet">3</div>
            <div className="project-facet">5</div>
            <div className="project-facet">7</div>
          </div>

          <div className="project-row">
            <div className="project-facet project-title">
              <Link to="project-details">OCA</Link>
            </div>
            <div className="project-facet">
              <span className="status active">Active</span>
            </div>
            <div className="project-facet">13</div>
            <div className="project-facet">20</div>
            <div className="project-facet error">38</div>
          </div>

          <div className="project-row">
            <div className="project-facet project-title">
              <Link to="project-details">Warranty</Link>
            </div>
            <div className="project-facet">
              <span className="status inactive">Inctive</span>
            </div>
            <div className="project-facet">0</div>
            <div className="project-facet">15</div>
            <div className="project-facet">2</div>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;

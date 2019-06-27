import React from "react";
import { Link } from "react-router-dom";
import { MdSearch, MdExpandMore, MdHome } from "react-icons/md";

const NavHeader = () => {
  return (
    <div className="header-container width-container">
      <div className="header">
        <img className="logo" />
        <div className="title-container">
          <h1>Skill Matrix</h1>
          <div>
            John Doe <MdExpandMore />
          </div>
        </div>
        <div className="header-search">
          <MdSearch />
        </div>
      </div>
      <nav>
        <Link className="nav-item home" to="/">
          <MdHome />
        </Link>
        <Link className="nav-item" to="skill-grid">
          People Grid
        </Link>
        <Link className="nav-item" to="projects">
          Projects
        </Link>
        <Link className="nav-item" to="training-schedule">
          Training Schedule
        </Link>
        <Link className="nav-item" to="my-profile">
          My Knowledge
        </Link>
      </nav>
    </div>
  );
};

export default NavHeader;

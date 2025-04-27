import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="div">
          <div className="div-1">
            <div className="select">
              <span className="en">EN</span>
              <div className="frame-2">
                <div className="frame-3" />
              </div>
            </div>
          </div>
        </div>
        <Link to="/" className="intun">
          logo
        </Link>
        <div className="div-4">
          <Link to="/personality-test" className="personality-test">
            Personality Test
          </Link>
          <Link to="/community" className="community">
            Community
          </Link>
          <Link to="/about" className="about-us">
            About Us
          </Link>
          <Link to="/resources" className="resources">
            Resources
          </Link>
        </div>
      </nav>
    </header>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <div className="custom-nav sticky-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="custom-nav-brand">
            JIBON
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span>
              <FontAwesomeIcon icon={faBars} className="custom-icon" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="custom-nav-link">
                  about us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="custom-nav-link">
                  our work
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="custom-nav-link">
                  impact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="custom-nav-link">
                  volunteer
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="custom-nav-link">
                  latest
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="custom-nav-link">
                  career
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="custom-nav-link">
                  contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="custom-btn-sm-reverse">
                  donate now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

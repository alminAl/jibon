import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../../Scss/DashboardScss/Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
      >
        <FontAwesomeIcon icon={faBars} className="toggle-bar" />
      </button>

      <div className="offcanvas offcanvas-end" id="offcanvasRight">
        {/* sidebar header */}
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close me-auto"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        {/* sidebar body */}
        <div className="offcanvas-body">
          {/* sidebar menu will here */}
          <ul className="navbar-nav text-center gap-2">
            <li className="nav-item">
              <Link to="profile" className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="add-event" className="nav-link">
                Add New Event
              </Link>
            </li>
            <li className="nav-item">
              <Link to="our-events" className="nav-link">
                Our Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

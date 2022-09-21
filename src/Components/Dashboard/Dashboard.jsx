import React from "react";
import Sidebar from "./Sidebar.jsx";
import "../../Scss/DashboardScss/Dashboard.scss";
import { Link, Outlet } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-nav">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="custom-link">
            <h3 className="brand-name">JIBON</h3>
          </Link>
          <Sidebar />
        </div>
      </div>

      {/* <div className="dashboard-content">
<<<<<<< HEAD
        <div>
          <h1>dashboard content is going here.</h1>
=======
        <div className="container">
          <Outlet />
>>>>>>> 4b49e10fc8e5505420621b835210cfde6868ee7f
        </div>
      </div> */}
    </div>
  );
};

export default DashboardHome;

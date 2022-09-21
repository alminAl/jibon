import React from "react";
import { Link } from "react-router-dom";
import "../DashboardComponent/profile.css";

const Profile = () => {
  return (
    <div className="py-5">
      <div className="row g-4">
        <div className="col-md-4">
          <div className="px-3 ">
            <div className="img-div">
              <img
                src="https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg"
                alt=""
              />
            </div>
            <div className="mt-4 text-center">
              <h6 className="text-success fw-bold">Mashrafi Bin Mortaza</h6>
              <h6 className="text-primary fw-bolder">Admin</h6>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="mb-4">
            <h2>Additional Details</h2>
            <hr />
          </div>
          <div>
            <table class="table bg-transparent">
              <tbody>
                <tr>
                  <th scope="row">Present Address</th>
                  <td>Tejgaon, Dhaka</td>
                </tr>
                <tr>
                  <th scope="row">Permanent Address</th>
                  <td>Jamalpur, Mymensing</td>
                </tr>
                <tr>
                  <th scope="row">Email Address</th>
                  <td>mash@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">Contact Number</th>
                  <td>+880 177854211</td>
                </tr>
                <tr>
                  <th scope="row">Last Education Qualification</th>
                  <td>Honers in Math, DU</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center my-5">
            <Link to="edit">
              <button className="btn mt-5 btn-outline-success">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

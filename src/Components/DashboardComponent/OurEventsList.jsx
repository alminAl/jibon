import React from "react";

const OurEventsList = ({ event }) => {
  console.log(event);
  return (
    <div className="border border-secondary mb-4 p-3 rounded bg-success p-2 text-dark bg-opacity-10">
      <div className="text-center text-success text-capitalize mb-3">
        <h3>{event.event_name}</h3>
      </div>
      <div className="row text-center row-cols-1 row-cols-md-2 row-cols-lg-4">
        <h5>{event.status} Event</h5>
        <h5>Location - {event.location}</h5>
        <h5>Time - {event.time}</h5>
        <div>
          <span>
            <button className="btn btn-sm btn-outline-success">Edit</button>
          </span>
          <span className="ms-3">
            <button className="btn btn-sm btn-warning">Delete</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurEventsList;

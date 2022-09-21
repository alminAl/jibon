import React from "react";
import eventData from "../../testData/eventData";
import OurEventsList from "./OurEventsList";

const OurEvents = () => {
  return (
    <div className="py-5">
      <div>
        <h2 className="text-center text-success mb-4 text-uppercase">
          Our all social events
        </h2>
        <div className="d-flex mb-2">
          <div>
            <h3>Filtered by </h3>
          </div>
          <div className="ms-3">
            <select
              class="form-select form-select-md mb-3 border border-success"
              aria-label=".form-select-lg example"
            >
              <option selected value="All-catagory">
                All Catagory
              </option>
              <option value="On-going">On-going</option>
              <option value="Up-comming">Up-comming</option>
              <option value="Previous">Previous</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        {eventData.map((event) => (
          <OurEventsList event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
};

export default OurEvents;

import { faClock, faCrosshairs, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import eventList from '../../testData/eventfakeData';
import '../../Scss/EventLatest/EventLatest.scss'
const EvenLatest = () => {

    const color_list = [
        "#E24443",
        "#303D4D",
        "#F9BAAC",
        "indianred",
        "MediumAquaMarine",
        "MediumPurple",
        "Rebeccapurple",
        "sandybrown",
        "seagreen",
        "palevioletred",
        "lightsteelblue",
        "teal",
    ];



    return (



        <div className='container'>




            <div style={{ padding: '15px', marginTop: '100px', }} className='row gx-5  mt-xs-5 '>


                {
                    eventList.map((item) => {
                        const random_color = color_list[Math.floor(Math.random() * color_list.length)];
                        return (

                            <div key={item.id} className=" col-lg-4 col-md-6 col-sm-12 col-xs-12 gx-5">
                                <div className='event-card'>
                                    <div className="card-inneer-container ">
                                        <div style={{ backgroundColor: random_color }} className="date-container text-center pt-2"><h5>{item.date} <br />{item.month}</h5></div>
                                        <div className="event-img-container img-fluid"><img src="https://www.zindagitrust.org/img/sections/1n.jpg" alt="" srcset="" /></div>
                                        <div className="event-info-container"><h6>{item.title}   </h6>
                                            <span><span style={{ verticalAlign: "baseline" }}>  <FontAwesomeIcon icon={faLocationCrosshairs} /> Chittagong</span> <br /><span style={{ verticalAlign: "baseline" }}>  <FontAwesomeIcon icon={faClock} /> 11 am</span></span>
                                        </div>


                                    </div>


                                </div>


                            </div>

                        );
                    })
                }

                <div className='d-flex Volunteer-btn'>


                    <button className='btn btn-outline-danger' style={{ margin: '50px auto', padding: '20px' }}>Join As Volunteer</button>
                </div>

            </div>



        </div>


















    );
};

export default EvenLatest;
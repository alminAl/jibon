import React from 'react';
import "../../Scss/UserProfileScss/UserProfile.scss";
const UserProfile = () => {
    return (
        <div>
            <section className='container userProfile'>
                <div className='row'>
                    <div className="col-md-4">
                        <div className='card'>
                            <div className="card-body d-flex align-items-center text-center justify-content-center ">
                                <div>
                                    <div className='imageBody'>
                                        <img className='image' src={require('../images/profile.jpg')} alt="" srcset="" />
                                    </div>
                                    <div>
                                        <h4>Ashraful Islam</h4>
                                        <h6 className='text-muted'>Role: Admin</h6>
                                        <p class="text-secondary mb-1">Full Stack Developer</p>
                                        <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                        <button class="btn btn-primary me-2">Call</button>
                                        <button class="btn btn-outline-primary">Message</button>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Full Name</h6>
                                        </div>
                                        
                                        <div class="col-sm-9 text-secondary">
                                            Kenneth Valdez
                                        </div>
                                </div>
                                <hr />
                                <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Email</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            ashrafulislam21211@gmail.com
                                        </div>
                                    </div>
                                    
                                <hr />
                                <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Phone</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            +8801750514197
                                        </div>
                                    </div>
                                    
                                <hr />
                                <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Facebook ID</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                              www.facebook.com/sayem21
                                        </div>
                                    </div>
                                    
                                <hr />
                                <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Full Name</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <address>
                                                House 27/3,Vatar,Dhaka,Bangladesh
                                            </address>
                                        </div>
                                    </div>
                                    
                                <hr />
                                <div className='row'>
                                    <div className='col-sm-12'>
                                    <a class="btn btn-info px-4 " target="__blank" href="#/">Edit</a>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UserProfile;
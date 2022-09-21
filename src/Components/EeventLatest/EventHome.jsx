import React from 'react';
import Footer from '../ReuseComponent/Footer';
import Navigation from '../ReuseComponent/Navigation';
import EvenLatest from './EvenLatest';

const EventHome = () => {
    return (
        <div>
            <Navigation ></Navigation>
            <EvenLatest ></EvenLatest>

        </div>
    );
};

export default EventHome;
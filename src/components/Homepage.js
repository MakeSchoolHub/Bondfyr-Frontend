import React from 'react';
import './Homepage.css'
import EventShowcase from'./EventShowcase'
import SiteDesc from './SiteDesc'
import EventList from './EventList'

function Homepage() {
    return(
        <div>
        <EventShowcase />
        <SiteDesc />
        <EventList />
        </div>
        
    )
}

export default Homepage
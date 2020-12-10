import React from 'react';
import './Event.css'

function Event(props) {
    const { image, eventName, description, host, date, startTime,link} = props
    return (
        <div className="Event">
             <img src={image} width="300" height="300" alt="Hello" />
             <div className="Info">
                <h1>{eventName}</h1>
                <h2>Hosted by {host}</h2>
                <h2>{date} at {startTime}</h2>
                <h3> {description} </h3>
             </div>
        </div>
    )
}

export default Event
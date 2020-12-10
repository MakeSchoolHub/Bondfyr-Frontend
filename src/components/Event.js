import React from 'react';
import './Event.css'

function Event(props) {
    const { image, eventName, description, host, date, startTime,link} = props
    return (
        <div>
             <img src={image} width="300" height="300" alt="Hello" />
             <h1>{eventName}</h1>
             <h2>{date}</h2>
             <h2>{startTime}</h2>
             <h2>Hosted by {host}</h2>
             <h3> {description} </h3>
             <h3>Link: {link} </h3>

        </div>
    )
}

export default Event
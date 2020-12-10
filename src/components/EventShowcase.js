/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './EventShowcase.css';
import data from './events.json';

function EventShowcase(props) {
    const { image, eventName, description, host, date, startTime,link} = data[0]

        return (
          <div className="Showcase">
            <h1>Now Burning</h1>
            <img src={image} className="ShowcasePhoto" alt="Showcase Photo" />
             <div className="EventName">{eventName}</div>
             <h2>{date}</h2>
             <h2>{startTime}</h2>
             <h2>Hosted by {host}</h2>
             <h3> {description} </h3>
             <h3>Link: {link} </h3>
          </div>
        )
      }
export default EventShowcase
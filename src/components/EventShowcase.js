import React from 'react';
import Event from './Event';
import './EventShowcase.css';
import data from './events.json';

function EventShowcase(props) {
    const { image, eventName, description, host, date, startTime} = data[0]

        return (
          <Event
            image={image}
            eventName={eventName}
            description={description}
            host={host}
            date={date}
            startTime={startTime}
          />
        )
      }
export default EventShowcase
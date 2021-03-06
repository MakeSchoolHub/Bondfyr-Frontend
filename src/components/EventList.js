import React from 'react';
import Event from './Event';
import './EventList.css';
import data from './events.json';

function EventList() {
    const events = data.map(( { image, eventName, description, host, date, startTime,link}) => {

        return (
          <Event
            image={image}
            eventName={eventName}
            description={description}
            host={host}
            date={date}
            startTime={startTime}
            link={link}
          />
        )
      })
      return (
        <div className="EventList">
          { events }
        </div>
      )
}

export default EventList
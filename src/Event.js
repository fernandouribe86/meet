import React, { Component } from 'react';

class Event extends Component {
  render() {
    const {event} =this.props;
    return <div id="event">
      <h1 id="eventSummary">{event.summary}</h1>
      <p id="eventDescription">{event.description}</p>
      <p id="eventLocation">{event.location}</p>

      <p id="dateTimeStart">{event.start.dateTime}</p>
      <button id="show-details">Show details</button>
    </div>;
  }
}

export default Event;
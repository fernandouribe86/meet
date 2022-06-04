import React, { Component } from 'react';

class Event extends Component {

  state={
    collapsed: true
  }

  handleDetailsClicked = () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
  };

  render() {
    const {event} =this.props;
    const { collapsed } = this.state;
    const dateStart = new Date(event.start.dateTime);
    const dateEnd = new Date(event.end.dateTime);

    let day = dateStart.getDate();
    console.log(day);
    let month = dateStart.getMonth();
    console.log(month);
    let year = dateStart.getFullYear();
    console.log(year);

    function formatAMPM(dateStart) {
      var hours = dateStart.getHours();
      var minutes = dateStart.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }
    
    console.log(formatAMPM(dateStart));
    console.log(formatAMPM(dateEnd));
   
        
    return <div id='event'>
      
        <h1 id='eventSummary'>{event.summary}</h1>
        <p id='eventLocation'>{event.location}</p>
        <p id="date">Date: {month}/{day}/{year}</p>
        
        <button id='show-details' onClick={this.handleDetailsClicked}>{collapsed ? 'show Details' : 'Hide Details'}</button>

        {!collapsed && (
          <div id="eventDetails">
            <p id='dateTimeStart'>Start: {formatAMPM(dateStart)} - End: {formatAMPM(dateEnd)} </p>
            <p id='eventDescription'>{event.description}</p>
            <a href={event.htmlLink} id="toCal" >View in Google Calendar</a>
          </div>
        )}

      </div>
  }
}

export default Event;
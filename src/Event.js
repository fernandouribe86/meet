import React, { Component } from 'react';

class Event extends Component {
  state = {
    buttonExpanded: false
  };

  showDetailsToggle() {
    //if there is a click, the state goes from false to true, then true to false
    this.setState({ buttonExpanded: !this.state.buttonExpanded });
  }

  render() {
    const {event} =this.props;
    return <div id="event">
      <h1 id="eventSummary">{event.summary}</h1>
      <p id="eventDescription">{event.description}</p>
      <p id="eventLocation">{event.location}</p>

      <p id="dateTimeStart">{event.start.dateTime}</p>
      <div className="details-container">
          <button
            onClick={() => this.showDetailsToggle()}
            className={this.state.buttonExpanded ? "show-less" : "show-more"}
          >
            {/**button text is hide details if state is true, otherwise it's "see details" */}
            {this.state.buttonExpanded ? "Hide details" : "See details"}
          </button>

          {this.state.buttonExpanded && (
            <div className="eventDetails">
              <h2 className="about">About the event</h2>
              <a href={event.htmlLink} className="calendar-link">
                See details on Google Calendar
              </a>
              <p className="event-summary">{event.description}</p>
            </div>
          )}
        </div>
    </div>;
  }
}

export default Event;
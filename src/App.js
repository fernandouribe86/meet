import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { mockData } from "./mock-data";
import Navbar from './nav-bar';

import './nprogress.css';

class App extends Component {
  state= {
    events: mockData,
    locations: [],
  }

  // updateEvents = (location) => {
  //   getEvents().then((events) => {
  //     const locationEvents = (location === 'all') ?
  //       events :
  //       events.filter((event) => event.location === location);
  //     this.setState({
  //       events: locationEvents
  //     });
  //   });
  // }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const numberEvent = this.updateNumber();
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        eventsLength: numberEvent,
        events: locationEvents.slice(0, numberEvent),
      });
    });
  };

  //update number will interact with NumberOfEvents component to update the eventsLength state, which in return updates the events state
  updateNumber = (number) => {
    getEvents().then((events) => {
      const numberEvents =
        number === 0
          ? //if no number is entered, 32 events get displayed
            events
          : //if number is entered, set number of events gets displayed
            events.slice(0, number)
      this.setState({
        //events length set to number specified
        eventsLength: number,
        //events state set to const numberEvents variable
        events: numberEvents
      });
    this.setState({
      eventsLength: number,
    });
    });
};

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      this.setState({ events, locations: extractLocations(events) });
    });
    console.log(this.state.events);
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        
        <div id="main-container">
          <div id="left-column">
            <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />

            <NumberOfEvents updateNumber={this.updateNumber} />
            </div>
            <div id="right-column">
              <EventList events ={this.state.events} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;

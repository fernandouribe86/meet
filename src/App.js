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

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }

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

            <NumberOfEvents numberOfEvents={this.state.numberOfEvents} />
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

import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { mockData } from "./mock-data";
import Navbar from './nav-bar';
import EventGenre from './EventGenre';

import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

import './nprogress.css';

class App extends Component {
  state= {
    events: mockData,
    locations: [],
  }

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

// COUNT NUMBER OF EVENTS PER LOCATION
  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
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
            <EventGenre events={this.state.events} />
            </div>
            <div id="right-column">
              <ResponsiveContainer height={400} >
                <ScatterChart
                  width={800}
                  height={400}
                  margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                  }} >
                    <CartesianGrid />
                    <XAxis type="category" dataKey="city" name="city" />
                    <YAxis allowDecimals={false} type="number" dataKey="number" name="number of events" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                      <Scatter data={this.getData()} fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer>
              <EventList events ={this.state.events} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;

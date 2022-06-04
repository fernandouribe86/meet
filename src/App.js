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
    events: [],
    locations: [],
    numberOfEvents: 32,
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          currentLocation: location,
          numberOfEvents: eventCount,
        });

        if (!navigator.onLine) {
          this.setState({
            infoText: 'The app is currently offline'
          });
        } else {
          this.setState({
            infoText: ''
          });
        }
      }
    });
  };

  // update number will interact with NumberOfEvents component to update the eventsLength state, which in return updates the events state
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
        events: numberEvents,
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

  async componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      // this.setState({ events, locations: extractLocations(events) });
      this.setState({ events: events.slice(0, this.state.numberOfEvents), locations: extractLocations(events) });
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

            <NumberOfEvents
          updateNumber={(number) => {
            this.updateNumber(number);
          }} />
            <EventGenre events={this.state.events} />
            </div>
            <div id="right-column">
              <ResponsiveContainer height={300} width="100%" id="scatterChartContainer">
                <ScatterChart
                  id="scatterChart" >
                    <CartesianGrid />
                    <XAxis type="category" dataKey="city" name="City" id="xAxis" />
                    <YAxis allowDecimals={false} type="number" dataKey="number" name="Events" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                      <Scatter id="scatter" data={this.getData()} fill="#FF00F5" />
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

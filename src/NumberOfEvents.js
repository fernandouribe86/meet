import React, { Component } from 'react';

class NumberOfEvents extends Component {
  
  state = {
    numberOfEvents: '32'
  }

  render(){
    return (
      <div className="NumberOfEvents">

      <input
        id="numberOfEvents"
        className="numberOfEvents"
        type="number"
        value={this.props.numberOfEvents} >
        </input>

      </div>
    );
  }
}

export default NumberOfEvents;